import {React, useEffect} from "react";
import "./style.css";

import Poster from "../../assets/images/DefaultMoviePoster.jpg";
import Backdrop from "../../assets/images/DefaultMovieBackdrop.jpg";
import MovieInfoSection from "../../Components/MovieInfoSection";
import TopCast from "../../Components/TopCast";
import MovieBackdropSlider from "../../Components/MovieBackdropSlider";
import MovieTrailerSection from "../../Components/MovieTrailerSection";

//Cast Pictures
import Cast1 from "../../assets/images/TopCast/Cast1.jpg";
import Cast2 from "../../assets/images/TopCast/Cast2.jpg";
import Cast3 from "../../assets/images/TopCast/Cast3.jpg";
import Cast4 from "../../assets/images/TopCast/Cast4.jpg";
import Cast5 from "../../assets/images/TopCast/Cast5.jpg";
import Cast6 from "../../assets/images/TopCast/Cast6.jpg";
import Cast7 from "../../assets/images/TopCast/Cast7.jpg";

//Backdrop Image Examples
import BD1 from "../../assets/images/BackDrops/BD1.jpg";
import BD2 from "../../assets/images/BackDrops/BD2.jpg";
import BD3 from "../../assets/images/BackDrops/BD3.jpg";
import BD4 from "../../assets/images/BackDrops/BD4.jpg";
import BD5 from "../../assets/images/BackDrops/BD5.jpg";
import BD6 from "../../assets/images/BackDrops/BD6.jpg";

export function DefaultMoviePage() {
    useEffect(() => {
        document.title = `Movie Mavericks: ${movieInfo.title}`
    }, [])
    const movieInfo = {
        title: "Deadpool",
        releaseDate: "02/12/2016",
        genres: ["Action" , "Adventure", "Comedy"],
        duration: "1h 48m",
        rating: 76,
        overview: "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        poster: Poster,
        backdrop: Backdrop,
        directors: ["Tim Miller"],
        cast: [
            {
                name: "Ryan Reynolds",
                role: "Wade Wilson / Deadpool",
                image: Cast1
            },
            {
                name: "Morena Baccarin",
                role: "Vanessa",
                image: Cast2
            },
            {
                name: "Ed Skrein",
                role: "Ajax",
                image: Cast3
            },
            {
                name: "T.J. Miller",
                role: "Weasel",
                image: Cast4
            },
            {
                name: "Gina Carano",
                role: "Angel Dust",
                image: Cast5
            },
            {
                name: "Karan Soni",
                role: "Dopinder",
                image: Cast6
            },
            {
                name: "Brianna Hildebrand",
                role: "Negasonic Teenage Warhead",
                image: Cast7
            }
        ],
        backdrops: [BD1, BD2, BD3, BD4, BD5, BD6],
        trailerID: "ONHBaC-pfsk"
    }

    return (
        <div className="main">
            <MovieInfoSection movie={movieInfo}/>
            <TopCast movie={movieInfo}/>
            <MovieBackdropSlider movie={movieInfo}/>
            <MovieTrailerSection movie={movieInfo}/>
        </div>
    )
}