import React, {useState} from "react";
import "./style.css";
import {useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

export default function PaginationListNav(props) {
    const navigate = useNavigate();
    const [currentYear] = useState(new Date().getFullYear());
    const [year, setYear] = useState();

    const handleFilmYear = (event) => {
        const year = event.target.value;
        if(year <= 0) {
            setYear(1895);
        } else if(year > currentYear) {
            setYear(currentYear);
        } else {
            setYear(year);
        }
    };

    const navigateLatestMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-latest");
        }, 300)
    };

    const navigatePopularMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-popular");
        }, 300)
    };

    const navigatePopularSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-popular");
        }, 300)
    };

    const navigateLatestSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-latest");
        }, 300)
    };

    const navigateUpcomingSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-upcoming");
        }, 300)
    };

    const navigateUpcomingMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-upcoming");
        }, 300)
    };

    const navigateMovieGenre = (genre) => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/filmGenre:" + genre);
        }, 300)
    };

    const navigateSeriesGenre = (genre) => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/seriesGenre:" + genre);
        }, 300)
    };

    const navigateMovieYear = (e) => {
        const year = document.getElementById("releaseYearFilm").value;
        if(e.key === "Enter" && year) {
            navigate("/");
            setTimeout(() => {
                navigate("/movies/filmReleaseYear:" + year);
            }, 300)
        }
    };

    const navigateSeriesYear = (e) => {
        const year = document.getElementById("releaseYearSeries").value;
        if(e.key === "Enter" && year) {
            navigate("/");
            setTimeout(() => {
                navigate("/tv-shows/seriesReleaseYear:" + year);
            }, 300)
        }
    };

    return (
        <div className="paginationListNav">
            {props.type === "movie" ?
            <>
                <h2 onClick={navigateLatestMovie}>Latest</h2>
                <h2 onClick={navigatePopularMovie}>Popular</h2>
                <h2 onClick={navigateUpcomingMovie}>Upcoming</h2>
                <div className="genresNav">
                    <h2 className="genresNavTitle">Genres<FaAngleDown id="dropdownIcon"/></h2>
                    <ul className="genresNavList">
                        <li onClick={() => navigateMovieGenre("ACTION")}>ACTION</li>
                        <li onClick={() => navigateMovieGenre("ADVENTURE")}>ADVENTURE</li>
                        <li onClick={() => navigateMovieGenre("ANIMATION")}>ANIMATION</li>
                        <li onClick={() => navigateMovieGenre("COMEDY")}>COMEDY</li>
                        <li onClick={() => navigateMovieGenre("CRIME")}>CRIME</li>
                        <li onClick={() => navigateMovieGenre("DOCUMENTARY")}>DOCUMENTARY</li>
                        <li onClick={() => navigateMovieGenre("DRAMA")}>DRAMA</li>
                        <li onClick={() => navigateMovieGenre("FAMILY")}>FAMILY</li>
                        <li onClick={() => navigateMovieGenre("FANTASY")}>FANTASY</li>
                        <li onClick={() => navigateMovieGenre("HISTORY")}>HISTORY</li>
                        <li onClick={() => navigateMovieGenre("HORROR")}>HORROR</li>
                        <li onClick={() => navigateMovieGenre("MUSIC")}>MUSIC</li>
                        <li onClick={() => navigateMovieGenre("MYSTERY")}>MYSTERY</li>
                        <li onClick={() => navigateMovieGenre("ROMANCE")}>ROMANCE</li>
                        <li onClick={() => navigateMovieGenre("SCIENCE_FICTION")}>SCIENCE FICTION</li>
                        <li onClick={() => navigateMovieGenre("TV_MOVIE")}>TV MOVIE</li>
                        <li onClick={() => navigateMovieGenre("THRILLER")}>THRILLER</li>
                        <li onClick={() => navigateMovieGenre("WAR")}>WAR</li>
                        <li onClick={() => navigateMovieGenre("WESTERN")}>WESTERN</li>
                    </ul>
                </div>
                <div className="genresNav releaseYear">
                    <h2 className="genresNavTitle">Release Year</h2>
                    <input onChange={handleFilmYear} onKeyDown={navigateMovieYear} value={year} type="number" name="releaseYear" className="releaseYearSearch" id="releaseYearFilm" placeholder={`Year range 1895-${currentYear}`}/>
                </div> 
            </>
            :
            <>
                <h2 onClick={navigateLatestSeries}>Latest</h2>
                <h2 onClick={navigatePopularSeries}>Popular</h2>
                <h2 onClick={navigateUpcomingSeries}>Upcoming</h2>
                <div className="genresNav">
                    <h2 className="genresNavTitle">Genres<FaAngleDown id="dropdownIcon"/></h2>
                    <ul className="genresNavList">
                        <li onClick={() => navigateSeriesGenre("ACTION")}>ACTION</li>
                        <li onClick={() => navigateSeriesGenre("ADVENTURE")}>ADVENTURE</li>
                        <li onClick={() => navigateSeriesGenre("ANIMATION")}>ANIMATION</li>
                        <li onClick={() => navigateSeriesGenre("COMEDY")}>COMEDY</li>
                        <li onClick={() => navigateSeriesGenre("CRIME")}>CRIME</li>
                        <li onClick={() => navigateSeriesGenre("DOCUMENTARY")}>DOCUMENTARY</li>
                        <li onClick={() => navigateSeriesGenre("DRAMA")}>DRAMA</li>
                        <li onClick={() => navigateSeriesGenre("FAMILY")}>FAMILY</li>
                        <li onClick={() => navigateSeriesGenre("FANTASY")}>FANTASY</li>
                        <li onClick={() => navigateSeriesGenre("HISTORY")}>HISTORY</li>
                        <li onClick={() => navigateSeriesGenre("HORROR")}>HORROR</li>
                        <li onClick={() => navigateSeriesGenre("MUSIC")}>MUSIC</li>
                        <li onClick={() => navigateSeriesGenre("MYSTERY")}>MYSTERY</li>
                        <li onClick={() => navigateSeriesGenre("ROMANCE")}>ROMANCE</li>
                        <li onClick={() => navigateSeriesGenre("SCIENCE_FICTION")}>SCIENCE FICTION</li>
                        <li onClick={() => navigateSeriesGenre("TV_MOVIE")}>TV MOVIE</li>
                        <li onClick={() => navigateSeriesGenre("THRILLER")}>THRILLER</li>
                        <li onClick={() => navigateSeriesGenre("WAR")}>WAR</li>
                        <li onClick={() => navigateSeriesGenre("WESTERN")}>WESTERN</li>
                    </ul>
                </div>
                <div className="genresNav releaseYear">
                    <h2 className="genresNavTitle">Release Year</h2>
                    <input onChange={handleFilmYear} onKeyDown={navigateSeriesYear} value={year} type="number" name="releaseYear" className="releaseYearSearch" id="releaseYearSeries" placeholder={`Year range 1895-${currentYear}`}/>
                </div> 
            </>
            }
        </div>
    );
}