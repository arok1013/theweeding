import React from 'react';
import { Heart, Instagram } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

const profiles = [weddingConfig.groom, weddingConfig.bride];

export default function CoupleProfile() {
  return (
    <section className="section couple-profile fade-up">
      <div className="couple-profile__grid">
        <ProfileCard profile={profiles[0]} />
        <div className="couple-profile__heart" aria-hidden="true">
          <Heart size={34} fill="currentColor" />
        </div>
        <ProfileCard profile={profiles[1]} />
      </div>
    </section>
  );
}

function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <div className="profile-card__photo">
        <img src={profile.photo} alt={profile.fullName} loading="lazy" />
      </div>
      <h2>{profile.fullName}</h2>
      <p>{profile.birthInfo}</p>
      <p>{profile.parentName}</p>
      <a className="profile-card__social" href={profile.instagram} target="_blank" rel="noreferrer" aria-label={`Instagram ${profile.name}`}>
        <Instagram size={18} />
      </a>
    </article>
  );
}
