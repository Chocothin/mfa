import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Primary from "../securityLayer/Primary";
import Secondary from "../securityLayer/Secondary";
import Tritary from "../securityLayer/Tritary";
import style from "./SelectSecurityLevel.module.css";



function Wrapper() {
    console.log("wrapper");
    const [isEntered, setIsEntered] = useState([false, false, false]);
    const navigate = useNavigate();
    const handleOnMouseEntered = (index) => {
        setIsEntered(isEntered.map((value, idx) => idx === index ? true : value));
    }
    const handleOnMouseLeave = (index) => {
        setIsEntered(isEntered.map((value, idx) => idx === index ? false : value));
    }
    const handleOnClick = (index) => {
        navigate(`next${index}`);
        console.log("navigated to ", index);
    }
    return (
        <div className={style.wrapper}>
            <h1 className={style.banner}>Select Security Level</h1>
            <button 
                onClick={() => handleOnClick(0)}
                onMouseEnter={() => handleOnMouseEntered(0)} 
                onMouseLeave={() => handleOnMouseLeave(0)} 
                className={`${style.container} ${isEntered[0] ? style.hover : ''}`}>Primary assets</button>
            <button 
                onClick={() => handleOnClick(1)}
                onMouseEnter={() => handleOnMouseEntered(1)} 
                onMouseLeave={() => handleOnMouseLeave(1)} 
                className={`${style.container} ${isEntered[1] ? style.hover : ''}`}>Secondary assets</button>
            <button 
                onClick={() => handleOnClick(2)}
                onMouseEnter={() => handleOnMouseEntered(2)} 
                onMouseLeave={() => handleOnMouseLeave(2)} 
                className={`${style.container} ${isEntered[2] ? style.hover : ''}`}>Tertiary assets</button>
        </div>
    )
}

function SelectSecurityLevel() {
    console.log("hi"); 
    return (
        <Routes>
            <Route path="/" element={<Wrapper/>} />
            <Route path="/select/next0" element={<Primary/>} />
            <Route path="/select/next1" element={<Secondary/>} />
            <Route path="/select/next2" element={<Tritary/>} />
        </Routes>
    )
}

export default SelectSecurityLevel;