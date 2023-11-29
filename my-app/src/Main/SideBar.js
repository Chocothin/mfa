import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./css/Main.module.css";

function App() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("./");
    }

    return (
        <div className={style.sideBarBox}>
            <div
                className={style.sideBarH1}>My-app.</div>
            <button 
                className={style.sideBarBtn}
                onClick={handleClick}
                >나의 자산</button>
        </div>
    );
}

function SideBar() {
    return (
        <App/>
    );
}

export default SideBar;