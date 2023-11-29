import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    const [state, setState] = useState(1);
    const navigate = useNavigate();

    const handleOnClickFirst = () => {
        setState(1);
        navigate("/next/firstSafe")
    }
    const handleOnClickSecond = () => {
        setState(2);
        navigate("/next/next1")

    }
    const handleOnClickThird = () => {
        setState(3);
        navigate("/next/next2")

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