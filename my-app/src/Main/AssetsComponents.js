import React from "react"
import style from "./css/AssetsComponents.module.css"

const assetType = ['cryptoAsset', 'financialAsset','digitalDocument','identityInfo' ]

export function CryptoAsset() {
    return (
        <>
            <h2 className={style.assetH2}>Crypto Asset</h2>
            <div className={style.assetContainer}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </>
    );
}

export function FinancialAsset() {
    return (
        <>
            <h2 className={style.assetH2}>Financial Asset</h2>
            <div className={style.assetContainer}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </>
    );
}

export function DigitalDocument() {
    return (
        <>
            <h2 className={style.assetH2}>Digital Document</h2>
            <div className={style.assetContainer}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </>
    );
}

export function IdentityInfo() {
    return (
        <>
            <h2 className={style.assetH2}>Identity Info</h2>
            <div className={style.assetContainer}>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </>
    );
}