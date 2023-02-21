import {React, useState} from "react";
import { useGlobalContext } from "../../Context/Context";
import "./style.css";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignIn() {
    const {loginUser, setLoginUser, user, setUser} = useGlobalContext();
    const [show, setShow] = useState(false);
    
    const handleShowPassword = () => {
        setShow(!show);
    }

    const handleUserEmail = (e) => {
        setLoginUser({...loginUser, email: e.target.value})
        setUser({...user, email: e.target.value})
    }

    const handleUserPassword = (e) => {
        setLoginUser({...loginUser, password: e.target.value})
        setUser({...user, password: e.target.value})
    }

    return (
        <div className="signIn">
            <input className="loginInput" type="email" placeholder="Email Address" required onChange={handleUserEmail}/>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show ? "text": "password"} placeholder="Password" required onChange={handleUserPassword}/>
                {!show ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword}/>: <FaEye className="passwordIcon" onClick={handleShowPassword}/>}
            </div>
            <h3>Forgot Password?</h3>
        </div>
    );
}