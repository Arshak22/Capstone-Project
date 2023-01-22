import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/PrivacyPolicyMain.jpeg";
import MainPicture from "../../Components/MainPicture";

export default function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Movie Mavericks: Privacy Policy";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Your privacy, our priority"/>
        </div>
    );
}