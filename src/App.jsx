import React from 'react';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';

export default function App() {
  const [opened, setOpened] = useState(false);

  return opened ? <Dashboard /> : <LandingPage onOpen={() => setOpened(true)} />;
}
