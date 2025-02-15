import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SelfHelp from './selfHelp';
import HomeSelf from './selfHelp/home';
import Community from './selfHelp/community';
import CommunityBody from './selfHelp/communityBody';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SelfHelp />} />
        <Route path="/home" element={<HomeSelf />} />
        <Route path="/community" element={<Community />} />
        <Route path="/c-body" element={<CommunityBody />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);