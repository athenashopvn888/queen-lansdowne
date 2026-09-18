/**
 * Prebuild script: Fetches live stock data from Apps Script
 * and writes flowers.json + items.json before Next.js builds.
 *
 * This runs automatically via "prebuild" in package.json.
 * If the fetch fails, the existing JSON files are kept as fallback.
 *
 * Prefer stock=1 + catalog=1 (fast). Combined without a long timeout
 * can hang, so combined is only a fallback with a 120s budget.
 */

const fs = require('fs');
const path = require('path');

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || '';
const STORE_CODE = process.env.STORE_CODE || 'QLC01';
const FETCH_TIMEOUT_MS = Number(process.env.APPS_SCRIPT_TIMEOUT_MS || 120000);
const FLOWERS_PATH = path.join(__dirname, '..', 'app', 'lib', 'flowers.json');
const ITEMS_PATH = path.join(__dirname, '..', 'app', 'lib', 'items.json');
const SNAPSHOT_PATH = path.join(__dirname, '..', 'app', 'lib', 'stock-snapshot.json');

const WEIGHTS = [
  ['3g', 'price3g'],
  ['5g', 'price5g'],
  ['14g', 'price14g'],
  ['28g', 'price28g'],
];

async function fetchJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

function applyStockFilter(catalog, stockData) {
  const stock = stockData && stockData.stock ? stockData.stock : {};
  const flowers = [];

  for (const flower of catalog.flowers || []) {
    const sku = String(flower.sku || '').trim();
    const skuStock = stock[sku];
    if (!skuStock) continue;

    const next = { ...flower };
    for (const [weight, key] of WEIGHTS) {
      if (!skuStock[weight] || skuStock[weight] <= 0) {
        next[key] = null;
      }
    }
    if (!next.price3g && !next.price5g && !next.price14g && !next.price28g) {
      continue;
    }
    flowers.push(next);
  }

  const items = [];
  for (const item of catalog.items || []) {
    const skus = String(item.sku || '')
      .split(',')
      .map((part) => part.trim().replace(/\.0$/, ''))
      .filter(Boolean);
    if (skus.some((sku) => stock[sku])) {
      items.push(item);
    }
  }

  return {
    flowers,
    items,
    storeCode: stockData.storeCode || STORE_CODE,
    stockDate: stockData.date || stockData.stockDate || null,
    skuCount: stockData.skuCount || Object.keys(stock).length,
    source: 'apps-script-stock=1+catalog=1',
  };
}

async function fetchLiveMenu(baseUrl) {
  const stockUrl = `${baseUrl}?store=${STORE_CODE}&stock=1`;
  const catalogUrl = `${baseUrl}?store=${STORE_CODE}&catalog=1`;

  try {
    console.log('[prebuild] Fetching stock=1 + catalog=1 from Apps Script...');
    const [stockData, catalog] = await Promise.all([
      fetchJson(stockUrl),
      fetchJson(catalogUrl),
    ]);

    if (!stockData || !stockData.stock) {
      throw new Error('Invalid stock=1 response: missing stock');
    }
    if (!catalog.flowers || !catalog.items) {
      throw new Error('Invalid catalog=1 response: missing flowers or items');
    }

    return applyStockFilter(catalog, stockData);
  } catch (err) {
    console.warn(`[prebuild] stock=1/catalog=1 failed: ${err.message}`);
    console.log('[prebuild] Falling back to combined fetch with 120s timeout...');
    const combined = await fetchJson(`${baseUrl}?store=${STORE_CODE}`);
    if (!combined.flowers || !combined.items) {
      throw new Error('Invalid combined response: missing flowers or items');
    }
    combined.source = 'apps-script-combined';
    combined.skuCount = combined.skuCount || null;
    return combined;
  }
}

async function main() {
  if (!APPS_SCRIPT_URL) {
    console.log('[prebuild] No APPS_SCRIPT_URL set — using existing static JSON files');
    return;
  }

  try {
    const data = await fetchLiveMenu(APPS_SCRIPT_URL);

    if (!data.flowers || !data.items) {
      throw new Error('Invalid response: missing flowers or items');
    }

    // ── Post-process flowers: derive sale flags + clean names ──
    const SALE_RE = /\bSALE\b/i;
    const ON_SALE_RE = /ON\s*SALE/i;
    function hasSalePrice(f) {
      return !!(
        (f.price3g && f.price3g.sale !== null) ||
        (f.price5g && f.price5g.sale !== null) ||
        (f.price14g && f.price14g.sale !== null) ||
        (f.price28g && f.price28g.sale !== null)
      );
    }
    function cleanName(name) {
      return name
        .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '')
        .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '')
        .replace(/\s*\bSALE!?\s*$/i, '')
        .replace(/\s*\bON\s*SALE\s*$/i, '')
        .trim();
    }
    let saleFixed = 0;
    for (const f of data.flowers) {
      // Derive isSale from name or prices
      if (!f.isSale) {
        if (SALE_RE.test(f.name) || ON_SALE_RE.test(f.name) || hasSalePrice(f)) {
          f.isSale = true;
          saleFixed++;
        }
      }
      // Clean display name
      f.name = cleanName(f.name);
    }
    if (saleFixed > 0) console.log(`[prebuild] Fixed ${saleFixed} sale flags from names`);

    // Write flowers.json
    fs.writeFileSync(FLOWERS_PATH, JSON.stringify(data.flowers, null, 2) + '\n', 'utf-8');
    console.log(`[prebuild] flowers.json updated: ${data.flowers.length} products`);

    // Tier breakdown
    const tiers = {};
    data.flowers.forEach(f => { tiers[f.tier] = (tiers[f.tier] || 0) + 1; });
    Object.entries(tiers).forEach(([t, c]) => console.log(`  ${t}: ${c}`));

    // ── Post-process items: fix '$[object Object]' prices ──
    let itemsFixed = 0;
    for (const it of data.items) {
      if (typeof it.price === 'string' && it.price.includes('[object')) {
        // Price was mangled by parsePriceCell_ returning an object
        // Try to extract from the raw price data
        it.price = '';
        itemsFixed++;
      }
    }
    if (itemsFixed > 0) console.log(`[prebuild] Fixed ${itemsFixed} mangled item prices`);

    // Write items.json
    fs.writeFileSync(ITEMS_PATH, JSON.stringify(data.items, null, 2) + '\n', 'utf-8');
    console.log(`[prebuild] items.json updated: ${data.items.length} products`);

    // Category breakdown
    const cats = {};
    data.items.forEach(i => { cats[i.category] = (cats[i.category] || 0) + 1; });
    Object.entries(cats).sort().forEach(([c, n]) => console.log(`  ${c}: ${n}`));

    const snapshot = {
      storeCode: data.storeCode || STORE_CODE,
      stockDate: data.stockDate || null,
      flowerCount: data.flowers.length,
      itemCount: data.items.length,
      skuCount: data.skuCount || null,
      source: data.source || 'apps-script',
    };
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + '\n', 'utf-8');
    console.log(`[prebuild] stock-snapshot.json written`);

    console.log(`[prebuild] Stock date: ${data.stockDate || 'unknown'}`);
    console.log('[prebuild] Done!');

  } catch (err) {
    console.warn(`[prebuild] Live fetch failed: ${err.message}`);
    console.warn('[prebuild] Keeping existing JSON files as fallback');
  }
}

main();
