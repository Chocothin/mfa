import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// 인증 체계 컴포넌트들을 import 합니다.
import BioAuth from '../securityLayer/BioAuth';
import Otp from '../securityLayer/Otp'
import PinCode from '../securityLayer/Pincode'

const Modularize = () => {
    const [selectedAuthScheme, setSelectedAuthScheme] = useState(null);
    const navigate = useNavigate();

    // 사용자가 인증 체계를 선택하면, 해당 체계를 state에 저장합니다.
    const selectAuthScheme = (scheme) => {
        setSelectedAuthScheme(scheme);
    }

    const handleButtonClick = (path, scheme) => {
        selectAuthScheme(scheme);
        navigate(path);
    }

    return (
            <div>
                {/* 사용자가 선택할 수 있는 인증 체계 UI를 추가합니다. */}
                <button onClick={() => handleButtonClick('/select/next0', 'BioAuth')}>인증 체계 1</button>
                <button onClick={() => handleButtonClick('/select/next1', 'Otp')}>인증 체계 2</button>
                <button onClick={() => handleButtonClick('/select/next2', 'PinCode')}>인증 체계 3</button>

                <Routes>
                    {/* 선택한 인증 체계에 따라 다른 경로로 이동합니다. */}
                    <Route path="/select/next0" element={selectedAuthScheme === 'BioAuth' ? <BioAuth /> : null} />
                    <Route path="/select/next1" element={selectedAuthScheme === 'Otp' ? <Otp /> : null} />
                    <Route path="/select/next2" element={selectedAuthScheme === 'PinCode' ? <PinCode /> : null} />
                </Routes>
            </div>
    );
}

export default Modularize;
