import React from "react";
import "./style.css";

export default function SignIn() {
    return (
        <div className="signIn">
            <input type="email" required/>
            <input type="password" required/>
        </div>
    );
}