import React, { useState, createRef } from 'react';
import style from "./Auth.module.css";
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
const answer = ['1','2','3','4','5','6'];
//pincode 모듈

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`

const ImgContainer = styled.img`
  position: absolute;
  width: 400px;
  height: 400px;
  object-fit: contain;
`

export function Zoom({src}) {
  return (
    <>
      <Backdrop/>
      <ImgContainer src={src}></ImgContainer>
    </>
  );
}

const PinCode = () => {
  const length = 6;
  const [pin, setPin] = useState(Array(length).fill(''));
  const refs = Array(length).fill().map(() => createRef());
  const navigate = useNavigate();
  const location = useLocation();
  const file = location.state.file;
  console.log("File!!: ",file);
  const handleChange = (element, index) => {
    if (element.target.value !== "") {
      setPin([...pin.slice(0, index), element.target.value, ...pin.slice(index + 1)]);
      if(index < length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleFocus = (element) => {
    element.target.select(element);
  };

  const handleOnClick = () => {
    console.log(pin, answer);
    if(JSON.stringify(pin) === JSON.stringify(answer)){
      navigate('/next/');
      alert("Correct!");
      alert("Your asset is accessible");
    }
  }

  return (
    <>
    <h1 className={style.h1}>PinCode</h1>
    <div className={style.container}>
      {pin.map((digit, index) => (
        <input className={style.input}
          key={index}
          type="text"
          ref={refs[index]}
          value={digit}
          onChange={(element) => handleChange(element, index)}
          onFocus={handleFocus}
          maxLength="1"
          size="1"
          style={{ width: '20px', margin: '5px' }}
        />
      ))}
    </div>
    <button onClick={handleOnClick} className={style.pinConfirm}>confirm</button>
    </>
  );
};

export default PinCode;
