import React from 'react';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

export default function App() {
  const [opened, setOpened] = useState(false);
  const guestName = new URLSearchParams(window.location.search).get('to')?.trim() || '';

  return opened ? <Dashboard guestName={guestName} /> : <LandingPage guestName={guestName} onOpen={() => setOpened(true)} />;
}
