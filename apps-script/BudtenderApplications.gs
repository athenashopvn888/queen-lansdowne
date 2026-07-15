/**
 * Athena Store Applications - Hiring Intake
 *
 * Use this in a separate Google Apps Script project from the product/menu sync.
 * Deploy once as a Web App and reuse the URL across every store site.
 * Recommended site env var:
 * ATHENA_APPLICATION_ENDPOINT=<web app URL>
 */

var APPLICATION_SPREADSHEET_ID = '13DNa6SCpN0WhNUd3G07w0lexs4huGEFSUkjIgrVEzMM';
var APPLICATION_SHEET_NAME = 'Applications';
var STORE_CONFIG_SHEET_NAME = 'Store Config';
var PHOTO_FOLDER_NAME = 'Athena Store Application Photos';
var MAX_PHOTO_BYTES = 4 * 1024 * 1024;
var ALLOWED_PHOTO_MIME_TYPES = {
  'image/jpeg': true,
  'image/png': true,
  'image/webp': true
};

var APPLICATION_HEADERS = [
  'ApplicationId',
  'SubmittedAt',
  'StoreKey',
  'StoreName',
  'Role',
  'SourcePage',
  'Status',
  'Reviewer',
  'ReviewedAt',
  'ApplicantName',
  'PreferredName',
  'Email',
  'Phone',
  'CityArea',
  'PhotoUrl',
  'PhotoFileName',
  'EmploymentType',
  'Availability',
  'LateShiftAvailability',
  'EarliestStartDate',
  'RetailExperience',
  'CannabisInterest',
  'CashHandlingExperience',
  'ProductComfort',
  'Motivation',
  'Determination',
  'CustomerFitScenario',
  'TeamworkScenario',
  'WhyQLC',
  'TransportationReliability',
  'ResumeUrl',
  'PortfolioUrl',
  'ConsentToContact',
  'PrivacyConsent',
  'Notes',
  'Potential'
];

var STORE_CONFIG_HEADERS = [
  'StoreKey',
  'StoreName',
  'DefaultRole',
  'PrimaryApplicationPage',
  'EndpointMode',
  'FirstSeenAt',
  'LastSubmissionAt',
  'Active'
];

var REVIEW_PIN = '9999';

function doGet(e) {
  var ss = SpreadsheetApp.openById(APPLICATION_SPREADSHEET_ID);
  setupHiringSheet_(ss);
  var params = e && e.parameter ? e.parameter : {};

  if (value_(params.action) === 'applications') {
    return listApplications_(ss, params);
  }

  return json_({
    ok: true,
    service: 'Athena store applications',
    sheetId: APPLICATION_SPREADSHEET_ID,
    applicationsSheet: APPLICATION_SHEET_NAME,
    storeConfigSheet: STORE_CONFIG_SHEET_NAME
  });
}

function listApplications_(ss, params) {
  if (value_(params.pin) !== REVIEW_PIN) {
    return json_({
      ok: false,
      error: 'Invalid review pin.'
    });
  }

  var sheet = getOrCreateSheet_(ss, APPLICATION_SHEET_NAME);
  ensureHeaders_(sheet, APPLICATION_HEADERS);
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return json_({
      ok: true,
      generatedAt: new Date().toISOString(),
      applications: []
    });
  }

  var maxRows = Math.min(Number(params.limit) || 250, 1000);
  var startRow = Math.max(2, lastRow - maxRows + 1);
  var values = sheet.getRange(startRow, 1, lastRow - startRow + 1, APPLICATION_HEADERS.length).getValues();
  var storeKey = value_(params.storeKey);
  var applications = [];

  for (var i = 0; i < values.length; i++) {
    var record = rowToApplication_(values[i], startRow + i);
    if (!record.ApplicationId) continue;
    if (storeKey && value_(record.StoreKey) !== storeKey) continue;
    applications.push(record);
  }

  applications.sort(function(a, b) {
    return dateTimeValue_(b.SubmittedAt) - dateTimeValue_(a.SubmittedAt);
  });

  return json_({
    ok: true,
    generatedAt: new Date().toISOString(),
    applications: applications
  });
}

function rowToApplication_(row, rowNumber) {
  var record = {
    RowNumber: rowNumber
  };

  for (var i = 0; i < APPLICATION_HEADERS.length; i++) {
    var value = row[i];
    record[APPLICATION_HEADERS[i]] = value instanceof Date ? value.toISOString() : value_(value);
  }

  return record;
}

function dateTimeValue_(value) {
  var parsed = Date.parse(value_(value));
  return isNaN(parsed) ? 0 : parsed;
}

