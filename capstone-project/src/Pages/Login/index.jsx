import React, { useEffect, useState } from "react";
import "./style.css";
import qs from 'qs';
import { useGlobalContext } from "../../Context/Context";
import User from "../../assets/images/Icons/user.png";

import { SignInUser } from "../../Platform/Login";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function Login() {
    const {loginUser, setLoginUser, user, setUser, setIsLoading, newUser, setNewUser} = useGlobalContext();
    const [active, setActive] = useState(false);
    const [flag, setFlag] = useState(true);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [signInErrors, setSignInErrors] = useState(
        {
            mainError: "",
            emailError: ""
        }
    );
    const [signUpErrors, setSignUpErrors] = useState(
        {
            fullNameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: ""
        }
    )

    useEffect(() => {
        document.title = "Movie Mavericks: Register";
        localStorage.setItem("token", "");
        setTimeout(() => {
            setIsLoading(false);
            setActive(true);
        }, 1000)
    }, [])

    useEffect(() => {
        setSignInErrors({
            mainError: "",
            emailError: ""
        });
        setSignUpErrors({
            fullNameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: ""
        });
        if(!flag) {
            document.getElementById("fullName").value = "";
        }
    }, [flag])

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

    const handleSignInorSignUp = (e) => {
        (e.target.innerHTML === "Sign In") ? setFlag(true) : setFlag(false);
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSignIn = (user) => {
        let f = true;
        let error = {
            mainError: "",
            emailError: ""
        }
        const data = qs.stringify(user);
        if(loginUser.email && !validateEmail(loginUser.email)) {
            error.emailError = "Please enter valid email";
            f = false;
        } else if(!loginUser.email && !loginUser.password) {
            error.mainError = "Wrong email or password";
            f = false;
        } 
        if(f) {
            LogIn(data);
        } else {
            setSignInErrors(error);
        }
    }
      
    const LogIn = async (user) => {
        try {
          const result = await SignInUser(user);
          localStorage.setItem("token", `${result.headers.access_token}`);
        } catch (e) {
            console.log(e);
        }
    }

    function isFullName(str) {
        const words = str.split(" ");
        if (words.length < 2) {
          return false;
        }
        
        for (const word of words) {
          if (word[0] !== word[0].toUpperCase()) {
            return false;
          }
        }
        return true;
      }
      

    const handleSignUp = () => {
        let f = true;
        let error = {
            fullNameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: ""
        }
        console.log(newUser);
        if(!newUser.username) {
            error.fullNameError = "Please enter your full name";
            f = false;
        } else if(!isFullName(newUser.username)) {
            error.fullNameError = "Please enter valid full name";
            f = false;
        } 
        if(!validateEmail(newUser.email)) {
            error.emailError = "Please enter valid email";
            f = false;
        }
        if(!newUser.password) {
            error.passwordError = "Please enter a password";
            f = false;
        }
        if (newUser.password && !newUser.confirmPassword) {
            error.confirmPasswordError = "Please confirm your password";
            f = false;
        }
        if(newUser.password && newUser.confirmPassword && (newUser.password !== newUser.confirmPassword)) {
            error.confirmPasswordError = "Confirm Password needs to be the same";
            f = false;
        }
        if(f) {
            SignUpUser();
        } else if(!f) {
            setSignUpErrors(error);
        }
    }

    const SignUpUser = async () => {
        try {
        //   const result = await SignInUser(user);
        //   localStorage.setItem("token", `${result.headers.access_token}`);
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
                    {flag ? 
                        <div className="signIn">
                            <div>
                                <input className="loginInput" type="email" placeholder="Email Address" required onChange={handleUserEmail}/>
                            </div>
                            {signInErrors.emailError ? <span className="loginErrors">{signInErrors.emailError}</span>:null}
                            <div className="passwordInputContainer">
                                <div>
                                    <input className="loginInput" type={show ? "text": "password"} placeholder="Password" required onChange={handleUserPassword}/>
                                    {!show ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword}/>: <FaEye className="passwordIcon" onClick={handleShowPassword}/>}
                                </div>
                            </div>
                            {signInErrors.mainError ? <span className="loginErrors">{signInErrors.mainError}</span>: null}
                            <h3>Forgot Password?</h3>
                        </div>
                    : <div className="signUp">
                        <div>
                            <input className="loginInput" type="text" placeholder="Full Name" required id="fullName" onChange={handleNewUserUsername}/>
                        </div>
                        {signUpErrors.fullNameError ? <span className="loginErrors">{signUpErrors.fullNameError}</span>: null}
                        <div>
                            <input className="loginInput" type="email" placeholder="Email Address" required onChange={handleNewUserEmail}/>
                        </div>
                        {signUpErrors.emailError ? <span className="loginErrors">{signUpErrors.emailError}</span>: null}
                        <div className="passwordInputContainer">
                            <input className="loginInput" type={show1 ? "text": "password"} placeholder="Password" required onChange={handleNewUserPassword}/>
                            {!show1 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword1}/>: <FaEye className="passwordIcon" onClick={handleShowPassword1}/>}
                        </div>
                        {signUpErrors.passwordError ? <span className="loginErrors">{signUpErrors.passwordError}</span>: null}
                        <div className="passwordInputContainer">
                            <input className="loginInput" type={show2 ? "text": "password"} placeholder="Confirm Password" required onChange={handleNewUserConfirmPassword}/>
                            {!show2 ? <FaEyeSlash className="passwordIcon" onClick={handleShowPassword2}/>: <FaEye className="passwordIcon" onClick={handleShowPassword2}/>}
                        </div>
                        {signUpErrors.confirmPasswordError ? <span className="loginErrors">{signUpErrors.confirmPasswordError}</span>: null}
                </div>}
                </div>
            </div>
            <div className="loginBtn">
                {flag ? 
                    <button onClick={() => handleSignIn(loginUser)}>Sign In</button>
                : <button onClick={handleSignUp}>Sign Up</button>}
            </div>
        </div>: null}
    </>
    );
}