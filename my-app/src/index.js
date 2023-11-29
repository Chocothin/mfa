import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./Main/Main";
import PinCode from './securityLayer/Pincode';
import BioAuth from './securityLayer/BioAuth';
import Otp from './securityLayer/Otp';
import { AddAsset } from './Main/MyAssets'
import { Auth0Provider } from '@auth0/auth0-react'

function NotFound() {
  return (
    <div>NotFound</div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-hpmygncbxfc70jyh.us.auth0.com"
    clientId="GIXw5NLl6whIt3bvLiHt8GTbTIRPesqW"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/next'
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/next/*" element={<Main />} />
        <Route path="/next/next2" element={<Otp/>} />
        <Route path="/next/next1" element={<BioAuth/>} />
        <Route path="/next/next1" element={<PinCode/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
);