function doPost(e) {
  try {
    var payload = parsePayload_(e);
    var ss = SpreadsheetApp.openById(APPLICATION_SPREADSHEET_ID);
    setupHiringSheet_(ss);
    var sheet = getOrCreateSheet_(ss, APPLICATION_SHEET_NAME);

    if (value_(payload.Action) === 'reviewUpdate') {
      return updateApplicationReview_(ss, payload);
    }

    payload.StoreKey = value_(payload.StoreKey) || 'UNASSIGNED';
    payload.StoreName = value_(payload.StoreName) || 'Unassigned Store';
    payload.Role = value_(payload.Role) || 'Budtender';
    payload.SourcePage = value_(payload.SourcePage) || 'Unknown';
    payload.ApplicationId = value_(payload.ApplicationId) || makeApplicationId_(payload.StoreKey);
    payload.SubmittedAt = value_(payload.SubmittedAt) || new Date().toISOString();
    payload.Status = value_(payload.Status) || 'New';

    savePhotoIfPresent_(payload);
    ensureStoreConfig_(ss, payload);

    var row = APPLICATION_HEADERS.map(function(header) {
      return value_(payload[header]);
    });

    sheet.appendRow(row);
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, APPLICATION_HEADERS.length).setWrap(true);

    return json_({
      ok: true,
      applicationId: payload.ApplicationId,
      row: lastRow
    });
  } catch (err) {
    return json_({
      ok: false,
      error: err && err.message ? err.message : String(err)
    });
  }
}

function setupHiringSheet() {
  var ss = SpreadsheetApp.openById(APPLICATION_SPREADSHEET_ID);
  setupHiringSheet_(ss);
  return 'Hiring intake is ready: ' + APPLICATION_SHEET_NAME + ' + ' + STORE_CONFIG_SHEET_NAME;
}

function updateApplicationReview_(ss, payload) {
  if (value_(payload.pin) !== REVIEW_PIN) {
    throw new Error('Invalid review pin.');
  }

  var applicationId = value_(payload.ApplicationId);
  if (!applicationId) {
    throw new Error('Missing application ID.');
  }

  var sheet = getOrCreateSheet_(ss, APPLICATION_SHEET_NAME);
  ensureHeaders_(sheet, APPLICATION_HEADERS);
  var rowNumber = findApplicationRow_(sheet, applicationId);
  if (!rowNumber) {
    throw new Error('Application not found.');
  }

  var columnMap = applicationColumnMap_();
  if (hasOwn_(payload, 'Potential')) {
    var potential = value_(payload.Potential).toLowerCase() === 'yes' ? 'Yes' : '';
    sheet.getRange(rowNumber, columnMap.Potential).setValue(potential);
  }
  if (hasOwn_(payload, 'Status')) {
    sheet.getRange(rowNumber, columnMap.Status).setValue(value_(payload.Status) || 'New');
  }
  if (hasOwn_(payload, 'Notes')) {
    sheet.getRange(rowNumber, columnMap.Notes).setValue(value_(payload.Notes));
  }
  if (value_(payload.Reviewer)) {
    sheet.getRange(rowNumber, columnMap.Reviewer).setValue(value_(payload.Reviewer));
  }
  sheet.getRange(rowNumber, columnMap.ReviewedAt).setValue(new Date().toISOString());
  sheet.getRange(rowNumber, 1, 1, APPLICATION_HEADERS.length).setWrap(true);

  return json_({
    ok: true,
    application: rowToApplication_(
      sheet.getRange(rowNumber, 1, 1, APPLICATION_HEADERS.length).getValues()[0],
      rowNumber
    )
  });
}

function findApplicationRow_(sheet, applicationId) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  var columnMap = applicationColumnMap_();
  var values = sheet.getRange(2, columnMap.ApplicationId, lastRow - 1, 1).getValues();
  for (var i = 0; i < values.length; i++) {
    if (value_(values[i][0]) === applicationId) {
      return i + 2;
    }
  }
  return 0;
}

function applicationColumnMap_() {
  var map = {};
  for (var i = 0; i < APPLICATION_HEADERS.length; i++) {
    map[APPLICATION_HEADERS[i]] = i + 1;
  }
  return map;
}

function hasOwn_(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function setupHiringSheet_(ss) {
  var sheet = getOrCreateSheet_(ss, APPLICATION_SHEET_NAME);
  ensureHeaders_(sheet, APPLICATION_HEADERS);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, APPLICATION_HEADERS.length).setFontWeight('bold');
  sheet.autoResizeColumns(1, APPLICATION_HEADERS.length);

  var configSheet = getOrCreateSheet_(ss, STORE_CONFIG_SHEET_NAME);
  ensureHeaders_(configSheet, STORE_CONFIG_HEADERS);
  configSheet.setFrozenRows(1);
  configSheet.getRange(1, 1, 1, STORE_CONFIG_HEADERS.length).setFontWeight('bold');
  configSheet.autoResizeColumns(1, STORE_CONFIG_HEADERS.length);
}

