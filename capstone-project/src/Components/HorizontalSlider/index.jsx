import {React, useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jwt_decode from 'jwt-decode';
import "./style.css";
import SliderElement from "../SliderElement";

export default function HorizontalSlider({movies}) {
    const [logedIn, setLogedIn] = useState(false);
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


    useEffect(() => {
        const token = localStorage.getItem("token");
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
    }, []);

    return (
        <div className="sliderSection">
            <Slider {...settings}>
                {movies.map((elem, index) => {
                    const date = new Date(elem.releaseDate);
                    const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                    const shortName = elem.name.length > 35 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 35)) + "..." : elem.name;
                    return (
                        <SliderElement key={index} mainBackdropPath={elem.mainBackdropPath} id={elem.id} shortName={shortName} dateString={dateString} logedIn={logedIn} />
                    )
                })}
            </Slider>
        </div>
    )
}