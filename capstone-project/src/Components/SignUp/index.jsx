import {React, useState} from "react";
import { useGlobalContext } from "../../Context/Context";
import "./style.css";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignUp() {
    const {newUser, setNewUser} = useGlobalContext();
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleShowPassword1 = () => {
        setShow1(!show1);
    }

    const handleShowPassword2 = () => {
        setShow2(!show2);
    }

    const handleNewUserUsername = (e) => {
        setNewUser({...newUser, username: e.target.value})
    }

    const handleNewUserEmail = (e) => {
        setNewUser({...newUser, email: e.target.value})
    }

    const handleNewUserPassword = (e) => {
        setNewUser({...newUser, password: e.target.value})
    }

    const handleNewUserConfirmPassword = (e) => {
        setNewUser({...newUser, confirmPassword: e.target.value})
    }

    return (
        <div className="signUp">
            <input className="loginInput" type="text" placeholder="Username" required onChange={handleNewUserUsername}/>
            <input className="loginInput" type="email" placeholder="Email Address" required onChange={handleNewUserEmail}/>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show1 ? "text": "password"} placeholder="Password" required onChange={handleNewUserPassword}/>
                {!show1 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword1}/>: <FaEye className="passwordIcon" onClick={handleShowPassword1}/>}
            </div>
            <div className="passwordInputContainer">
                <input className="loginInput" type={show2 ? "text": "password"} placeholder="Confirm Password" required onChange={handleNewUserConfirmPassword}/>
                {!show2 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword2}/>: <FaEye className="passwordIcon" onClick={handleShowPassword2}/>}
            </div>
        </div>
    );
}