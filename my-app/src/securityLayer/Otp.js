import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import style from './Auth.module.css';
import { getByPlaceholderText } from '@testing-library/react';

const OTPComponent = () => {
  const [OTP, setOTP] = useState('');
  const [isOTPValid, setOTPValid] = useState(false);
  const [email, setEmail] = useState(''); // 이메일 상태를 저장할 useState 추가
  const navigate = useNavigate();
  const generateOTP = async () => {
    const response = await axios.post('/generate-otp', { email: email });
    alert("Check your email");
  }

  const verifyOTP = async () => {
    const response = await axios.post('/verify-otp', { otp: OTP });
    setOTPValid(response.data.valid);
    console.log(isOTPValid, OTP);
    if(response.data.valid){
      alert("OTP is Valid!")
      navigate('/next/thirdSafe');
    }
    else alert("OTP is Invalid")
  }

  const handleInputChange = (event) => {
    setOTP(event.target.value);
  }

  return (
    <>
        <h1 className={style.otpH1}>OTP Authentication</h1>
        <div className={style.otpContainer}>
          <button className={style.otpGen} onClick={generateOTP}>OTP 생성</button>
          <input 
            className={style.otpEmail} 
            type="text" value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address" />
          <button className={style.otpVer} onClick={verifyOTP}>OTP 검증</button>
          <input 
            className={style.otpInput} 
            type="text" 
            onChange={handleInputChange}
            placeholder="OTP Code" />
        </div>
    </>
  );
}

export default OTPComponent;
