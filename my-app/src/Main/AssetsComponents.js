import React from "react"
import {useNavigate} from "react-router-dom";
import style from "./css/AssetsComponents.module.css"

//각 자산 타입 별 컴포넌트, item은 임시로 넣어둠
export function CryptoAsset() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/next/next0")
    }
    return (
        <>
            <h2 className={style.assetH2}>Crypto Asset</h2>
            <div className={style.assetContainer}>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
            </div>
        </>
    );
}

export function FinancialAsset() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/next/next0")
    }
    return (
        <>
            <h2 className={style.assetH2}>Financial Asset</h2>
            <div className={style.assetContainer}>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
            </div>
        </>
    );
}

export function DigitalDocument() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/next/next0")
    }
    return (
        <>
            <h2 className={style.assetH2}>Digital Document</h2>
            <div className={style.assetContainer}>
                <div onClick={handleOnClick} className={style.item}></div>
                <div onClick={handleOnClick} className={style.item}></div>
                <div onClick={handleOnClick} className={style.item}></div>
                <div onClick={handleOnClick} className={style.item}></div>
            </div>
        </>
    );
}

export function IdentityInfo() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/next/next0")
    }
    return (
        <>
            <h2 className={style.assetH2}>Identity Info</h2>
            <div className={style.assetContainer}>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
                <button onClick={handleOnClick} className={style.item}></button>
            </div>
        </>
    );
}