import React, { useState} from 'react';
import SideBar from './SideBar';
import MyAssets from './MyAssets';
import {AssetsType1, AssetsType2, AssetsType3} from './AssetsType';
import Security from './Security';
import style from './css/Main.module.css';
import {Routes, Route, Link, useParams} from "react-router-dom"
import { FirstSafeAsset, SecondSafeAsset, ThirdSafeAsset } from './SelectAssetsType';
import { SecurityLevelProvider } from './SecurityLevelProvider';
const AssetTypes = ['firstSafe', 'secondSafe', 'thirdSafe']

const AssetScreen = () => {
    const { type } = useParams();
    return (
        <div className={style.addAssetWrapper}>
            <h2 className={style.addAssetH2}>Selected Asset: {type}</h2>
            <div className={style.addAssetContainer}>
                {(()=>{
                    switch (type) {
                        case 'firstSafe':
                          return <FirstSafeAsset/>;
                        case 'secondSafe':
                          return <SecondSafeAsset/>;
                        case 'thirdSafe':
                          return <ThirdSafeAsset/>;
                        default:
                          return <h2>선택된 금고가 없습니다.</h2>;
                    }
                })()}
            </div>
        </div>
    );
    
  }

function AddAsset() { //자산 추가 컴포넌트
    const [showAssets, setShowAssets] = useState(false);
    const toggleAssets = () => {
        setShowAssets(!showAssets);
    }
    return (
        <div className={style.selectAssetTypeDiv}>    
            <button className={style.selectAssetTypeBtn} onClick={toggleAssets}>Select Asset Type</button>
            {showAssets && (
                <ul onMouseLeave={()=>{toggleAssets()}} className={style.selectAsssetTypeUl}>
                    {AssetTypes.map(type => (
                        <li key={type}>
                            <Link to={`${type}`}>{type}</Link>
                        </li>
                    ))}
                </ul>
            )}
            <Routes>
                <Route path="/:type" element={<AssetScreen/>}/> 
            </Routes>
        </div>
    ); //선택한 자산 유형 연동 페이지로 navigate
}

function Main() {
    return (
        <SecurityLevelProvider>
            <div className={style.background}>
                <SideBar/>
                <div className={style.myh1}>자산 스토리지</div>
                <Routes>
                    <Route path="*" element={
                        <div className={style.mainContainer}>
                            <MyAssets/>
                            <Security/>
                         </div>          
                    }/>
                    <Route path="firstSafe/*" element={
                        <div className={style.mainContainer}>
                            <MyAssets/>
                            <AssetsType1/>
                            <Security/>
                        </div>    
                    }/>
                    <Route path="secondSafe/*" element={
                        <div className={style.mainContainer}>
                            <MyAssets/>
                            <AssetsType2/>
                            <Security/>
                        </div>    
                    }/>
                    <Route path="thirdSafe/*" element={
                        <div className={style.mainContainer}>
                            <MyAssets/>
                            <AssetsType3/>
                            <Security/>
                        </div>    
                    }/>
                    <Route path="addAsset/*" element={
                        <div className={style.mainContainer}>
                            <AddAsset/>
                        </div>
                    }/>
                </Routes>
            </div>
        </SecurityLevelProvider>

    );
}

export default Main;
