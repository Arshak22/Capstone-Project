import {React, useEffect, useState} from "react";
import { getWatchables } from "../../Platform/Watchables";
import MainPic from "../../assets/images/BackgroundImages/HomeMain2.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";
import VerticalSliderSection from "../../Components/VerticalSliderSection";
import FanPageSection from "../../Components/FanPageSection";
import AboutUsSection from "../../Components/AboutUsSection";

export default function Home() {
    const [latestMovies, setLatestMovie] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);

    useEffect(() => {
        document.title = "Movie Mavericks";
        getLatestMovies();
        getUpcomingMovies();
    }, []);

    const getLatestMovies = async () => {
        try {
            const response = await getWatchables();
            setLatestMovie(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const getUpcomingMovies = async () => {
        try {
            const response = await getWatchables();
            setUpComingMovies(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    
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