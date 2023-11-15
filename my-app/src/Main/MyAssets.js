import React, {useState} from 'react';
import style from './Main.module.css';
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Slider from 'react-input-slider';
import SelectSecurityLevel from "../etc/SelectSecurityLevel";

function PopUp({ handleOnClick, setAssetImportance }, popUpToggle) {
    const [x, setX] = useState(0);
    const navigate = useNavigate();
    const handleOnConfirm = () => {
        if(x === 3) navigate("/select/next0");
        if(x === 2) navigate("/select/next1");
        if(x === 1) navigate("/select/next2");
        
    }
    return (
        <div className={style.popUpContainer}>
            <button onClick={handleOnClick} className={style.popUpClose}>X</button>
            <p className={style.importanceDes}>Select Importance of Your Assets</p>
            <Slider className={style.slider}
                styles={{
                    track: {
                      backgroundColor: '#222233'
                    },
                    active: {
                      backgroundColor: '#222233'
                    },
                    thumb: {
                      width: 20,
                      height: 20,
                      backgroundColor: "white"
                    }
                  }}
                axis="x"
                xstep={1}
                xmin={0}
                xmax={3}
                x={x}
                onChange={({ x }) => {
                    setAssetImportance(x);
                    setX(x);
                }}
            />
            <div className={style.sliderLabel}>
                <div className={style.sliderLabelItem}>0</div>
                <div className={style.sliderLabelItem}>1</div>
                <div className={style.sliderLabelItem}>2</div>
                <div className={style.sliderLabelItem}>3</div>
            </div>
            <div className={style.authBtnLocation}>
                <button className={style.addBtn} onClick={() => navigate("/select/next1")}>BioAuth</button>
                <button className={style.addBtn} onClick={() => navigate("/select/next2")}>PinCode</button>
                <button className={style.addBtn} onClick={() => navigate("/select/next0")}>OTP</button>
            </div>
            <button 
                className={style.confirmBtn}
                onClick={handleOnConfirm}
                >Confirm</button>
        </div>
    );
}

function App() {
    const navigate = useNavigate();
    const [assetType, setAssetType] = useState(0);
    const [assetImportance, setAssetImportance] = useState(0);
    const [popUpToggle, setPopUpToggle] = useState(false);

    const handleOnClick = () => {
        if(popUpToggle) setPopUpToggle(false);
        else setPopUpToggle(true);
        
        //navigate("/select")
    }
    return (
        <div className={style.btnCont}>
            {popUpToggle ? 
                (
                <PopUp 
                    setAssetImportance={setAssetImportance} 
                    handleOnClick={handleOnClick} 
                    popUpToggle={popUpToggle}
                />)
                :
                (<div className={style.btnLocation}>
                    <button 
                        className={style.addBtn}
                        onClick={handleOnClick}>자산 추가
                    </button>
                </div>)
            }
        </div>

    );
}

function MyAssets() {
    return (
        <App/>
    );
}

export default MyAssets;    