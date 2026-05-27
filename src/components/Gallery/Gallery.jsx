import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activePhoto = activeIndex === null ? null : weddingConfig.photos[activeIndex];

  const move = (direction) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return weddingConfig.photos.length - 1;
      if (next >= weddingConfig.photos.length) return 0;
      return next;
    });
  };

  return (
    <section className="section gallery fade-up">
      <span className="eyebrow">Galeri</span>
      <h2>Potret Cerita Kami</h2>
      <div className="gallery__grid">
        {weddingConfig.photos.map((photo, index) => (
          <button className="photo-card" key={photo.src} type="button" onClick={() => setActiveIndex(index)}>
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <span>{photo.caption}</span>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="icon-button lightbox__close" type="button" onClick={() => setActiveIndex(null)} aria-label="Tutup galeri">
            <X size={22} />
          </button>
          <button className="icon-button lightbox__nav" type="button" onClick={() => move(-1)} aria-label="Foto sebelumnya">
            <ChevronLeft size={26} />
          </button>
          <figure>
            <img src={activePhoto.src} alt={activePhoto.caption} />
            <figcaption>{activePhoto.caption}</figcaption>
          </figure>
          <button className="icon-button lightbox__nav" type="button" onClick={() => move(1)} aria-label="Foto berikutnya">
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
