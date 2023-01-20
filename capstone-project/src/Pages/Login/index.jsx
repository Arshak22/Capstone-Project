import React from "react";
import "./style.css";

import SignIn from "../../Components/SignIn";
import User from "../../assets/images/user.png";

export default function Login() {
    return (
        <div className="loginPage">
            <div className="loginBox">
                <div className="loginAvatar">
                    <img src={User} alt="userPic" className="user2"/>
                </div>
                <div className="loginSection">
                    <SignIn/>
                </div>
                <div className="loginBtn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}