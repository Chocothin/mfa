import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import style from "./css/SelectAssetsType.module.css";

const AssetTypes = ['암호 화폐', '금융 자산', '디지털 문서', '부동산', '신원 정보' ]

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