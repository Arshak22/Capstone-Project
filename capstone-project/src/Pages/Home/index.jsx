import React from "react";
import MainPic from "../../assets/images/HomeMain.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";


// Movie Pics
import Movie1 from "../../assets/images/Movie1.jpg";
import Movie2 from "../../assets/images/Movie2.jpg";
import Movie3 from "../../assets/images/Movie3.jpg";
import Movie4 from "../../assets/images/Movie4.jpg";
import Movie5 from "../../assets/images/Movie5.jpg";
import Movie6 from "../../assets/images/Movie6.jpg";
import Movie7 from "../../assets/images/Movie7.jpg";
import Movie8 from "../../assets/images/Movie8.jpg";

export default function Home() {
    const latestMovies = [
        {
            id: 1,
            title: "Movie 1",
            duration: "1hr 50m",
            img: Movie1
        },
        {
            id: 2,
            title: "Movie 2",
            duration: "2hr 50m",
            img: Movie2
        },
        {
            id: 3,
            title: "Movie 3",
            duration: "1hr 30m",
            img: Movie3
        },
        {
            id: 4,
            title: "Movie 4",
            duration: "1hr 20m",
            img: Movie4
        },
        {
            id: 5,
            title: "Movie 5",
            duration: "1hr 50m",
            img: Movie5
        },
        {
            id: 6,
            title: "Movie 6",
            duration: "2hr 50m",
            img: Movie6
        },
        {
            id: 7,
            title: "Movie 7",
            duration: "1hr 30m",
            img: Movie7
        },
        {
            id: 8,
            title: "Movie 8",
            duration: "1hr 20m",
            img: Movie8
        }
    ];

    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Welcome to the world of cinema"/>
            <SliderHeader header="Latest Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <SliderHeader header="Latest Movies" link="/movies" btnName="View All"/>
        </div>
    );
}