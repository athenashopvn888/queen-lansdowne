# QLC delivery launch acceptance

Current state: feature-branch staging and Vercel preview only. The apex and `www` production domains remain on the existing waitlist deployment.

Acceptance checks:

- 63 products, 63 local fallback images, and 58 reviewed descriptions.
- Public product objects use only the 11 allowlisted display fields.
- No SKU, source product ID, source URL, provenance, or source-brand text in the customer payload.
- Mobile flower grid remains exactly two columns.
- Product-details drawer includes modal semantics, Escape close, Tab focus trap, scroll lock, and focus restoration.
- Web Chat supports explicit New/Returning choices and the private selfie-with-ID flow.
- Preview metadata is `noindex,nofollow`.
- The stable preview origin and both eventual QLC production origins receive exact SOD CORS; unrelated origins remain rejected.
- This staging task does not modify P60, P59, or JFC.
- Live project lineage is trusted: apex and `www` resolve to Vercel project `prj_xZtEoMBIQTIk2pmB9DODfE3srHEz`.
- Production currently serves an older waitlist/navigation build than local `main`; treat that drift as a required GO-time comparison, not as permission to replace production during staging.

GO-only actions:

1. Recheck current QLC delivery availability with the dispatcher.
2. Review and approve footer, FAQ, route metadata/robots, sitemap, and any desired navigation wording.
3. Review and merge the feature PR.
4. Deploy the merged `main` to the existing trusted queen project.
5. Verify both public domains, `/delivery`, catalog images/details, and New/Returning Web Chat end to end without creating test customer records unless explicitly approved.
6. Only after live verification, update customer links and send approved announcements.
