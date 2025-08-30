import React, { useEffect, useState } from 'react'
import Home from './Home'
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import './index.css';
import Mode from './components/Modes/Mode.jsx';
import InfoMode from './components/Modes/InfoMode.jsx';
import SignIn from './components/Auth/SignIn.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import AuthRedirect from './components/AuthRedirect.jsx';
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReadOnly from './components/Modes/ReadOnly.jsx';
import PrivacyPolicy from './components/Documentation/PrivacyPolicy.jsx'
import AbouTheApp from './components/Documentation/AbouTheApp.jsx'
import TermsConditions from './components/Documentation/TermsConditions.jsx'
import HelpCenter from './components/Documentation/HelpCenter.jsx'

import FriendModeImage from "../src/assets/friend-background.jpg";
// import FriendModeImage from "../../assets/friend-background.jpg";
import ElderModeImage from "../src/assets/elder-background.jpg";
import LoveModeImage from "../src/assets/love-background.jpg";
import { Analytics } from "@vercel/analytics/react";



function TitleUpdater() {
  const location = useLocation();

  const pathTitleMap = {
    '/': 'INAI : Home',
    '/Love': 'INAI : Love Mode',
    '/Friend': 'INAI : Friend Mode',
    '/Elder': 'INAI : Elder Mode',
    '/Info': 'INAI : Information Mode',
    '/Sign-Up': 'INAI : Sign Up',
    '/Sign-In': 'INAI : Sign In',
    '/privacy-policy': 'INAI : Privacy Policy',
    '/about-app': 'INAI : About App',
    '/terms-conditions': 'INAI : Terms & Conditions',
    '/help-center': 'INAI : Help Center',
    '/Read-Only': 'INAI : Read Only'
  };

  // ✅ Set title immediately (synchronously) for first load
  document.title = pathTitleMap[location.pathname] || 'INAI';

  return null; // no render
}






function App() {
  const [LoveModeResponses, setLoveModeResponses] = useState([]);
  const [FriModeResponses, setFriModeResponses] = useState([]);
  const [EldModeResponses, setEldModeResponses] = useState([]);

  return (

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        {/* <TitleUpdater /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Love" element={<Mode GLB="Love_Hand.glb " backgroundImage={LoveModeImage} responses={LoveModeResponses} setResponses={setLoveModeResponses} />} />

          <Route path="/Friend" element={<Mode GLB="Friend_Hand.glb" backgroundImage={FriendModeImage} responses={FriModeResponses} setResponses={setFriModeResponses} />} />

          <Route path="/Elder" element={<Mode GLB="Elder_Hand.glb" backgroundImage={ElderModeImage} responses={EldModeResponses} setResponses={setEldModeResponses} />} />

          <Route path="/Info" element={<InfoMode />} />
          <Route path="/Read-Only" element={<ReadOnly ReadOnly={ReadOnly} />} />

          {/* Redirect if already logged in */}
          <Route path="/Sign-Up" element={<AuthRedirect><SignUp /></AuthRedirect>} />
          <Route path="/Sign-In" element={<AuthRedirect><SignIn /></AuthRedirect>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-app" element={<AbouTheApp />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
        <Analytics />

      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App