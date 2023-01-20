import React from "react";
import "./style.css";

import SignIn from "../../Components/SignIn";

export default function Login() {
    return (
        <div className="loginPage">
            <div className="loginBox">
                <div>
                    <SignIn/>
                </div>
                
            </div>
        </div>
    );
}