# Google Sheets RSVP Setup

1. Buka spreadsheet RSVP.
2. Pilih `Ekstensi` -> `Apps Script`.
3. Buat file `Code.gs`, lalu isi dengan kode dari `google-apps-script/Code.gs`.
4. Klik `Run` pada fungsi `setupSheets`, lalu beri permission.
5. Klik `Deploy` -> `New deployment`.
6. Pilih type `Web app`.
7. Set `Execute as` ke `Me`.
8. Set `Who has access` ke `Anyone`.
9. Copy URL `/exec`.
10. Di Vercel, isi Environment Variable:

```text
VITE_SHEETS_ENDPOINT=https://script.google.com/macros/s/.../exec
```

Setelah env var diisi, redeploy project di Vercel.
