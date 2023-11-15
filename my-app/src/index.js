import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Main from "./Main/Main";
import SelectSecurityLevel from './etc/SelectSecurityLevel';
import Primary from "./securityLayer/Primary"
import Secondary from "./securityLayer/Secondary"
import Tritary from "./securityLayer/Tritary"
import PinCode from './securityLayer/Pincode';
import Modularize from './etc/Modularize';
import BioAuth from './securityLayer/BioAuth';
import Otp from './securityLayer/Otp'

function NotFound() {
  return (
    <div>NotFound</div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Main />} />
      <Route path="/next" element={<Main />} />
      <Route path="/select/next0" element={<Otp/>} />
      <Route path="/select/next1" element={<BioAuth/>} />
      <Route path="/select/next2" element={<PinCode/>} />
      <Route path="/select" element={<Modularize/>} />

    </Routes>
  </Router>,
);

