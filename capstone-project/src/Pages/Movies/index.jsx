import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/MoviesMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function Movies() {
    useEffect(() => {
        document.title = "Movie Mavericks: Movies";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Enter a world of endless entertainment"/>
        </div>
    );
}