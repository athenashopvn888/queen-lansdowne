# Athena Store Hiring Intake Setup

## Shared Response Sheet

Google Sheet:
https://docs.google.com/spreadsheets/d/13DNa6SCpN0WhNUd3G07w0lexs4huGEFSUkjIgrVEzMM/edit

Spreadsheet ID:
`13DNa6SCpN0WhNUd3G07w0lexs4huGEFSUkjIgrVEzMM`

Tabs created:
- `Applications`
- `Question Bank`
- `Store Config`
- `Status Options`
- `Setup Notes`
- `Sources`

The `Applications` tab is intentionally shared for QLC and future stores. Each row includes `StoreKey`, `StoreName`, and `Role` so later stores can use the same sheet without mixing applications.

`Store Config` is auto-maintained by the Apps Script bridge. When a new store submits its first application, the script adds or updates that store's config row from `StoreKey`, `StoreName`, `Role`, and `SourcePage`.

## QLC Application Routes

- Homepage banner links to `/careers/budtender`
- Budtender application page lives at `/careers/budtender`
- Form submissions post to `/api/careers/budtender`

## Central Review Routes

- Shared all-store review dashboard lives at `/hiring/applications`
- Dashboard data posts to `/api/hiring/applications`
- The older QLC review URL `/careers/budtender/review` redirects to `/hiring/applications`

## One-Time Apps Script Bridge

Use `apps-script/BudtenderApplications.gs` in a separate Google Apps Script project.

This is the only Google-side setup that should be needed. After the web app is deployed once, QLC and future stores can reuse the same endpoint.

One-time setup:
1. Open https://script.google.com and create a new Apps Script project.
2. Paste the contents of `apps-script/BudtenderApplications.gs`.
3. Run `setupHiringSheet()` once and approve access.
4. Deploy as a Web App.
5. Use these deployment settings:
   - Execute as: Me
   - Who has access: Anyone
6. Copy the Web App URL.
7. Set this environment variable for each store site that should store real applications:
   `ATHENA_APPLICATION_ENDPOINT=<web app URL>`
8. Set a private review PIN for the boss dashboard:
   `ATHENA_APPLICATION_REVIEW_PIN=<pin>`

`BUDTENDER_APPLICATION_ENDPOINT` still works for the QLC prototype, but `ATHENA_APPLICATION_ENDPOINT` is the reusable name for all stores.

The existing `APPS_SCRIPT_URL` is for product/menu sync. Do not reuse it for hiring.

The temporary review PIN is `9999`. Change `ATHENA_APPLICATION_REVIEW_PIN` and the `REVIEW_PIN` value in `apps-script/BudtenderApplications.gs` before using the dashboard for long-term hiring.

## Question Style

The intake is intentionally simple. It focuses on motivation, determination, reliability, availability, customer service, and interest in learning the QLC menu.

Applicant selfies are required before submission. The form sends image data to the Apps Script bridge, which stores the file in a Google Drive folder named `Athena Store Application Photos` and writes the resulting `PhotoUrl` to the shared response sheet.

The review dashboard is intentionally all-store, not QLC-only. It loads the shared `Applications` tab and supports filtering by store, profile photo, role type, status, search text, and sort order. The selected candidate appears as a profile with photo, click-to-call phone number, click-to-email address, quick facts, and question answers.

## Future Store Reuse

For the next store:
1. Reuse the same form fields where possible.
2. Change hidden form defaults: `StoreKey`, `StoreName`, `Role`, and `SourcePage`.
3. Set `ATHENA_APPLICATION_ENDPOINT` to the same Apps Script web app URL.
4. Do not manually add the store to `Store Config`; the first real submission will register it.
5. Keep one shared `Applications` tab unless a store explicitly needs a separate response sheet.

For preview/testing without writing rows, deploy with:
`BUDTENDER_APPLICATION_DEMO=true`

Remove `BUDTENDER_APPLICATION_DEMO` when the store should submit real applications.
