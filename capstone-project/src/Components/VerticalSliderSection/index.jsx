import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import VideoIcon from "../../assets/images/Icons/video.png";
import { ROUTE_NAMES } from "../../Routes";

import DefaultBackdrop from "../../assets/images/BackgroundImages/DefaultBackdrop.png";

export default function VerticalSliderSection({movies}) {
    const [startingBG, setStartingBG] = useState(DefaultBackdrop);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        focusOnSelect: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        onMovieHover: function(index) {
          const currentSlideImage = document.querySelector(".slick-vertical").querySelector(".slick-list").querySelector(".slick-track").querySelector(`[data-index="${index}"]`).querySelector("img").src;
          const section = document.querySelector('.VerticalSliderSection');
          section.style.backgroundImage = `url(${currentSlideImage})`;
        },
        afterChange: function(currentSlide) {
          const currentSlideImage = document.querySelector(".slick-vertical").querySelector(".slick-list").querySelector(".slick-track").querySelector(`[data-index="${currentSlide}"]`).querySelector("img").src;
          const section = document.querySelector('.VerticalSliderSection');
          section.style.backgroundImage = `url(${currentSlideImage})`;
        },
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
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };

    useEffect(() => {
        if(movies[0]) {
          if(movies[0].mainBackdropPath) {
            setStartingBG(`https://www.themoviedb.org/t/p/original/${movies[0].mainBackdropPath}`);
          }
        }
    }, [movies])

    return (
      <div>
        <div className="VerticalSliderSection" style={{backgroundImage: `url(${startingBG})`}}>
            <h1>Upcoming Movies</h1>
            <Slider {...settings}>
                {movies.map((elem, index) => {
                  const date = new Date(elem.releaseDate);
                  const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                  const shortName = elem.name.length > 40 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 40)) + "..." : elem.name;
                    return (
                        <div className="movieBlock" key={index} onMouseEnter={() => settings.onMovieHover(index)}>
                            {elem.mainBackdropPath ? <img src={"https://www.themoviedb.org/t/p/original/" + elem.mainBackdropPath} alt={elem.mainBackdropPath} /> : <img src={DefaultBackdrop} alt={DefaultBackdrop} />}
                            <div className="movieBlockDescription">
                                <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>{shortName}</NavLink></h6>
                                <span>{dateString}</span>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end><button className="btn"><img src={VideoIcon} alt="btnIcon" className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
      </div> 
    );
}