import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaVideo } from "react-icons/fa";

export default function VerticalSliderSection({movies}) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        afterChange: function(currentSlide) {
          let s = document.querySelector(`[data-index="${currentSlide}"]`).querySelector("img").src;
          console.log(s);
          const section = document.querySelector('.VerticalSliderSection');
        section.style.backgroundImage = `url(${s})`;
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
            {console.log(movies[0].img)}
            <h1>Upcoming Movies</h1>
            <Slider {...settings}>
                {movies.map((elem, index) => {
                    return (
                        <div className="movieBlock" key={index}>
                            {elem.img ? <img src={elem.img} alt={elem.img} />: null}
                            <div className="movieBlockDescription">
                                <h6><NavLink to="/movies" end>{elem.title}</NavLink></h6>
                                <span>{elem.duration}</span>
                                <NavLink to="/movies" end><button className="btn"><FaVideo className="btnIcon"/> READ MORE</button></NavLink>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}