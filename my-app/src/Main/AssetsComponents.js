import React, {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import style from "./css/AssetsComponents.module.css"
import styled from 'styled-components';


const AssetContainer = styled.div`
    position: relative;
    width: calc(100% - 20px);
    height: 85%;
    background-color:#333344;
    border:0;
    border-radius: 20px;
    top:17px;
    left:20px;
    z-index: -1;
    overflow: auto;
    white-space: nowrap;
`
const Item = styled.button`
    position: relative;
    display: inline-block;
    width: 190px;
    height:190px;
    top: 50px;
    border: 0;
    border-radius: 20px;
    background-image: url(${props => props.bgImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
`


function GetFiles(dir) {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);

    const handleOnClick = (file) => {
        navigate("/next/next0", {state : {file}})
    }
    useEffect(()=> {
        const getItems = async() => {
            const response = await axios.get(`/file/${dir}`,{params:dir})
                .then((res) => {
                    console.log(res.data);
                    setFiles(res.data);
                })
                .catch((err)=>{
                    console.error(err);
                });
        };

        getItems();
    }, [dir]);
    return(
        <>
            <AssetContainer className={style.assetContainer}>
                {files.map((file, index) => {
                    return <Item bgImg={file} onClick={() =>handleOnClick(file)} className={style.item} key={index}></Item>
                })}
            </AssetContainer>
        </>
    );
};
//각 자산 타입 별 컴포넌트, item은 임시로 넣어둠
export function FirstAsset() {
    return (
        <>
            <h2 className={style.assetH2}>First Safe Asset</h2>
            <GetFiles dir="firstSafe"/>
        </>
    );
}

export function SecondAsset() {
    return (
        <>
            <h2 className={style.assetH2}>Second Safe Asset</h2>
            <GetFiles dir="secondSafe"/>
        </>
    );
}

export function ThirdAsset() {
    return (
        <>
            <h2 className={style.assetH2}>Third Safe AssetContainer</h2>
            <GetFiles dir="thirdSafe"/>
        </>
    );
}
