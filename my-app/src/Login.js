import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import style from './App.module.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button 
            className={style.loginBtn}
            onClick={() => loginWithRedirect()}
            >Log In
        </button>;
};

export default LoginButton;