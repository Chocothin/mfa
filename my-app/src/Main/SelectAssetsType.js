import React from 'react';
import {useNavigate} from "react-router-dom";
import style from "./css/SelectAssetsType.module.css";

//자산 추가 시 자산 유형 별 연동 페이지 컴포넌트
export function CryptoAsset() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <h2 className={style.h2}>전자 지갑 연동 페이지</h2>
            <button onClick={handleOnClick} className={style.addBtn}>자산 추가</button>
        </>
    );
}

export function FinancialAsset() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <h2 className={style.h2}>금융 자산 연동 페이지</h2>
            <button onClick={handleOnClick} className={style.addBtn}>자산 추가</button>
        </>
    );
}

export function DigitalDocument() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <h2 className={style.h2}>디지털 문서 추가 영역</h2>
            <button onClick={handleOnClick} className={style.addBtn}>자산 추가</button>
        </>
    );
}

export function IdentityInfo() {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/next");
    };
    return (
        <>
            <h2 className={style.h2}>신원 정보 연동 페이지</h2>
            <button onClick={handleOnClick} className={style.addBtn}>자산 추가</button>
        </>
    );
}