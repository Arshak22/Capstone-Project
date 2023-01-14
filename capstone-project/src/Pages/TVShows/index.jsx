import {React, useEffect} from "react";
import MainPic from "../../assets/images/TVShowsMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function TVShows() {
    useEffect(() => {
        document.title = "Movie Mavericks: TV Shows";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Discover your new favorite series"/>
        </div>
    );
}