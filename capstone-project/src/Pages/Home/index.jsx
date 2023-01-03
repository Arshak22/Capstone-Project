import React from "react";
import MainPic from "../../assets/images/HomeMain.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";
import VerticalSliderSection from "../../Components/VerticalSliderSection";
import FanPageSection from "../../Components/FanPageSection";


// Movie Pics
import Movie1 from "../../assets/images/Movies/Movie1.jpg";
import Movie2 from "../../assets/images/Movies/Movie2.jpg";
import Movie3 from "../../assets/images/Movies/Movie3.jpg";
import Movie4 from "../../assets/images/Movies/Movie4.jpg";
import Movie5 from "../../assets/images/Movies/Movie5.jpg";
import Movie6 from "../../assets/images/Movies/Movie6.jpg";
import Movie7 from "../../assets/images/Movies/Movie7.jpg";
import Movie8 from "../../assets/images/Movies/Movie8.jpg";

//Upcoming Movies
import UpComingMovie1 from "../../assets/images/UpComingMovies/Movie1.jpg";
import UpComingMovie2 from "../../assets/images/UpComingMovies/Movie2.jpg";
import UpComingMovie3 from "../../assets/images/UpComingMovies/Movie3.jpg";
import UpComingMovie4 from "../../assets/images/UpComingMovies/Movie4.jpg";
import UpComingMovie5 from "../../assets/images/UpComingMovies/Movie5.jpg";
import UpComingMovie6 from "../../assets/images/UpComingMovies/Movie6.png";
import UpComingMovie7 from "../../assets/images/UpComingMovies/Movie7.jpg";
import UpComingMovie8 from "../../assets/images/UpComingMovies/Movie8.jpg";

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

    const upComingMovies = [
        {
            id: 1,
            title: "Movie 1",
            duration: "1hr 50m",
            img: UpComingMovie1
        },
        {
            id: 2,
            title: "Movie 2",
            duration: "2hr 50m",
            img: UpComingMovie2
        },
        {
            id: 3,
            title: "Movie 3",
            duration: "1hr 30m",
            img: UpComingMovie3
        },
        {
            id: 4,
            title: "Movie 4",
            duration: "1hr 20m",
            img: UpComingMovie4
        },
        {
            id: 5,
            title: "Movie 5",
            duration: "1hr 50m",
            img: UpComingMovie5
        },
        {
            id: 6,
            title: "Movie 6",
            duration: "2hr 50m",
            img: UpComingMovie6
        },
        {
            id: 7,
            title: "Movie 7",
            duration: "1hr 30m",
            img: UpComingMovie7
        },
        {
            id: 8,
            title: "Movie 8",
            duration: "1hr 20m",
            img: UpComingMovie8
        }
    ];


    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Welcome to the world of cinema"/>
            <SliderHeader header="Latest Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <VerticalSliderSection movies={upComingMovies} />
            <SliderHeader header="Popular Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <FanPageSection/>
        </div>
    );
}