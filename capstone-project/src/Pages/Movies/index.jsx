import React from "react";
import MainPic from "../../assets/images/MoviesMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function Movies() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Enter a world of endless entertainment"/>
        </div>
    );
}