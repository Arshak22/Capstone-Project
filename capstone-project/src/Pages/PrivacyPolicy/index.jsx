import {React, useEffect} from "react";
import { useGlobalContext } from "../../Context/Context";
import MainPic from "../../assets/images/BackgroundImages/PrivacyPolicyMain.jpeg";
import MainPicture from "../../Components/MainPicture";

export default function PrivacyPolicy() {
    const {setIsLoading} = useGlobalContext();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        document.title = "Movie Mavericks: Privacy Policy";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Your privacy, our priority"/>
        </div>
    );
}