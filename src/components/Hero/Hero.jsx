import React from 'react';
import { CalendarDays } from 'lucide-react';
import { formatDate, weddingConfig } from '../../config/wedding.config.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="eyebrow">The Wedding of</span>
        <h1>
          {weddingConfig.groom.name}
          <span>&</span>
          {weddingConfig.bride.name}
        </h1>
        <p className="hero__date">
          <CalendarDays size={20} />
          {formatDate(weddingConfig.weddingDate)}
        </p>
        <blockquote>
          "{weddingConfig.quote}"
          <cite>{weddingConfig.quoteSource}</cite>
        </blockquote>
      </div>
    </section>
  );
}
