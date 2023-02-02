import {React, useState, useEffect} from "react";
import "./style.css";
import Tilt from 'react-parallax-tilt';

import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function MovieInfoSection({movie}) {
    const [rating, setRating] = useState(0);
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        convertToHoursAndMinutes(movie.duration);
        formatDate(movie.releaseDate);
        let intervalId;
        if (rating < movie.rating * 10) {
            intervalId = setInterval(() => {
                setRating(rating => rating + 1);
                if (rating === movie.rating * 10) {
                    clearInterval(intervalId);
                }
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [rating]);

    const convertToHoursAndMinutes = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        setDuration(` ${hours}h ${remainingMinutes}m`);
        if(hours === 0) {
            setDuration(` ${remainingMinutes}m`);
        }
        if(remainingMinutes === 0) {
            setDuration(` ${hours}h`);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          day: "2-digit",
          month: "short",
          year: "numeric"
        };
        setDate(date.toLocaleDateString("en-US", options));
      }

    return (
        <div className="movieInfoSection" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movie.backdropPaths[0]})`}}>
            <div className="infoCol1">
                <Tilt glareEnable={true} tiltReverse={true} scale={0.9} transitionSpeed={5000} tiltAngleXInitial={20} tiltAngleYInitial={300} glareColor={"rgba(255, 255, 255, 0.2)"} glarePosition={"bottom"}>
                    <div>
                        <img src={movie.posterPath} alt="moviePoster" id="moviePoster"/>
                    </div>
                </Tilt>
            </div>
            <div className="infoCol2">
                <div className="titleGenre">
                    <h1>{movie.name}</h1>
                    {duration ? <h4>Duration:{duration}</h4>: null}
                    <h4>Realease Date: {date}</h4>
                    <h4>Genres: {movie.genres.map((elem, index) => {
                        return <span key={index} className="genres">{elem}{index < movie.genres.length - 1 ? ', ' : ''}</span>
                    })}</h4>
                    {/* <h4>Director/s: {movie.directors.map((elem, index) => {
                        return <span key={index} className="directors">{elem}{index < movie.directors.length - 1 ? ',' : ''} </span>
                    })}</h4> */}
                    <div className="moviePageIcons">
                        <div className="ratingBox">
                            <div className="rating" style={{background: `conic-gradient(rgb(299 9 20) ${rating}%, transparent 0 100%)`}}>
                                <span>{movie.rating * 10} <small>%</small></span>
                            </div>
                            <h3>User <br/> Rating</h3>
                        </div>
                        <div className="iconBoxes">
                            <div className="iconBox">
                                <button className="moviePageIcon" id="shareBtn"><FaShareAlt/></button>
                                <div className="moviePageShareIcons">
                                    <FaFacebookF className="moviePageShareIcon"/>
                                    <FaTwitter className="moviePageShareIcon"/>
                                    <FaPinterestP className="moviePageShareIcon"/>
                                </div>
                            </div>
                            <div className="iconBox">
                                <button className="moviePageIcon"><FaHeart/></button>
                            </div>
                            <div className="iconBox">
                                <button className="moviePageIcon"><FaPlus/></button>
                            </div>
                            <div className="iconBox">
                                <button className="moviePageIcon"><FaStar/></button>
                            </div>
                        </div>
                    </div>
                    <h2>Overview</h2>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    )
}