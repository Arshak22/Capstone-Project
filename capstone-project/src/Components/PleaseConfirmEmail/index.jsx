import React from "react";
import "./style.css";
import Lottie from 'react-lottie';
import * as Email from "../../assets/lotties/EmailSent.json";

export default function PleaseConfirmEmail() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Email,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleGoToMail = () => {
        window.open('https://mail.google.com/', '_blank');
        window.location.reload();
    };

    return (
        <div className="PleaseConfirmEmail">
            <div className="confirmEmailBox">
                <div className="emailAnimation">
                    <Lottie options={defaultOptions}
                        height={250}
                        width={350}
                    />
                </div>
                <h1>Verify your email to proceed</h1>
                <h2>We just sent an email to your address.<br/>Please check your email and click on the link provided to verify your account.</h2>
                <div className="confirmEmailBtnBox">
                    <button onClick={handleGoToMail} className="btn btn2">Go to Gmail Inbox</button>
                </div>
            </div>
        </div>
    );
}