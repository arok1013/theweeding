import React from 'react';
import { Play } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function PreweddingVideo() {
  return (
    <section className="section prewedding-video fade-up">
      <div className="section-heading">
        <h2>{weddingConfig.preweddingVideo.title}</h2>
        <span aria-hidden="true" />
        <p>{weddingConfig.preweddingVideo.description}</p>
      </div>
      <div className="video-frame">
        <iframe
          title={weddingConfig.preweddingVideo.title}
          src={weddingConfig.preweddingVideo.embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className="video-frame__badge" aria-hidden="true">
          <Play size={18} fill="currentColor" />
        </div>
      </div>
    </section>
  );
}
