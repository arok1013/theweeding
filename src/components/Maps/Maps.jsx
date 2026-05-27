import React from 'react';
import { ExternalLink } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

const locations = [weddingConfig.akad, weddingConfig.resepsi];

export default function Maps() {
  return (
    <section className="section maps fade-up">
      <span className="eyebrow">Lokasi</span>
      <h2>Peta Acara</h2>
      <div className="maps__grid">
        {locations.map((location) => (
          <article className="map-panel" key={location.label}>
            <iframe title={`Peta ${location.label}`} src={location.embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div>
              <h3>{location.label}</h3>
              <p>{location.location}</p>
              <a className="text-button" href={location.mapsUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={16} />
                Buka di Google Maps
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
