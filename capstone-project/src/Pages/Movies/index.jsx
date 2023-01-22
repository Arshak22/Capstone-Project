import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/MoviesMain.jpg";
import MainPicture from "../../Components/MainPicture";

import MovieTest from "../../assets/images/DefaultMoviePoster.jpg";
import MoviePaginationList from "../../Components/MoviePaginationList";

export default function Movies() {
    const movieList = [
        {
            id: 1,
            title: "Movie 1",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 2,
            title: "Movie 2",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 3,
            title: "Movie 3",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 4,
            title: "Movie 4",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 5,
            title: "Movie 5",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 6,
            title: "Movie 6",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 7,
            title: "Movie 7",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 8,
            title: "Movie 8",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 9,
            title: "Movie 9",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 10,
            title: "Movie 10",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 11,
            title: "Movie 11",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 12,
            title: "Movie 12",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 13,
            title: "Movie 13",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 14,
            title: "Movie 14",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 15,
            title: "Movie 15",
            duration: "1hr 50m",
            img: MovieTest
        },
        {
            id: 16,
            title: "Movie 16",
            duration: "1hr 50m",
            img: MovieTest
        }
    ];
    useEffect(() => {
        document.title = "Movie Mavericks: Movies";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Enter a world of endless entertainment"/>
            <MoviePaginationList movies={movieList}/>
        </div>
    );
}