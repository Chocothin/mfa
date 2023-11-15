import React from 'react'
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import style from "./Main.module.css";

function App() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("./");
    }
    return (
        <div className={style.sideBarBox}>
            <div className={style.sideBarH1}>DAS.</div>
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