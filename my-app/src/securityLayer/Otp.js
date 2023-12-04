import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import style from './Auth.module.css';
import styled from 'styled-components'
import { getByPlaceholderText } from '@testing-library/react';
//email otp 모듈


const QRCodeContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 485px;
  left: 50%;
  transform: translate(-50%);
`;

const QRCodeImg = styled.img`
  position: relative;
  width: 120px;
  height: 120px;
  top: 60px;
  left: 50%;
  border: 1px solid black;
  border-radius: 15px;
  transform: translate(-50%);
`

const SampleQRCode = styled.h2`
  position: relative;
  width: 120px;
  height: 120px;
  top: 40px;
  left: 50%;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%);
`

const OTPComponent = () => {
  const [OTP, setOTP] = useState('');
  const [isOTPValid, setOTPValid] = useState(false);
  const [QRCodeSrc, setQrCodeSrc] = useState(null);
  const [email, setEmail] = useState(''); // 이메일 상태를 저장할 useState 추가
  const navigate = useNavigate();

  const generateQRCode = async() => {
    await axios.get('/qrcode')
      .then(res => {
        console.log(res.data.url);
        setQrCodeSrc(res.data.url);
      });
  }

  const generateOTP = async () => {
    const response = await axios.post('/generate-otp', { email: email });
    generateQRCode();
    alert("Check your email or Scan QR code with Google Authenticator");
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
        {QRCodeSrc && ( 
          <QRCodeContainer>
            <QRCodeImg src={QRCodeSrc} alt="QR Code"/>
          </QRCodeContainer>
          )
        }
        {!QRCodeSrc && (
          <QRCodeContainer>
            <SampleQRCode>QR Code</SampleQRCode>
          </QRCodeContainer>
        )}
      
        
    </>
  );
}

export default OTPComponent;
