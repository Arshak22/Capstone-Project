import React, { useEffect, useState } from "react";
import "./style.css";
import { useGlobalContext } from "../../Context/Context";
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
import User from "../../assets/images/Icons/user.png";

export default function Login() {
    const {setIsLoading} = useGlobalContext();
    const [active, setActive] = useState(false);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setActive(true);
        }, 1000)
    }, [])

    const handleSignInorSignUp = (e) => {
        (e.target.innerHTML === "Sign In") ? setFlag(true) : setFlag(false);
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
                <button>{flag ? "Sign In": "Sign Up"}</button>
            </div>
        </div>: null}
    </>
    );
}