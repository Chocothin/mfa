import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useSecurityLevel} from './SecurityLevelProvider';
const Container = styled.div`
    position: relative;
    width: calc(100% - 40px);
    height: 28%;
    background-color : #222233;
    border: 0;
    border-radius: 20px;
    left: 20px;
    top: 60px;
    display: inline-flex;
    justify-content: space-between;
    z-index: 10;
`;
const FirstSafe = styled.button`
    position: relative;
    height: 80%;
    width: 30%;
    top: 10%;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 20px;
`;
const SecondSafe = styled.button`
    position: relative;
    height: 80%;
    width: 30%;
    top: 10%;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 20px;
`;
const ThirdSafe = styled.button`
    position: relative;
    height: 80%;
    width: 30%;
    top: 10%;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 20px;
`;

function Security() {
    const {securityLevel, setSecurityLevel} = useSecurityLevel();
    const navigate = useNavigate();

    const handleOnClickFirst = () => {  //인증 없이 1차금고 navigate
        setSecurityLevel(1);
        navigate("/next/firstSafe")
    }
    const handleOnClickSecond = () => { //biometric 인증 후 2차 금고 navigate
        if(securityLevel > 1) navigate("/next/secondSafe");
        else 
        {
            navigate("/next/next1") // biometric 인증 모듈
        }
    }
    const handleOnClickThird = () => { //otp 인증 후 3차 금고 navigate
        if(securityLevel > 2) navigate("/next/thirdSafe");
        else { 
            setSecurityLevel(3);
            navigate("/next/next2") // otp 인증 모듈
        }
    }
    return (
        <Container>
            <FirstSafe onClick={handleOnClickFirst}>First Safe</FirstSafe>
            <SecondSafe onClick={handleOnClickSecond}>Second Safe</SecondSafe>
            <ThirdSafe onClick={handleOnClickThird}>Third Safe</ThirdSafe>
        </Container>
    );
}

export default Security;