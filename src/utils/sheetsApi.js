import { weddingConfig } from '../config/wedding.config.js';

const endpoint = () => weddingConfig.sheetsEndpoint;

export async function submitRSVP(payload) {
  if (!endpoint()) {
    throw new Error('SHEETS_ENDPOINT belum dikonfigurasi di .env');
  }

  const body = {
    nama: payload.nama,
    phone: payload.phone,
    jumlahTamu: payload.jumlahTamu,
    kehadiran: payload.kehadiran,
    ucapan: payload.ucapan,
    device: navigator.userAgent
  };

  const response = await fetch(endpoint(), {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error('RSVP gagal dikirim. Silakan coba lagi.');
  }

  const data = await response.json().catch(() => ({ ok: true }));
  if (data && data.ok === false) {
    throw new Error(data.message || 'RSVP gagal dikirim. Silakan coba lagi.');
  }

  return data;
}

export async function fetchUcapan() {
  if (!endpoint()) {
    return [];
  }

  const url = new URL(endpoint());
  url.searchParams.set('action', 'getUcapan');

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Ucapan belum bisa dimuat.');
  }

  return response.json();
}
