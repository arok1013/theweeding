import React from 'react';
import { useCountdown } from '../../hooks/useCountdown.js';

const labels = {
  days: 'Hari',
  hours: 'Jam',
  minutes: 'Menit',
  seconds: 'Detik'
};

export default function Countdown({ targetDate }) {
  const countdown = useCountdown(targetDate);

  return (
    <section className="section countdown fade-up">
      <span className="eyebrow">Menuju Hari Bahagia</span>
      <h2>Hitung Mundur</h2>
      {countdown.complete ? (
        <p className="section__lead">Hari yang dinanti telah tiba. Terima kasih atas doa terbaiknya.</p>
      ) : (
        <div className="countdown__grid">
          {Object.entries(labels).map(([key, label]) => (
            <div className="count-card" key={key}>
              <strong>{String(countdown[key]).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
