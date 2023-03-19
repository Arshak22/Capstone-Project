import {React, useState, useEffect} from "react";
import "./style.css";
import Rating from "react-rating";
import jwt_decode from 'jwt-decode';
import Tilt from 'react-parallax-tilt';
import Popup from 'reactjs-popup';
import { useGlobalContext } from "../../Context/Context";
import { addToWatchlist } from "../../Platform/Watchlist";
import { addToFavorite } from "../../Platform/Favorites";
import { addRating } from "../../Platform/Rate";

import DefaultPoster from "../../assets/images/BackgroundImages/DefaultPoster.jpg";
import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";

import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

//Lotties
import Lottie from 'react-lottie';
import * as Share from "../../assets/lotties/Share.json";
import * as Heart from "../../assets/lotties/Heart.json";
import * as Plus from "../../assets/lotties/Plus.json";
import * as Star from "../../assets/lotties/Star.json";

export default function MovieInfoSection({movie}) {
    const {setCastPopUpOpen} = useGlobalContext();
    const [logedIn, setLogedIn] = useState(false);
    const [rating, setRating] = useState(0);
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [backdrop, setBackdrop] = useState(DefaultBackdrop);
    const sliceIndex = movie.description.lastIndexOf(".", 800);
    const [description] = useState(movie.description.slice(0, sliceIndex + 1));
    const [favouritePopupState, setFavouritePopupState] = useState(false);
    const [watchlistPopupState, setWatchlistPopupState] = useState(false);
    const [ratePopupState, setRatePopupState] = useState(false);
    const [shareFacebookPopupState, setShareFacebookPopupState] = useState(false);
    const [shareTwitterPopupState, setShareTwitterPopupState] = useState(false);
    const [shareTelegramPopupState, setShareTelegramPopupState] = useState(false);
    const [successedShare, setSuccessedShare] = useState(false);
    const [successedFavorite, setSuccessedFavorite] = useState(false);
    const [successedWatchlist, setSuccessedWatchlist] = useState(false);
    const [successedRating, setSuccessedRating] = useState(false);
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const url = (`http://localhost:3000/film/${movie.id}`);
    const starRatings = {
        enjoy: 0,
        story: 0,
        actors: 0
    };
    const [ratingErrors, setRatingErrors] = useState({
        enjoyError: "",
        storyError: "",
        actorsError: ""
    });

    const defaultOptionsShare = {
        loop: true,
        autoplay: true, 
        animationData: Share,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsHeart = {
        loop: true,
        autoplay: true, 
        animationData: Heart,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsPlus = {
        loop: true,
        autoplay: true, 
        animationData: Plus,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsStar = {
        loop: true,
        autoplay: true, 
        animationData: Star,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        setCastPopUpOpen(false);
        if(!token) {
            setLogedIn(false);
        } else {
            const decodedToken = jwt_decode(token);
            if(!decodedToken.sub) {
                setLogedIn(false);
            } else {
                setLogedIn(true);
            }
        }
        convertToHoursAndMinutes(movie.duration);
        formatDate(movie.releaseDate);
        if(movie.mainBackdrop) {
            setBackdrop(`https://www.themoviedb.org/t/p/original/${movie.mainBackdropPath}`);
        } else if(movie.backdropPaths[0]) {
            setBackdrop(`https://www.themoviedb.org/t/p/original/${movie.backdropPaths[0]}`)
        }
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
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
          day: "2-digit",
          month: "short",
          year: "numeric"
        };
        setDate(date.toLocaleDateString("en-US", options));
    };

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
        } else if(type === "telegram") {
            setShareTelegramPopupState(true);
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
            setShareFacebookPopupState(false);
        } else if(type === "twitter") {
            setShareTwitterPopupState(false);
        } else if(type === "telegram") {
            setShareTelegramPopupState(false);
        } 
        document.body.classList.remove('hiddenScroll');
        setCastPopUpOpen(false);
    };

    const handleWatchlistAdd = async () => {
        try {
            await addToWatchlist(id, movie.id, token);
            setSuccessedWatchlist(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFavoriteAdd = async () => {
        try {
            await addToFavorite(id, movie.id, token);
            setSuccessedFavorite(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEnjoyStarRating = (value) => {
        starRatings.enjoy = value;
    };

    const handleStoryStarRating = (value) => {
        starRatings.story = value
    };

    const handleActorsStarRating = (value) => {
        starRatings.actors = value;
    };

    const handleRate = () => {
        let error = {
            enjoyError: "",
            storyError: "",
            actorsError: ""
        }
        let f = true;
        if(!starRatings.enjoy) {
            error.enjoyError = "Please rate your enjoyment.";
            f = false;
        }
        if(!starRatings.story) {
            error.storyError = "Please rate the plot.";
            f = false;
        }
        if(!starRatings.actors) {
            error.actorsError = "Please rate the actors performance.";
            f = false;
        }
        if(!f) {
            setRatingErrors(error);
        } else {
            let rating = {
                "profileId": id*1,
                "questionOneValue": starRatings.enjoy,
                "questionThreeValue": starRatings.story,
                "questionTwoValue": starRatings.actors,
                "watchableId": movie.id
            }
            rateTheMovie(rating, token);
        }
    };

    const rateTheMovie = async (rating, token) => {
        try {
            const result = await addRating(rating, token);
            if(result.request.response) {
                setSuccessedRating(true);
                handleClose("rate");
            } else {
                let error = {
                    enjoyError: "",
                    storyError: "",
                    actorsError: "You already rated this movie!"
                }
                setRatingErrors(error);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const shareWithFacebook = () => {
        setSuccessedShare(true);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    };

    const shareWithTwitter = () => {
        setSuccessedShare(true);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check%20Out%20This%20Movie`, '_blank');
    };

    const shareWithTelegram = () => {
        setSuccessedShare(true);
        window.open(`https://t.me/share/url?url=${url}&text=Check%20Out%20This%20Movie`, '_blank');
    };

    return (
        <div className="movieInfoSection" style={{backgroundImage: `url(${backdrop})`}}>
            <div className="infoCol1">
                <a href={`https://www.themoviedb.org/t/p/original${movie.posterPath}`} target="_blank" rel="noreferrer">
                    <Tilt glareEnable={true} tiltReverse={true} scale={0.9} transitionSpeed={5000} tiltAngleXInitial={20} tiltAngleYInitial={300} glareColor={"rgba(255, 255, 255, 0.2)"} glarePosition={"bottom"}>
                        <div>
                            {movie.posterPath ? <img src={`https://www.themoviedb.org/t/p/original${movie.posterPath}`} alt="moviePoster" id="moviePoster"/> : <img src={DefaultPoster} alt="moviePoster" id="moviePoster"/>}
                        </div>
                    </Tilt>
                </a>
            </div>
            <div className="infoCol2">
                <div className="titleGenre">
                    <h1>{movie.name}</h1>
                    {duration && movie.duration !== 0 ? <h4>Duration:{duration}</h4>: null}
                    {date ? <h4>Realease Date: {date}</h4>: null}
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
                                <button className={`moviePageIcon${successedShare ? " activeIcon": ""}`} id="shareBtn">
                                    {successedShare ? <Lottie options={defaultOptionsShare}
                                        height={35}
                                        width={35}
                                    />: <FaShareAlt/>}
                                </button>
                                <div className="moviePageShareIcons">
                                    {!logedIn ? <Popup trigger={<button className="moviePageShareIcon"><FaFacebookF/></button>} 
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
                                    </Popup>: <button className="moviePageShareIcon" onClick={shareWithFacebook}><FaFacebookF/></button>}
                                    {!logedIn ? <Popup trigger={<button className="moviePageShareIcon"><FaTwitter/></button>} 
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
                                    </Popup>: <button className="moviePageShareIcon" onClick={shareWithTwitter}><FaTwitter/></button>}
                                    {!logedIn ? <Popup trigger={<button className="moviePageShareIcon"><FaTelegramPlane/></button>} 
                                    position="center"
                                    open={shareTelegramPopupState}
                                    onOpen={() => handleOpen("telegram")}
                                    onClose={() => handleClose("telegram")}>
                                    {close => (
                                        <div className="iconPopUp">
                                            <button className="closePopUp" onClick={close}>
                                            x
                                            </button>
                                            <h3>Please register to share a movie.</h3>
                                        </div>
                                    )}
                                    </Popup>: <button className="moviePageShareIcon" onClick={shareWithTelegram}><FaTelegramPlane/></button>}
                                </div>
                            </div>
                            <div className="iconBox">
                                {!logedIn ? <Popup trigger={<button className="moviePageIcon"><FaHeart/></button>} 
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
                                </Popup>: <button onClick={handleFavoriteAdd} className={`moviePageIcon${successedFavorite ? " activeIcon": ""}`}>
                                    {successedFavorite ? <Lottie options={defaultOptionsHeart}
                                        height={50}
                                        width={50}
                                    />: <FaHeart/>}
                                    </button>}
                            </div>
                            <div className="iconBox">
                                {!logedIn ? <Popup trigger={<button className="moviePageIcon"><FaPlus/></button>} 
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
                                </Popup>: <button onClick={handleWatchlistAdd} className={`moviePageIcon${successedWatchlist ? " activeIcon": ""}`}>
                                    {successedWatchlist ? <Lottie options={defaultOptionsPlus}
                                        height={50}
                                        width={50}
                                    />: <FaPlus/>}
                                    </button>}
                            </div>
                            <div className="iconBox">
                                {!logedIn ? <Popup trigger={<button className="moviePageIcon"><FaStar/></button>} 
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
                                </Popup>: 
                                <Popup trigger={<button className={`moviePageIcon${successedRating ? " activeIcon": ""}`}>
                                    {successedRating ? <Lottie options={defaultOptionsStar}
                                        height={35}
                                        width={35}
                                    />: <FaStar/>}
                                    </button>} 
                                position="center"
                                open={ratePopupState}
                                onOpen={() => handleOpen("rate")}
                                onClose={() => handleClose("rate")}>
                                {close => (
                                    <div className="iconPopUp ratingPopUp">
                                        <button className="closePopUp" onClick={close}>
                                        x
                                        </button>
                                        <h2>Rate the Movie: Let us know your thoughts!</h2>
                                        <div className="ratingPopUpBox">
                                            <div className="ratingAtribute">
                                                <h5>How much did you enjoy it?</h5>
                                                <Rating className="ratingStars" emptySymbol={<BsStar/>}
                                                fullSymbol={<BsStarFill/>}
                                                fractions={2} onClick={handleEnjoyStarRating}/>
                                                <span className="ratingError">{ratingErrors.enjoyError}</span>
                                            </div>
                                            <div className="ratingAtribute">
                                                <h5>How engaging was the story?</h5>
                                                <Rating className="ratingStars" emptySymbol={<BsStar/>}
                                                fullSymbol={<BsStarFill/>}
                                                fractions={2} onClick={handleStoryStarRating}/>
                                                <span className="ratingError">{ratingErrors.storyError}</span>
                                            </div>
                                        </div>
                                        <div className="ratingPopUpBox">
                                            <div className="ratingAtribute">
                                                <h5>How well did actors perform?</h5>
                                                <Rating className="ratingStars" emptySymbol={<BsStar/>}
                                                fullSymbol={<BsStarFill/>}
                                                fractions={2} onClick={handleActorsStarRating}/>
                                                <span className="ratingError">{ratingErrors.actorsError}</span>
                                            </div>
                                        </div>
                                        <div className="ratingPopUpBox ratingPopUpBoxBtn">
                                            <button className="btn btn2 btn3" onClick={handleRate}>Rate Now</button>
                                        </div>
                                    </div>
                                )}
                                </Popup>}
                            </div>
                        </div>
                    </div>
                    {description ? <h2>Overview</h2>: null}
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}