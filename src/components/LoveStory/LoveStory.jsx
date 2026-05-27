import React from 'react';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function LoveStory() {
  return (
    <section className="section love-story fade-up">
      <div className="section-heading">
        <h2>Our Love Story</h2>
        <span aria-hidden="true" />
        <p>Setiap cerita punya awal yang manis. Inilah beberapa momen kecil yang membawa kami sampai hari ini.</p>
      </div>

      <div className="timeline">
        {weddingConfig.loveStory.map((story, index) => (
          <article className="timeline-item" key={story.title}>
            <div className="timeline-card">
              <h3>{story.title}</h3>
              <time>{story.date}</time>
              <p>{story.description}</p>
            </div>
            <div className="timeline-pin">
              <img src={story.image} alt={story.title} loading="lazy" />
              <Heart size={16} fill="currentColor" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
