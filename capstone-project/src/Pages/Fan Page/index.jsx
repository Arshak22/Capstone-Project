import React from "react";
import MainPic from "../../assets/images/FanPageMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function FanPage() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Get lost in the magic of movies"/>
        </div>
    );
}