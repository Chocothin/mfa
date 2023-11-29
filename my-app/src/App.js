import { useState } from "react";
import { BrowserRouter as Router ,Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import style from "./App.module.css";
import Main from "./Main/Main";
import { useAuth0 } from '@auth0/auth0-react'



const id = "1234";
const pw = "1234";

function CurrentPath() {
  const location = useLocation();
  console.log(location.pathname);

}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button 
            className={style.loginBtn}
            onClick={() => loginWithRedirect()}
            >Log In
        </button>;
};

function Wrapper() {
  return (
    <div className={style.center}>
      <div className={style.box}>
        <div className={style.font}>
        </div>
      </div>
    </div>
  );
};


function UserDataInput() {
  const navigate = useNavigate();
  const [userId, setId] = useState("");
  const [userPw, setPassword] = useState("");

  const changeId = (e) => setId(e.target.value);
  const changePw = (e) => setPassword(e.target.value);
  const confirmPW = () => {
    if(id === userId && pw === userPw){

      navigate("/next");
      alert("Log In Successed!");
    }
    else {
      alert("incorrect");
    }
    
  };
  CurrentPath();
  return (
    <div className={style.centerInput}>
      <input className={`${style.inputUserData} ${style.centerInput}`} value={userId} onChange={changeId} type="text" placeholder="user id" />
      <input className={`${style.inputUserData} ${style.centerInput}`} value={userPw} onChange={changePw} type="password" placeholder="password" />
      <button className={`${style.userDataBtn} ${style.centerInput}`} onClick={confirmPW}>confirm</button>
    </div>
  );
}


function LoginPage() {
  console.log("loginpage")
  return (
    <div className={style.background}>
      <Wrapper/>
      <LoginButton/>
    </div>
  );
}


function App() {
  console.log("app"); 
  CurrentPath();
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/next/*" element={<Main />} />
    </Routes>
  )
};

export default App;