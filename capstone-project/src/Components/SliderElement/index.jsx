import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Popup from 'reactjs-popup';
import { useGlobalContext } from "../../Context/Context";
import { ROUTE_NAMES } from "../../Routes";
import { addToWatchlist } from "../../Platform/Watchlist";
import { addToFavorite } from "../../Platform/Favorites";

//icons
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import VideoIcon from "../../assets/images/Icons/video.png";

import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";

export default function SliderElement(props) {
    const {setCastPopUpOpen} = useGlobalContext();
    const [favouritePopupState, setFavouritePopupState] = useState(false);
    const [watchlistPopupState, setWatchlistPopupState] = useState(false);
    const [shareFacebookPopupState, setShareFacebookPopupState] = useState(false);
    const [shareTwitterPopupState, setShareTwitterPopupState] = useState(false);
    const [sharePinterestPopupState, setSharePinterestPopupState] = useState(false);
    const [successedFavorite, setSuccessedFavorite] = useState(false);
    const [successedWatchlist, setSuccessedWatchlist] = useState(false);
    const url = (`http://localhost:3000/film/${props.id}`);

    const shareWithFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }

    const shareWithTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=Check%20Out%20This%20Movie`, '_blank');
    }

    const shareWithTelegram = () => {
        window.open(`https://t.me/share/url?url=${url}&text=Check%20Out%20This%20Movie`, '_blank');
    }

    const handleOpen = (type) => {
        if(type === "favourite") {
            setFavouritePopupState(true);
        } else if(type === "watchlist") {
            setWatchlistPopupState(true);
        } else if(type === "facebook") {
            setShareFacebookPopupState(true);
        } else if(type === "twitter") {
            setShareTwitterPopupState(true);
        } else if(type === "pinterest") {
            setSharePinterestPopupState(true);
        } 
        console.log(type);
        document.body.classList.add('hiddenScroll');
        setCastPopUpOpen(true);
    };

    const handleClose = (type) => {
        if(type === "favourite") {
            setFavouritePopupState(false);
        } else if(type === "watchlist") {
            setWatchlistPopupState(false);
        } else if(type === "facebook") {
            setShareFacebookPopupState(false);
        } else if(type === "twitter") {
            setShareTwitterPopupState(false);
        } else if(type === "pinterest") {
            setSharePinterestPopupState(false);
        } 
        console.log(type);
        document.body.classList.remove('hiddenScroll');
        setCastPopUpOpen(false);
    };

    const handleWatchlistAdd = async (id) => {
        try {
            await addToWatchlist(props.profileID, id, props.token);
            setSuccessedWatchlist(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFavoriteAdd = async (id) => {
        try {
            await addToFavorite(props.profileID, id, props.token);
            setSuccessedFavorite(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="movieBlock" key={props.key}>
                            {props.mainBackdropPath ? <img src={"https://www.themoviedb.org/t/p/original/" + props.mainBackdropPath} alt={props.mainBackdropPath} />: <img src={DefaultBackdrop} alt={DefaultBackdrop} />}
                            <div className="movieBlockDescription">
                                <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE + props.id} end>{props.shortName}</NavLink></h6>
                                <span>{props.dateString}</span>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + props.id} end><button className="btn"><img src={VideoIcon} alt="btnIcon" className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                            <div className="movieBlockSocialInfo">
                                <ul>
                                    <li className="movieBlockIcon share">
                                        <span><FaShareAlt className="iconInside"/></span>
                                        <div className="shareBox">
                                            <div>
                                            {!props.logedIn ? <Popup trigger={<FaFacebookF className="shareIcons"/>} 
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
                                            </Popup>: <FaFacebookF onClick={shareWithFacebook} className="shareIcons"/>}
                                            {!props.logedIn ? <Popup trigger={<FaTwitter className="shareIcons"/>} 
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
                                            </Popup>: <FaTwitter onClick={shareWithTwitter} className="shareIcons"/>}
                                            {!props.logedIn ? <Popup trigger={<FaTelegramPlane className="shareIcons"/>} 
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
                                            </Popup>: <FaTelegramPlane onClick={shareWithTelegram} className="shareIcons"/>}
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`movieBlockIcon${successedFavorite ? " activeBlockIcon": ""}`}>
                                            {!props.logedIn ? <Popup trigger={<span><FaHeart className="iconInside"/></span>} 
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
                                            </Popup>: <span onClick={()=>handleFavoriteAdd(props.id)} className={`${successedFavorite ? " activeSmallIcon": ""}`}><FaHeart className="iconInside"/></span>}
                                    </li>
                                    <li className={`movieBlockIcon${successedWatchlist ? " activeBlockIcon": ""}`}>
                                            {!props.logedIn ? <Popup trigger={<span><FaPlus className="iconInside"/></span>} 
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
                                            </Popup>: <span onClick={()=>handleWatchlistAdd(props.id)} className={`${successedWatchlist ? " activeSmallIcon": ""}`}><FaPlus className="iconInside"/></span>}
                                    </li>
                                </ul>
                            </div>
                        </div>
    );
}