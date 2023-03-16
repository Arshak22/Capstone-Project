import React, { useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

//images
//backgrounds
import BG1 from "../../assets/images/FanPagePictures/RetroMoviesPics/Retro-Background.png";
import BG2 from "../../assets/images/FanPagePictures/RetroMoviesPics/Gangster-Red-Retro-1.png";
import BG3 from "../../assets/images/FanPagePictures/RetroMoviesPics/Gangster-Red-Retro-2.png";
import BG4 from "../../assets/images/FanPagePictures/RetroMoviesPics/Gangster-Red.png";

//showcase
import Pic1 from "../../assets/images/FanPagePictures/RetroMoviesPics/GodFather.jpg";
import Pic2 from "../../assets/images/FanPagePictures/RetroMoviesPics/GoodFellas.jpg";
import Pic3 from "../../assets/images/FanPagePictures/RetroMoviesPics/OnceUponATimeInHollywood.jpg";
import Pic4 from "../../assets/images/FanPagePictures/RetroMoviesPics/Scarface.jpg";
import Pic5 from "../../assets/images/FanPagePictures/RetroMoviesPics/AmericanHistoryX.jpg";
import Pic6 from "../../assets/images/FanPagePictures/RetroMoviesPics/ReservoarDogs.jpg";
import Pic7 from "../../assets/images/FanPagePictures/RetroMoviesPics/PulpFiction.jpg";
import Pic8 from "../../assets/images/FanPagePictures/RetroMoviesPics/Revolver.jpg";

export default function GangsterSection() {
    const backgrounds = [BG1, BG2, BG3, BG4];
    const showcase = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];
    const links = ["238", "769", "", "", "73", "500", "", ""];
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
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
        let i = 0;
        let GangsterSection = document.querySelector(".GangsterSection");
        setInterval(() => {
            GangsterSection.style.backgroundImage = `url(${backgrounds[i]})`;
            i++;
            if(i >= backgrounds.length) {
                i = 0;
            }
        }, 5000)
    }, [])
    return (
        <div className="GangsterSection">
            <h1>Relive the Golden Age of Gangster Films with our Retro Selection</h1>
            <p>
                Get ready to immerse yourself in the gritty world of organized crime with our selection of the best retro Gangster movies. From the iconic "The Godfather" and "Scarface" to the classic "Goodfellas" and the cult favorite "Pulp Fiction", these films will transport you to a different era and keep you on the edge of your seat. Whether you're a fan of the genre or simply looking for some cinematic nostalgia, these movies are not to be missed. So grab some popcorn, sit back, and enjoy the ride.
            </p>
            <div className="GangsterSlider">
                <Slider {...settings}>
                    {showcase.map((elem, index) => {
                        return (
                            <div key={index} className="Gangster">
                              {links[index] ? 
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + links[index]}>
                                  <img src={elem} alt={elem} />
                                </NavLink>: <img src={elem} alt={elem} />
                              }
                            </div>
                        );
                    })}
                </Slider>
            </div>
            
        </div>
    );
}