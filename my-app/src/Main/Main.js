import React from 'react';
import SideBar from './SideBar';
import MyAssets from './MyAssets';
import AssetsType from './AssetsType';
import Security from './security';
import style from './Main.module.css';


function Main() {
    return (
        <div className={style.background}>
            <SideBar/>
            <div className={style.myh1}>자산 스토리지</div>
            <div className={style.mainContainer}>
                <MyAssets/>
                <AssetsType/>
                <Security/>
            </div>
        </div>
    );
}

export default Main;
