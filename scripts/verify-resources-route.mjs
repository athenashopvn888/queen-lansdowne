import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing required Resources file: ${relativePath}`);
  }
  return fs.readFileSync(absolutePath, "utf8");
}

const requiredFiles = [
  "app/resources/page.tsx",
  "app/resources/[...slug]/page.tsx",
  "app/resources/ResourceView.tsx",
  "app/resources/resourceData.ts",
  "app/resources/resources.module.css",
];

for (const file of requiredFiles) {
  read(file);
}

const nav = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const sitemap = read("app/sitemap.ts");
const resourceData = read("app/resources/resourceData.ts");

const resourceRoutes = [...resourceData.matchAll(/"route":\s*"(\/resources[^"]*)"/g)].map((match) => match[1]);
const uniqueResourceRoutes = new Set(resourceRoutes);

const checks = [
  {
    ok: nav.includes('href: "/resources"'),
    message: "Navbar must link to /resources.",
  },
  {
    ok: footer.includes('href="/resources"'),
    message: "Footer must link to /resources.",
  },
  {
    ok: sitemap.includes("RESOURCE_PATHS") && sitemap.includes("resourcePages"),
    message: "Sitemap must include RESOURCE_PATHS-driven Resources URLs.",
  },
  {
    ok: uniqueResourceRoutes.has("/resources"),
    message: "Resource data must include the /resources hub.",
  },
  {
    ok: uniqueResourceRoutes.size >= 24,
    message: `Expected at least 24 Resources routes, found ${uniqueResourceRoutes.size}.`,
  },
];

const failures = checks.filter((check) => !check.ok);

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`Resources route check failed: ${failure.message}`);
  }
  process.exit(1);
}

console.log(`Resources route check passed: ${uniqueResourceRoutes.size} routes, nav link, footer link, and sitemap coverage.`);
