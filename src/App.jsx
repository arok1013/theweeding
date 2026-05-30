import React from 'react';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import InviteShare from './components/InviteShare/InviteShare.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

export default function App() {
  const [opened, setOpened] = useState(false);
  const guestName = new URLSearchParams(window.location.search).get('to')?.trim() || '';
  const isShareDashboard = window.location.pathname.replace(/\/$/, '') === '/dashboard';

  if (isShareDashboard) {
    return (
      <main className="share-dashboard">
        <InviteShare initialGuestName={guestName} />
      </main>
    );
  }

  return opened ? <Dashboard /> : <LandingPage guestName={guestName} onOpen={() => setOpened(true)} />;
}
