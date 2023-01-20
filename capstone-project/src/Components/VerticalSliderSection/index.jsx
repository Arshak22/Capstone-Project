import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import VideoIcon from "../../assets/images/video.png";
import { ROUTE_NAMES } from "../../Routes";

export default function VerticalSliderSection({movies}) {
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

    return (
        <div className="VerticalSliderSection" style={{backgroundImage: `url(${movies[0].img})`}}>
            <h1>Upcoming Movies</h1>
            <Slider {...settings}>
                {movies.map((elem, index) => {
                    return (
                        <div className="movieBlock" key={index} onMouseEnter={() => settings.onMovieHover(index)}>
                            {elem.img ? <img src={elem.img} alt={elem.img} />: null}
                            <div className="movieBlockDescription">
                                <h6><NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end>{elem.title}</NavLink></h6>
                                <span>{elem.duration}</span>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE} end><button className="btn"><img src={VideoIcon} alt="btnIcon" className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}