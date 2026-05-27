const SPREADSHEET_ID = '1hEsYLPK3U5WXqQ3NAeEl9V98waypvLRzm3OvPnkFa5c';
const RSVP_SHEET_NAME = 'rsvp';

const HEADERS = [
  'Timestamp',
  'Nama Lengkap',
  'No HP/WhatsApp',
  'Jumlah Tamu',
  'Status Kehadiran',
  'Ucapan & Doa',
  'IP / Device (Opsional)'
];

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const sheet = getSheet_();
    ensureHeaders_(sheet);

    const row = [
      new Date(),
      payload.nama || payload.namaLengkap || '',
      payload.phone || payload.noHpWhatsApp || '',
      payload.jumlahTamu || '1',
      payload.kehadiran || payload.statusKehadiran || 'Hadir',
      payload.ucapan || payload.ucapanDoa || '',
      payload.device || ''
    ];

    sheet.appendRow(row);

    return json_({
      ok: true,
      message: 'RSVP berhasil disimpan.'
    });
  } catch (error) {
    return json_(
      {
        ok: false,
        message: error.message
      },
      500
    );
  }
}

function doGet(e) {
  const action = e && e.parameter && e.parameter.action;

  if (action === 'getUcapan') {
    return json_(getUcapan_());
  }

  return json_({
    ok: true,
    message: 'The Weeding RSVP endpoint aktif.'
  });
}

function setupSheets() {
  const sheet = getSheet_();
  ensureHeaders_(sheet);
}

function getUcapan_() {
  const sheet = getSheet_();
  ensureHeaders_(sheet);

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const rows = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();

  return rows
    .map(function (row, index) {
      return {
        id: 'sheet-' + (index + 2),
        timestamp: row[0] ? new Date(row[0]).toISOString() : new Date().toISOString(),
        nama: row[1] || 'Tamu',
        ucapan: row[5] || ''
      };
    })
    .filter(function (comment) {
      return comment.ucapan;
    })
    .reverse();
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Payload kosong.');
  }

  return JSON.parse(e.postData.contents);
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheetByName(RSVP_SHEET_NAME) || spreadsheet.insertSheet(RSVP_SHEET_NAME);
}

function ensureHeaders_(sheet) {
  const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const shouldWriteHeaders = HEADERS.some(function (header, index) {
    return currentHeaders[index] !== header;
  });

  if (shouldWriteHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
