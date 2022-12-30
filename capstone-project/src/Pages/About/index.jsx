import React from "react";
import MainPic from "../../assets/images/About.jpg";
import MainPicture from "../../Components/MainPicture";

export default function About() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Find out more about us"/>
        </div>
    );
}