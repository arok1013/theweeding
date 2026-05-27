import React from 'react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { submitRSVP } from '../../utils/sheetsApi.js';

const initialForm = {
  nama: '',
  phone: '',
  jumlahTamu: '1',
  kehadiran: 'Hadir',
  ucapan: ''
};

export default function RSVP({ onNewComment }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.nama.trim()) {
      setStatus('error');
      setMessage('Nama lengkap wajib diisi.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await submitRSVP(form);
      if (form.ucapan.trim()) {
        onNewComment({ nama: form.nama, ucapan: form.ucapan });
      }
      setForm(initialForm);
      setStatus('success');
      setMessage('Terima kasih, RSVP Anda sudah tercatat.');
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
    }
  };

  return (
    <section className="section rsvp fade-up">
      <span className="eyebrow">Konfirmasi Kehadiran</span>
      <h2>RSVP</h2>
      <form className="rsvp__form" onSubmit={handleSubmit}>
        <label>
          Nama Lengkap
          <input value={form.nama} onChange={(event) => update('nama', event.target.value)} placeholder="Nama Anda" required />
        </label>
        <label>
          No. HP / WhatsApp
          <input type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="Opsional" />
        </label>
        <label>
          Jumlah Tamu
          <select value={form.jumlahTamu} onChange={(event) => update('jumlahTamu', event.target.value)}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} orang
              </option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend>Konfirmasi Kehadiran</legend>
          {['Hadir', 'Tidak Hadir', 'Mungkin Hadir'].map((option) => (
            <label className="radio-pill" key={option}>
              <input
                type="radio"
                name="kehadiran"
                value={option}
                checked={form.kehadiran === option}
                onChange={(event) => update('kehadiran', event.target.value)}
              />
              {option}
            </label>
          ))}
        </fieldset>
        <label className="rsvp__wide">
          Ucapan & Doa
          <textarea value={form.ucapan} onChange={(event) => update('ucapan', event.target.value)} placeholder="Tulis doa terbaik Anda" rows="4" />
        </label>
        {message && <p className={`form-message form-message--${status}`}>{message}</p>}
        <button className="primary-button rsvp__submit" type="submit" disabled={status === 'loading'}>
          <Send size={18} />
          {status === 'loading' ? 'Mengirim...' : 'Kirim RSVP'}
        </button>
      </form>
    </section>
  );
}
