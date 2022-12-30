import React from "react";
import MainPic from "../../assets/images/TVShowsMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function TVShows() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Discover your new favorite series"/>
        </div>
    );
}