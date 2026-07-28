# QLC delivery launch acceptance

Current state: launched on the trusted QLC Vercel production project. The apex redirects to `www`, and both public entry points serve the live delivery menu.

Acceptance checks:

- 63 products, 63 local fallback images, and 58 reviewed descriptions.
- Public product objects use only the 11 allowlisted display fields.
- No SKU, source product ID, source URL, provenance, or source-brand text in the customer payload.
- Mobile flower grid remains exactly two columns.
- Product-details drawer includes modal semantics, Escape close, Tab focus trap, scroll lock, and focus restoration.
- Web Chat supports explicit New/Returning choices and the private selfie-with-ID flow.
- Delivery metadata is indexable and describes the live delivery menu.
- The stable preview origin and both eventual QLC production origins receive exact SOD CORS; unrelated origins remain rejected.
- The QLC launch did not modify P60, P59, or JFC.
- Live project lineage is trusted: apex and `www` resolve to Vercel project `prj_xZtEoMBIQTIk2pmB9DODfE3srHEz`.
- Footer, FAQ, route metadata, sitemap, homepage CTA, and delivery navigation use live-launch wording.
- Public verification covers both domains, `/delivery`, catalog images/details, and New/Returning Web Chat without creating test customer records.
