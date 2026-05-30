import React from 'react';
import { useEffect, useState } from 'react';
import { weddingConfig } from '../../config/wedding.config.js';
import BackgroundMusic from '../BackgroundMusic/BackgroundMusic.jsx';
import Comments from '../Comments/Comments.jsx';
import Countdown from '../Countdown/Countdown.jsx';
import CoupleProfile from '../CoupleProfile/CoupleProfile.jsx';
import EventDetails from '../EventDetails/EventDetails.jsx';
import Footer from '../Footer/Footer.jsx';
import Gallery from '../Gallery/Gallery.jsx';
import Hero from '../Hero/Hero.jsx';
import InviteShare from '../InviteShare/InviteShare.jsx';
import LoveStory from '../LoveStory/LoveStory.jsx';
import Maps from '../Maps/Maps.jsx';
import PreweddingVideo from '../PreweddingVideo/PreweddingVideo.jsx';
import RSVP from '../RSVP/RSVP.jsx';
import { useCommentPolling } from '../../hooks/useCommentPolling.js';

export default function Dashboard({ guestName = '' }) {
  const commentsState = useCommentPolling();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <BackgroundMusic volume={isVideoPlaying ? 0.08 : 0.55} />
      <Hero />
      <InviteShare initialGuestName={guestName} />
      <Countdown targetDate={weddingConfig.weddingDate} />
      <CoupleProfile />
      <LoveStory />
      <PreweddingVideo onPlaybackChange={setIsVideoPlaying} />
      <EventDetails />
      <Gallery />
      <Maps />
      <RSVP onNewComment={commentsState.addOptimisticComment} />
      <Comments comments={commentsState.comments} status={commentsState.status} />
      <Footer />
    </main>
  );
}
