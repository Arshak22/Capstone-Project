import React from "react";
import MainPic from "../../assets/images/PrivacyPolicyMain.jpeg";
import MainPicture from "../../Components/MainPicture";

export default function PrivacyPolicy() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Your privacy, our priority"/>
        </div>
    );
}