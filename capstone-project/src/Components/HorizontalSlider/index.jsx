import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NavLink } from "react-router-dom";

//icons
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function HorizontalSlider({movies}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
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

    return (
        <div className="sliderSection">
            <Slider {...settings}>
                {movies.map((elem, index) => {
                    return (
                        <div className="movieBlock" key={index}>
                            <div className="movieBlockImage">
                                {elem.img ? <img src={elem.img} alt={elem.img} />: null}
                            </div>
                            <div className="movieBlockDescription">
                                <h6><NavLink to="/movies" end>{elem.title}</NavLink></h6>
                                <div>
                                    <span>{elem.duration}</span>
                                </div>
                                <NavLink to="/movies" end><button>Read More</button></NavLink>
                            </div>
                            <div className="movieBlockSocialInfo">
                                <ul>
                                    <li className="shareIcon">
                                        <span><FaShareAlt/></span>
                                    </li>
                                    <li className="favoriteIcon">
                                        <span><FaHeart/></span>
                                    </li>
                                    <li className="watchListIcon">
                                        <span><FaPlus/></span>
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