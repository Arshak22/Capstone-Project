import {React} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

//icons
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import VideoIcon from "../../assets/images/Icons/video.png";

import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";

export default function HorizontalSlider({movies}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    // const getFacebookShareLink = (url) => {
    //     return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    // }

    // const getTwitterShareLink = (url, text="Check Out This Movie") => {
    //     return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    // }

    // const getPinterestShareLink = (url, media, description="Check Out This Movie") => {
    //     return `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`;
    // }

    return (
        <div className="sliderSection">
            <Slider {...settings}>
                {movies.map((elem, index) => {
                    const date = new Date(elem.releaseDate);
                    const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                    const shortName = elem.name.length > 35 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 35)) + "..." : elem.name;
                    return (
                        <div className="movieBlock" key={index}>
                            {elem.mainBackdropPath ? <img src={"https://www.themoviedb.org/t/p/original/" + elem.mainBackdropPath} alt={elem.mainBackdropPath} />: <img src={DefaultBackdrop} alt={DefaultBackdrop} />}
                            <div className="movieBlockDescription">
                                <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>{shortName}</NavLink></h6>
                                <span>{dateString}</span>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end><button className="btn"><img src={VideoIcon} alt="btnIcon" className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                            <div className="movieBlockSocialInfo">
                                <ul>
                                    <li className="movieBlockIcon share">
                                        <span><FaShareAlt className="iconInside"/></span>
                                        <div className="shareBox">
                                            <div>
                                                <FaFacebookF className="shareIcons"/>
                                                <FaTwitter className="shareIcons"/>
                                                <FaPinterestP className="shareIcons"/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="movieBlockIcon">
                                        <span><FaHeart className="iconInside"/></span>
                                    </li>
                                    <li className="movieBlockIcon">
                                        <span><FaPlus className="iconInside"/></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}