import React, { useState, createRef } from 'react';
import style from "./Auth.module.css";
import { BrowserRouter as Router ,Route, Routes, useNavigate } from 'react-router-dom';

const answer = ['1','2','3','4','5','6'];

const PinCode = () => {
  const length = 6;
  const [pin, setPin] = useState(Array(length).fill(''));
  const refs = Array(length).fill().map(() => createRef());
  const navigate = useNavigate();
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
      navigate('/next');
      alert("Correct!");
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
