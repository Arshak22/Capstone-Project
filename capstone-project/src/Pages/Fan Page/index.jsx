import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/FanPageMain.jpg";
import MainPicture from "../../Components/MainPicture";

export default function FanPage() {
    useEffect(() => {
        document.title = "Movie Mavericks: Fan Page";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Get lost in the magic of movies"/>
        </div>
    );
}