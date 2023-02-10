import {React, useState, useEffect} from "react";
import "./style.css";
import Tilt from 'react-parallax-tilt';
import Popup from 'reactjs-popup';
import { useGlobalContext } from "../../Context/Context";

import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function MovieInfoSection({movie}) {
    const {setCastPopUpOpen} = useGlobalContext();
    const [rating, setRating] = useState(0);
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const sliceIndex = movie.description.lastIndexOf(".", 800);
    const [description] = useState(movie.description.slice(0, sliceIndex + 1));
    const [favouritePopupState, setFavouritePopupState] = useState(false);
    const [watchlistPopupState, setWatchlistPopupState] = useState(false);
    const [ratePopupState, setRatePopupState] = useState(false);
    const [shareFacebookPopupState, setShareFacebookPopupState] = useState(false);
    const [shareTwitterPopupState, setShareTwitterPopupState] = useState(false);
    const [sharePinterestPopupState, setSharePinterestPopupState] = useState(false);

    useEffect(() => {
        convertToHoursAndMinutes(movie.duration);
        formatDate(movie.releaseDate);
        let intervalId;
        if (rating < Math.floor(movie.rating * 10)) {
            intervalId = setInterval(() => {
                setRating(rating => rating + 1);
                if (rating === Math.floor(movie.rating * 10)) {
                    clearInterval(intervalId);
                }
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [rating, movie.duration, movie.rating, movie.releaseDate]);

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

    const handleOpen = (type) => {
        if(type === "favourite") {
            setFavouritePopupState(true);
        } else if(type === "watchlist") {
            setWatchlistPopupState(true);
        } else if(type === "rate") {
            setRatePopupState(true);
        } else if(type === "facebook") {
            setShareFacebookPopupState(true);
        } else if(type === "twitter") {
            setShareTwitterPopupState(true);
        } else if(type === "pinterest") {
            setSharePinterestPopupState(true);
        } 
        document.body.classList.add('hiddenScroll');
        setCastPopUpOpen(true);
    };

    const handleClose = (type) => {
        if(type === "favourite") {
            setFavouritePopupState(false);
        } else if(type === "watchlist") {
            setWatchlistPopupState(false);
        } else if(type === "rate") {
            setRatePopupState(false);
        } else if(type === "facebook") {
            setShareFacebookPopupState(true);
        } else if(type === "twitter") {
            setShareTwitterPopupState(true);
        } else if(type === "pinterest") {
            setSharePinterestPopupState(true);
        } 
        document.body.classList.remove('hiddenScroll');
        setCastPopUpOpen(false);
    };

    return (
        <div className="movieInfoSection" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movie.mainBackdropPath})`}}>
            <div className="infoCol1">
                <a href={`https://www.themoviedb.org/t/p/original${movie.posterPath}`} target="_blank" rel="noreferrer">
                    <Tilt glareEnable={true} tiltReverse={true} scale={0.9} transitionSpeed={5000} tiltAngleXInitial={20} tiltAngleYInitial={300} glareColor={"rgba(255, 255, 255, 0.2)"} glarePosition={"bottom"}>
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/original${movie.posterPath}`} alt="moviePoster" id="moviePoster"/>
                        </div>
                    </Tilt>
                </a>
            </div>
            <div className="infoCol2">
                <div className="titleGenre">
                    <h1>{movie.name}</h1>
                    {duration && movie.duration !== 0 ? <h4>Duration:{duration}</h4>: null}
                    <h4>Realease Date: {date}</h4>
                    {movie.genres.length !== 0 ? 
                    <h4>Genres: {movie.genres.map((elem, index) => {
                        return (
                                <span key={index} className="genres">{elem.replace("_", " ").split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")}{index < movie.genres.length - 1 ? ', ' : ''}</span>
                        )
                    })}</h4>: null}
                    <div className="moviePageIcons">
                        <div className="ratingBox">
                            <div className="rating" style={{background: `conic-gradient(rgb(299 9 20) ${rating}%, transparent 0 100%)`}}>
                            <span>{movie.rating ? Math.floor(movie.rating * 10) + '%' : 'NR'}</span>
                            </div>
                            <h3>User <br/> Rating</h3>
                        </div>
                        <div className="iconBoxes">
                            <div className="iconBox">
                                <button className="moviePageIcon" id="shareBtn"><FaShareAlt/></button>
                                <div className="moviePageShareIcons">
                                    <Popup trigger={<FaFacebookF className="moviePageShareIcon"/>} 
                                    position="center"
                                    open={shareFacebookPopupState}
                                    onOpen={() => handleOpen("facebook")}
                                    onClose={() => handleClose("facebook")}>
                                    {close => (
                                        <div className="iconPopUp">
                                            <button className="closePopUp" onClick={close}>
                                            x
                                            </button>
                                            <h3>Please register to share a movie.</h3>
                                        </div>
                                    )}
                                    </Popup>
                                    <Popup trigger={<FaTwitter className="moviePageShareIcon"/>} 
                                    position="center"
                                    open={shareTwitterPopupState}
                                    onOpen={() => handleOpen("twitter")}
                                    onClose={() => handleClose("twitter")}>
                                    {close => (
                                        <div className="iconPopUp">
                                            <button className="closePopUp" onClick={close}>
                                            x
                                            </button>
                                            <h3>Please register to share a movie.</h3>
                                        </div>
                                    )}
                                    </Popup>
                                    <Popup trigger={<FaPinterestP className="moviePageShareIcon"/>} 
                                    position="center"
                                    open={sharePinterestPopupState}
                                    onOpen={() => handleOpen("pinterest")}
                                    onClose={() => handleClose("pinterest")}>
                                    {close => (
                                        <div className="iconPopUp">
                                            <button className="closePopUp" onClick={close}>
                                            x
                                            </button>
                                            <h3>Please register to share a movie.</h3>
                                        </div>
                                    )}
                                    </Popup>
                                </div>
                            </div>
                            <div className="iconBox">
                                <Popup trigger={<button className="moviePageIcon"><FaHeart/></button>} 
                                position="center"
                                open={favouritePopupState}
                                onOpen={() => handleOpen("favourite")}
                                onClose={() => handleClose("favourite")}>
                                {close => (
                                    <div className="iconPopUp">
                                        <button className="closePopUp" onClick={close}>
                                        x
                                        </button>
                                        <h3>Please register to add a movie to your favourites.</h3>
                                    </div>
                                )}
                                </Popup>
                            </div>
                            <div className="iconBox">
                                <Popup trigger={<button className="moviePageIcon"><FaPlus/></button>} 
                                position="center"
                                open={watchlistPopupState}
                                onOpen={() => handleOpen("watchlist")}
                                onClose={() => handleClose("watchlist")}>
                                {close => (
                                    <div className="iconPopUp">
                                        <button className="closePopUp" onClick={close}>
                                        x
                                        </button>
                                        <h3>Please register to add a movie to your watchlist.</h3>
                                    </div>
                                )}
                                </Popup>
                            </div>
                            <div className="iconBox">
                                <Popup trigger={<button className="moviePageIcon"><FaStar/></button>} 
                                position="center"
                                open={ratePopupState}
                                onOpen={() => handleOpen("rate")}
                                onClose={() => handleClose("rate")}>
                                {close => (
                                    <div className="iconPopUp">
                                        <button className="closePopUp" onClick={close}>
                                        x
                                        </button>
                                        <h3>Please register to rate a movie.</h3>
                                    </div>
                                )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <h2>Overview</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}