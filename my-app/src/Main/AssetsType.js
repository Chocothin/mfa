import React, {useState} from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import style from './css/Main.module.css';
import { FirstAsset, SecondAsset, ThirdAsset} from './AssetsComponents';

const assetType =['firstSafe', 'secondSafe','thirdSafe']

function PopUpToggle({setIsPoppedUp},isPoppedUp) { //자산 유형 버튼 팝업 로직
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState([false,false,false,false,false,false]);
    const onMouseEnter= (index) => {
        setIsHover(isHover.map((value, idx) => idx === index ? true : value));
    }
    const onMouseLeave = (index) => {
        setIsHover(isHover.map((value, idx) => idx === index ? false : value));
    }
    const handleBtnClicked = () => {
        setIsPoppedUp(false)
    }
    const handleOnClick = (index) => {
        navigate(assetType[index])
    }
    return (
        <div 
            onMouseLeave={() => setIsPoppedUp(false)}
            className={`${style.popUpContainer} ${style.type} `}>
            <div className={style.addBtn}>
                <button 
                onClick={handleBtnClicked}
                className={style.popUpClose}>X</button>
            </div>
            <div className={style.selectAssetsCont}>
                <button onMouseEnter={() => onMouseEnter(0)}
                        onMouseLeave={() => onMouseLeave(0)}
                        onClick={() => handleOnClick(0)}
                        className={`${style.selectAssetsItem} ${isHover[0] ? style.hover :''}`}>암호 화폐</button>
                
                <button onMouseEnter={() => onMouseEnter(1)}
                        onMouseLeave={() => onMouseLeave(1)}
                        onClick={() => handleOnClick(1)}
                        className={`${style.selectAssetsItem} ${isHover[1] ? style.hover :''}`}>금융 자산</button>
                
                <button onMouseEnter={() => onMouseEnter(2)}
                        onMouseLeave={() => onMouseLeave(2)}
                        onClick={() => handleOnClick(2)}
                        className={`${style.selectAssetsItem} ${isHover[2] ? style.hover :''}`}>디지털 문서</button>
                
                <button onMouseEnter={() => onMouseEnter(3)}
                        onMouseLeave={() => onMouseLeave(3)}
                        onClick={() => handleOnClick(3)}
                        className={`${style.selectAssetsItem} ${isHover[3] ? style.hover :''}`}>부동산</button>
                
                <button onMouseEnter={() => onMouseEnter(4)}
                        onMouseLeave={() => onMouseLeave(4)}
                        onClick={() => handleOnClick(4)}
                        className={`${style.selectAssetsItem} ${isHover[4] ? style.hover :''}`}>신원 정보</button>
                
                <button onMouseEnter={() => onMouseEnter(5)}
                        onMouseLeave={() => onMouseLeave(5)}
                        onClick={() => handleOnClick(5)}
                        className={`${style.selectAssetsItem} ${isHover[5] ? style.hover :''}`}>지적 재산권</button>
             </div>
        </div>
    );
}

//각 금고 접근 state에 따른 자산 타입 컴포넌트
export function AssetsType1() { //first safe의 자산 타입 컴포넌트
    const [isPoppedUp, setIsPoppedUp] = useState(false);

    const handleBtnClicked = () => {
        setIsPoppedUp(true);
    };
    return (
        <div className={style.assetsTypeCont}>
            <FirstAsset/>
        </div>
    );
}
export function AssetsType2() {
    const [isPoppedUp, setIsPoppedUp] = useState(false);

    const handleBtnClicked = () => {
        setIsPoppedUp(true);
    };
    return (
        <div className={style.assetsTypeCont}>
            <SecondAsset/>
        </div>
    );
}
export function AssetsType3() {
    const [isPoppedUp, setIsPoppedUp] = useState(false);

    const handleBtnClicked = () => {
        setIsPoppedUp(true);
    };
    
    return (
        <div className={style.assetsTypeCont}>
            <ThirdAsset/>
        </div>
    );
}

/*
            
            {
                isPoppedUp ? (<PopUpToggle setIsPoppedUp={setIsPoppedUp} isPoppedUp={isPoppedUp}/>)
                :
                (<div className={style.btnLocation}>
                    <button 
                        onClick={handleBtnClicked}
                        className={style.addBtn}>자산 타입
                    </button>
                </div>
                )
            }
*/