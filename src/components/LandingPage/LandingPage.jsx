import React from 'react';
import { Heart, MailOpen } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function LandingPage({ guestName, onOpen }) {
  const invitationText = guestName
    ? `Kami mengundang Bapak/Ibu/Saudara/i ${guestName} untuk hadir dan memberi doa restu.`
    : 'Kami mengundang Bapak/Ibu/Saudara untuk hadir dan memberi doa restu.';

  return (
    <main className="landing">
      <div className="landing__image" aria-hidden="true" />
      <section className="landing__content">
        <span className="eyebrow">Undangan Pernikahan</span>
        <h1>
          {weddingConfig.groom.name} <span>&</span> {weddingConfig.bride.name}
        </h1>
        <p>{invitationText}</p>
        <button className="primary-button" type="button" onClick={onOpen}>
          <MailOpen size={20} />
          Buka Undangan
        </button>
      </section>
      <Heart className="landing__mark landing__mark--one" size={34} />
      <Heart className="landing__mark landing__mark--two" size={24} />
    </main>
  );
}
