import React from "react";
import MainPic from "../../assets/images/FaqMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function FAQ() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Got questions? We've got answers."/>
        </div>
    );
}