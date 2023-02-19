import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/TVShowsMain.jpg";
import MainPicture from "../../Components/MainPicture";
import MoviePaginationList from "../../Components/MoviePaginationList";
import PaginationListNav from "../../Components/PaginationListNav";

export default function TVShows() {
    useEffect(() => {
        document.title = "Movie Mavericks: TV Shows";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Discover your new favorite series"/>
            <PaginationListNav type="series"/>
            <MoviePaginationList/>
        </div>
    );
}