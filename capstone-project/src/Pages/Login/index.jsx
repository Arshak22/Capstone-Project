import React, { useState } from "react";
import "./style.css";

import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp";
import User from "../../assets/images/user.png";

export default function Login() {
    const [flag, setFlag] = useState(true);

    const handleSignInorSignUp = (e) => {
        (e.target.innerHTML === "Sign In") ? setFlag(true) : setFlag(false);
    }


    return (
        <div className="loginPage">
            <div className="loginBox" style={!flag ? {height: "500px"}: {height: "400px"}}>
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
        </div>
    );
}