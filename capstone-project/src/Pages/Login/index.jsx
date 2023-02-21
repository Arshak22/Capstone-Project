import React, { useEffect, useState } from "react";
import "./style.css";
import qs from 'qs';
import { useGlobalContext } from "../../Context/Context";
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
import User from "../../assets/images/Icons/user.png";

import { SignInUser } from "../../Platform/Login";

export default function Login() {
    const {setIsLoading, loginUser} = useGlobalContext();
    const [active, setActive] = useState(false);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        document.title = "Movie Mavericks: Register";
        localStorage.setItem("token", "");
        setTimeout(() => {
            setIsLoading(false);
            setActive(true);
        }, 1000)
    }, [])

    const handleSignInorSignUp = (e) => {
        (e.target.innerHTML === "Sign In") ? setFlag(true) : setFlag(false);
    }

    const handleSignIn = (user) => {
        const data = qs.stringify(user);
        LogIn(data);
    }
      
    const LogIn = async (user) => {
        try {
          const result = await SignInUser(user);
          localStorage.setItem("token", `${result.headers.access_token}`);
        } catch (e) {
          console.log(e);
        }
    }

    return (
    <>
    {active ? <div className="loginPage">
            <div className="loginBox">
                <div className="loginAvatar">
                    <img src={User} alt="userPic" className="user2"/>
                </div>
                <div className="loginSection">
                    <h2 onClick={handleSignInorSignUp} className={flag ? "active": "null"}>Sign In</h2>
                    <h2 onClick={handleSignInorSignUp} className={!flag ? "active": "null"}>Sign Up</h2>
                    {flag ? <SignIn/>: <SignUp/>}
                </div>
            </div>
            <div className="loginBtn">
                {flag ? 
                    <button onClick={() => handleSignIn(loginUser)}>Sign In</button>
                : <button>Sign Up</button>}
            </div>
        </div>: null}
    </>
    );
}