import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { formatDate, weddingConfig } from '../../config/wedding.config.js';

const events = [weddingConfig.akad, weddingConfig.resepsi];

export default function EventDetails() {
  return (
    <section className="section events fade-up">
      <span className="eyebrow">Rangkaian Acara</span>
      <h2>Detail Acara</h2>
      <div className="events__grid">
        {events.map((event) => (
          <article className="event-card" key={event.label}>
            <h3>{event.label}</h3>
            <p className="event-card__date">{formatDate(event.date)}</p>
            <p>
              <Clock size={18} />
              {event.time}
            </p>
            <p>
              <MapPin size={18} />
              {event.location}
            </p>
            <address>{event.address}</address>
            <a className="text-button" href={event.mapsUrl} target="_blank" rel="noreferrer">
              Buka Google Maps
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
