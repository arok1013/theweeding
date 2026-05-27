import React from 'react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function Footer() {
  const year = new Date(weddingConfig.weddingDate).getFullYear();

  return (
    <footer className="footer">
      <p>
        {weddingConfig.groom.name} & {weddingConfig.bride.name}
      </p>
      <span>{year} · Terima kasih atas doa dan kehadirannya.</span>
    </footer>
  );
}
