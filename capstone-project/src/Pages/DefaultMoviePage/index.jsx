import React from "react";
import "./style.css";

import Poster from "../../assets/images/DefaultMoviePoster.jpg";
import Backdrop from "../../assets/images/DefaultMovieBackdrop.jpg";
import MovieInfoSection from "../../Components/MovieInfoSection";

export function DefaultMoviePage() {
    const movieInfo = {
        title: "Deadpool",
        releaseDate: "02/12/2016",
        genres: ["Action" , "Adventure", "Comedy"],
        duration: "1h 48m",
        overview: "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        poster: Poster,
        backdrop: Backdrop 
    }

    return (
        <div className="main">
            <MovieInfoSection movie={movieInfo}/>
        </div>
    )
}