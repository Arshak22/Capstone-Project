import {React, useEffect} from "react";
import axios from "axios";
import MainPic from "../../assets/images/BackgroundImages/HomeMain2.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";
import VerticalSliderSection from "../../Components/VerticalSliderSection";
import FanPageSection from "../../Components/FanPageSection";
import AboutUsSection from "../../Components/AboutUsSection";


//Upcoming Movies
import UpComingMovie1 from "../../assets/images/UpComingMovies/Movie1.jpg";
import UpComingMovie2 from "../../assets/images/UpComingMovies/Movie2.jpg";
import UpComingMovie3 from "../../assets/images/UpComingMovies/Movie3.jpg";
import UpComingMovie4 from "../../assets/images/UpComingMovies/Movie4.jpg";
import UpComingMovie5 from "../../assets/images/UpComingMovies/Movie5.jpg";
import UpComingMovie6 from "../../assets/images/UpComingMovies/Movie6.png";
import UpComingMovie7 from "../../assets/images/UpComingMovies/Movie7.jpg";
import UpComingMovie8 from "../../assets/images/UpComingMovies/Movie8.jpg";
import { useState } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Movie Mavericks";
        const getWatchables = async () => {
            try {
                const response = await axios.get("/api/watchables");
                setLatestMovie(response.data);
                setUpComingMovies(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        getWatchables();
    })
    
    const [latestMovies, setLatestMovie] = useState([]);

    const [upComingMovies, setUpComingMovies] = useState([]);


    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Welcome to the world of cinema"/>
            <SliderHeader header="Latest Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <VerticalSliderSection movies={upComingMovies} />
            <SliderHeader header="Popular Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <AboutUsSection/>
            <FanPageSection/>
        </div>
    );
}