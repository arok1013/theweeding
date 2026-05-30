import React, { useEffect, useMemo, useRef } from 'react';
import { Play } from 'lucide-react';
import { weddingConfig } from '../../config/wedding.config.js';

export default function PreweddingVideo({ onPlaybackChange }) {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const embedUrl = useMemo(() => {
    const url = new URL(weddingConfig.preweddingVideo.embedUrl);
    url.searchParams.set('enablejsapi', '1');
    url.searchParams.set('origin', window.location.origin);
    return url.toString();
  }, []);

  useEffect(() => {
    let player;
    let isDisposed = false;

    const focusVideo = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      iframeRef.current?.focus();
    };

    const setupPlayer = () => {
      if (isDisposed || !iframeRef.current || !window.YT?.Player) return;

      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            const state = window.YT.PlayerState;
            const isPlaying = event.data === state.PLAYING;
            const isStopped = event.data === state.PAUSED || event.data === state.ENDED || event.data === state.CUED;

            if (isPlaying) {
              onPlaybackChange?.(true);
              focusVideo();
            } else if (isStopped) {
              onPlaybackChange?.(false);
            }
          }
        }
      });
    };

    if (window.YT?.Player) {
      setupPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        setupPlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(script);
      }
    }

    return () => {
      isDisposed = true;
      onPlaybackChange?.(false);
      player?.destroy?.();
    };
  }, [onPlaybackChange]);

  return (
    <section className="section prewedding-video fade-up" ref={sectionRef}>
      <div className="section-heading">
        <h2>{weddingConfig.preweddingVideo.title}</h2>
        <span aria-hidden="true" />
        <p>{weddingConfig.preweddingVideo.description}</p>
      </div>
      <div className="video-frame">
        <iframe
          ref={iframeRef}
          title={weddingConfig.preweddingVideo.title}
          src={embedUrl}
          tabIndex="0"
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
