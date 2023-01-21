import {React, useState} from "react";
import "./style.css";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignIn() {
    const [show, setShow] = useState(false);
    const handleShowPassword = () => {
        setShow(!show);
    }
    return (
        <div className="signIn">
            <input className="loginInput" type="email" placeholder="Email Address" required/>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show ? "text": "password"} placeholder="Password" required/>
                {!show ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword}/>: <FaEye className="passwordIcon" onClick={handleShowPassword}/>}
            </div>
            <h3>Forgot Password?</h3>
        </div>
    );
}