function parsePayload_(e) {
  if (e && e.postData && e.postData.contents) {
    var body = e.postData.contents;
    try {
      return JSON.parse(body);
    } catch (err) {
      throw new Error('Invalid JSON payload.');
    }
  }
  if (e && e.parameter) return e.parameter;
  return {};
}

function getOrCreateSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function ensureHeaders_(sheet, headers) {
  var current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  var hasAnyHeader = current.some(function(cell) {
    return String(cell || '').trim() !== '';
  });

  if (!hasAnyHeader) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    return;
  }

  for (var i = 0; i < headers.length; i++) {
    var currentHeader = String(current[i] || '').trim();
    if (!currentHeader) {
      sheet.getRange(1, i + 1).setValue(headers[i]);
      continue;
    }
    if (currentHeader !== headers[i]) {
      throw new Error(sheet.getName() + ' header mismatch at column ' + (i + 1) + '. Expected ' + headers[i] + '.');
    }
  }
}

function makeApplicationId_(storeKey) {
  var prefix = value_(storeKey) || 'STORE';
  return prefix + '-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss') + '-' + Utilities.getUuid().slice(0, 8).toUpperCase();
}

function ensureStoreConfig_(ss, payload) {
  var sheet = getOrCreateSheet_(ss, STORE_CONFIG_SHEET_NAME);
  ensureHeaders_(sheet, STORE_CONFIG_HEADERS);

  var storeKey = value_(payload.StoreKey);
  if (!storeKey) return;

  var lastRow = sheet.getLastRow();
  var now = new Date().toISOString();

  if (lastRow < 2) {
    appendStoreConfig_(sheet, payload, now, now);
    return;
  }

  var keys = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (var i = 0; i < keys.length; i++) {
    if (value_(keys[i][0]) === storeKey) {
      var rowNumber = i + 2;
      sheet.getRange(rowNumber, 2).setValue(value_(payload.StoreName));
      sheet.getRange(rowNumber, 3).setValue(value_(payload.Role));
      sheet.getRange(rowNumber, 4).setValue(value_(payload.SourcePage));
      sheet.getRange(rowNumber, 5).setValue('auto');
      sheet.getRange(rowNumber, 7).setValue(now);
      sheet.getRange(rowNumber, 8).setValue('Yes');
      return;
    }
  }

  appendStoreConfig_(sheet, payload, now, now);
}

function appendStoreConfig_(sheet, payload, firstSeenAt, lastSubmissionAt) {
  sheet.appendRow([
    value_(payload.StoreKey),
    value_(payload.StoreName),
    value_(payload.Role),
    value_(payload.SourcePage),
    'auto',
    firstSeenAt,
    lastSubmissionAt,
    'Yes'
  ]);
}

function savePhotoIfPresent_(payload) {
  var base64 = value_(payload.PhotoDataBase64);
  if (!base64) {
    throw new Error('A clear selfie photo is required before submitting.');
  }

  var mimeType = value_(payload.PhotoMimeType) || 'image/jpeg';
  if (!ALLOWED_PHOTO_MIME_TYPES[mimeType]) {
    throw new Error('Photo must be a JPG, PNG, or WebP image.');
  }

  var fileName = sanitizeFileName_(value_(payload.PhotoFileName) || 'application-photo.jpg');
  var folder = getPhotoFolder_();
  var bytes = Utilities.base64Decode(base64);
  if (bytes.length > MAX_PHOTO_BYTES) {
    throw new Error('Photo must be under 4 MB.');
  }
  var blob = Utilities.newBlob(bytes, mimeType, payload.ApplicationId + '-' + fileName);
  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  payload.PhotoUrl = file.getUrl();
  payload.PhotoFileName = fileName;
  delete payload.PhotoDataBase64;
  delete payload.PhotoMimeType;
}

function getPhotoFolder_() {
  var folders = DriveApp.getFoldersByName(PHOTO_FOLDER_NAME);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(PHOTO_FOLDER_NAME);
}

function sanitizeFileName_(name) {
  return String(name || 'application-photo.jpg').replace(/[\\/:*?"<>|]/g, '-').slice(0, 120);
}

function value_(input) {
  if (input === null || input === undefined) return '';
  if (Array.isArray(input)) {
    return input.map(value_).filter(Boolean).join(', ');
  }
  if (typeof input === 'object') return JSON.stringify(input);
  return String(input).trim();
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
