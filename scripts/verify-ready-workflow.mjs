import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../app/delivery/IdVerificationChat.tsx", import.meta.url), "utf8");
const deliverySources = [
  source,
  readFileSync(new URL("../app/delivery/DeliveryCatalog.tsx", import.meta.url), "utf8"),
  readFileSync(new URL("../app/delivery/page.tsx", import.meta.url), "utf8"),
].join("\n");

assert.match(source, /const shouldOpen = new URLSearchParams\(window\.location\.search\)\.get\("liveOrder"\) === "1"/);
assert.match(source, /if \(shouldOpen\) setOpen\(true\)/);
assert.doesNotMatch(source, /useState\(\(\) => typeof window[^\n]+liveOrder/);
assert.match(source, /workflowVersion: "READY_V1"/);
assert.match(source, /smsConsent/);
assert.match(source, /I agree to receive one READY delivery-link text for this order\./);
assert.match(source, /<textarea required minLength=\{2\}/);
assert.match(source, /if \(!orderDetails\)/);
assert.match(source, /disabled=\{busy \|\| !smsConsent \|\| !firstMessage\.trim\(\)\}/);
assert.match(source, /new URLSearchParams\(window\.location\.hash\.slice\(1\)\)\.get\("sod"\)/);
assert.match(source, /localStorage\.setItem\(SESSION_KEY, resumeToken\)/);
assert.doesNotMatch(source, /Order details \(optional\)/);
assert.match(source, /\/api\/web-chat\/phone/);
assert.match(source, /phoneConfirmation: replacementPhoneConfirmation/);
assert.match(source, /START ANOTHER ORDER/);
assert.match(source, /\/api\/web-chat\/order-cycle/);
assert.match(source, /requestId: crypto\.randomUUID\(\)/);
assert.match(source, /securely retained for future identity and address verification/);
assert.match(source, /localStorage\.getItem\(SESSION_KEY\)/);
assert.doesNotMatch(deliverySources, /href=["'{`]sms:/i);
assert.doesNotMatch(deliverySources, /SOD_(?:OPERATOR_ALERT|DISPATCHER_MAIN)_PHONE|Dispatcher Main/i);
assert.doesNotMatch(deliverySources, /Reply YES|YES confirmation/i);

console.log("READY workflow storefront guard passed.");
