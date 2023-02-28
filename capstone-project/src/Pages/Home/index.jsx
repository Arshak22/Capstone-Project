import {React, useEffect, useState} from "react";
import { getLatestWatchables, getUpcomingWatchables, getPopularWatchables } from "../../Platform/Watchables";
import { useGlobalContext } from "../../Context/Context";
import MainPic from "../../assets/images/BackgroundImages/HomeMain2.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";
import VerticalSliderSection from "../../Components/VerticalSliderSection";
import FanPageSection from "../../Components/FanPageSection";
import AboutUsSection from "../../Components/AboutUsSection";
import WebScreenMockup from "../../Components/WebScreenMockup";

export default function Home() {
    const {setIsLoading, castPopUpOpen} = useGlobalContext();
    const [latestMovies, setLatestMovie] = useState([]);
    const [upComingMovies, setUpComingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        document.title = "Movie Mavericks";
        getLatestMovies();
        getUpcomingMovies();
        getPopularMovies();
    }, []);

    const getLatestMovies = async () => {
        try {
            const response = await getLatestWatchables(0, 10);
            setLatestMovie(response.data.content);
        } catch (e) {
            console.log(e);
        }
    }

    const getUpcomingMovies = async () => {
        try {
            const response = await getUpcomingWatchables(0, 10);
            setUpComingMovies(response.data.content);
        } catch (e) {
            console.log(e);
        }
    }

    const getPopularMovies = async () => {
        try {
            const response = await getPopularWatchables(0, 10);
            setPopularMovies(response.data.content);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <div className={`main ${castPopUpOpen ? 'popup-open' : ''}`}>
            <MainPicture img={MainPic} headline="Welcome to the world of cinema"/>
            <SliderHeader header="Latest Movies" link="/movies/latest" btnName="View All"/>
            <HorizontalSlider movies={latestMovies}/>
            <VerticalSliderSection movies={upComingMovies} />
            <SliderHeader header="Popular Movies" link="/movies/popular" btnName="View All"/>
            <HorizontalSlider movies={popularMovies}/>
            <WebScreenMockup/>
            <AboutUsSection/>
            <FanPageSection/>
        </div>
    );
}