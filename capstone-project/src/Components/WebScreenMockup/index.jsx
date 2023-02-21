import React from "react";
import "./style.css";

import Mockup from "../../assets/images/BackgroundImages/WebMockup.png";

export default function WebScreenMockup() {
    return (
        <div className="WebScreenMockup">
            <h1>Your Movie Experience, Anywhere: View our website on Any Device</h1>
            <div>
                <img src={Mockup} alt="Mockup" className="Mockup"/>
            </div>
        </div>
    );
}