import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Corbado from "@corbado/webcomponent";

const CORBADO_PROJECT_ID = "pro-5890664499307067638";

function Profile() {
    const session = new Corbado.Session(CORBADO_PROJECT_ID);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    console.log("Session!!",session);
    useEffect(() => {
        session.refresh(user => {
            setUser(user);
        });
    }, []);
    const handleLogout = () => {
        session.logout()
            .then(async () => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    const redirectToHome = () => {
        navigate("/");
    }

    if (true) {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>
                    User-ID: demo
                    <br />
                    Email: demo
                </p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You're not logged in.</p>
                <p>Please go back to <button onClick={redirectToHome}>home</button> to log in.</p>
            </div>
        );
    }
}

export default Profile;