import React from "react";
import MainPic from "../../assets/images/HomeMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function Home() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Welcome into the world of cinema"/>
        </div>
    );
}