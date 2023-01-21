import {React, useState} from "react";
import "./style.css";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignUp() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleShowPassword1 = () => {
        setShow1(!show1);
    }
    const handleShowPassword2 = () => {
        setShow2(!show2);
    }
    return (
        <div className="signUp">
            <input className="loginInput" type="text" placeholder="Username" required/>
            <input className="loginInput" type="email" placeholder="Email Address" required/>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show1 ? "text": "password"} placeholder="Password" required/>
                {!show1 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword1}/>: <FaEye className="passwordIcon" onClick={handleShowPassword1}/>}
            </div>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show2 ? "text": "password"} placeholder="Confirm Password" required/>
                {!show2 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword2}/>: <FaEye className="passwordIcon" onClick={handleShowPassword2}/>}
            </div>
        </div>
    );
}