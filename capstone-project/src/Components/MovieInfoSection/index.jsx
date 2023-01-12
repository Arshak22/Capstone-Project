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
    useEffect(() => {
        let intervalId;
        if (rating < movie.rating) {
            intervalId = setInterval(() => {
                setRating(rating => rating + 1);
                if (rating === movie.rating) {
                    clearInterval(intervalId);
                }
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [rating, movie.rating]);
    return (
        <div className="movieInfoSection" style={{backgroundImage: `url(${movie.backdrop})`}}>
            <div className="infoCol1">
                <Tilt glareEnable={true} tiltReverse={true} scale={0.9} transitionSpeed={5000} tiltAngleXInitial={10} tiltAngleYInitial={100} glareColor={"rgba(255, 255, 255, 0.2)"} glarePosition={"bottom"}>
                    <div>
                        <img src={movie.poster} alt="moviePoster" id="moviePoster"/>
                    </div>
                </Tilt>
            </div>
            <div className="infoCol2">
                <div className="titleGenre">
                    <h1>{movie.title}</h1>
                    <h4>{movie.duration}</h4>
                    <h4>{movie.releaseDate}</h4>
                    <h4>{movie.genres.map((elem, index) => {
                        return <span key={index} className="genres">{elem} </span>
                    })}</h4>
                    <div className="moviePageIcons">
                        <div className="rating" style={{background: `conic-gradient(rgb(299 9 20) ${rating}%, transparent 0 100%)`}}>
                            <span>{movie.rating} <small>%</small></span>
                        </div>
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
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}