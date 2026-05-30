import React, { useMemo, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, UserRound } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

const cleanPhone = (value) => value.replace(/[^\d]/g, '').replace(/^0/, '62');

const getInviteBaseUrl = () => `${window.location.origin}/`;

export default function InviteShare({ initialGuestName = '' }) {
  const [recipientName, setRecipientName] = useState(initialGuestName);
  const [phone, setPhone] = useState('');
  const [copied, setCopied] = useState('');

  const trimmedName = recipientName.trim();
  const inviteUrl = useMemo(() => {
    const url = new URL(getInviteBaseUrl());
    if (trimmedName) {
      url.searchParams.set('to', trimmedName);
    }
    return url.toString();
  }, [trimmedName]);

  const message = useMemo(() => {
    const recipient = trimmedName || '(nama tamu undangan)';
    return [
      'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
      '',
      'Dengan penuh kebahagiaan dan kerendahan hati, kami menyampaikan undangan istimewa kepada:',
      recipient,
      '',
      'Merupakan suatu kehormatan bagi kami untuk mengundang Bapak/Ibu/Saudara/i agar berkenan hadir menyaksikan dan memberikan doa restu pada momen sakral pernikahan:',
      `${weddingConfig.groom.name} & ${weddingConfig.bride.name}`,
      '',
      'Kehadiran dan restu Anda adalah hadiah terindah bagi keluarga kami.',
      '',
      '📩 Informasi lengkap mengenai waktu, tempat, dan rangkaian acara dapat dilihat melalui undangan digital berikut:',
      `👉 ${inviteUrl}`,
      '',
      'Atas perhatian dan kehadiran Bapak/Ibu/Saudara/i, kami mengucapkan terima kasih yang sebesar-besarnya.'
    ].join('\n');
  }, [inviteUrl, trimmedName]);

  const whatsappUrl = useMemo(() => {
    const phoneNumber = cleanPhone(phone);
    const target = phoneNumber ? `https://wa.me/${phoneNumber}` : 'https://wa.me/';
    return `${target}?text=${encodeURIComponent(message)}`;
  }, [message, phone]);

  const copyText = async (text, key) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    window.setTimeout(() => setCopied(''), 1800);
  };

  return (
    <section className="section invite-share">
      <div className="invite-share__header">
        <div>
          <span className="eyebrow">Dashboard Undangan</span>
          <h2>Bagikan Undangan</h2>
        </div>
        <a className="text-button invite-share__preview" href={inviteUrl} target="_blank" rel="noreferrer">
          <ExternalLink size={18} />
          Preview
        </a>
      </div>

      <div className="invite-share__panel">
        <label>
          Nama Penerima
          <div className="input-with-icon">
            <UserRound size={18} />
            <input
              value={recipientName}
              onChange={(event) => setRecipientName(event.target.value)}
              placeholder="Contoh: Bapak Ahmad dan Ibu"
            />
          </div>
        </label>

        <label>
          Nomor WhatsApp
          <div className="input-with-icon">
            <MessageCircle size={18} />
            <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Opsional, contoh: 081234567890" />
          </div>
        </label>

        <label className="invite-share__wide">
          Link Undangan
          <div className="copy-field">
            <input value={inviteUrl} readOnly />
            <button className="icon-button" type="button" onClick={() => copyText(inviteUrl, 'link')} aria-label="Salin link undangan">
              {copied === 'link' ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </label>

        <label className="invite-share__wide">
          Pesan WhatsApp
          <textarea value={message} readOnly rows="5" />
        </label>

        <div className="invite-share__actions">
          <button className="primary-button" type="button" onClick={() => copyText(message, 'message')}>
            {copied === 'message' ? <Check size={18} /> : <Copy size={18} />}
            {copied === 'message' ? 'Pesan Disalin' : 'Salin Pesan'}
          </button>
          <a className="primary-button invite-share__wa" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Kirim via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
