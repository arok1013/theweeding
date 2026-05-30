import React, { useEffect, useRef } from 'react';

export default function BackgroundMusic({ paused = false, volume = 0.55 }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.currentTime = 21;

    audio.play().catch(() => {});

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (paused) {
      audio.pause();
      return;
    }

    audio.play().catch(() => {});
  }, [paused]);

  return <audio ref={audioRef} className="background-music" src="/audio/risk-it-all.mp3" loop preload="auto" playsInline />;
}
