import {React, useState, useEffect} from "react";
import "./style.css";

//images 
import InterstellarPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Interstellar-Poster.jpg";
import InterstellarBG from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Interstellar-BG.jpg";

import DunePoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Dune-Poster.jpg";
import DuneBG from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Dune-BG.jpg";

import PassengersPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Passengers-Poster.jpg";
import PassengersBG from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Passengers-BG.jpg";

import MartianPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Martian-Poster.jpg";
import MartianBG from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Martian-BG.jpg";

import AdAstraPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/AdAstra-Poster.jpg";
import AdAstraBG from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/AdAstra-BG.jpg";

export default function SciFiSection() {
    const [isActive, setIsActive] = useState(false);
    const scifimovies = [
        {
            name: "Interstellar",
            description: "something",
            poster: InterstellarPoster,
            BG: InterstellarBG
        },
        {
            name: "Dune",
            description: "something",
            poster: DunePoster,
            BG: DuneBG
        },
        {
            name: "Passengers",
            description: "something",
            poster: PassengersPoster,
            BG: PassengersBG
        },
        {
            name: "Martian",
            description: "something",
            poster: MartianPoster,
            BG: MartianBG
        },
        {
            name: "Ad Astra",
            description: "something",
            poster: AdAstraPoster,
            BG: AdAstraBG
        },
    ];
    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".SciFiSection");
            const sectionTop = section.offsetTop;
            const scrollPosition = window.pageYOffset;
            setTimeout(() => {
                if (scrollPosition >= sectionTop) {
                    setIsActive(true);
                } else {
                    setIsActive(false);
                }
            }, 5000);
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])
    return (
        <div className="SciFiSection">
            {!isActive ? <div className="SciFiGIF">
                <h1>Swimming in the Ocean of Space: Our Favorite Cosmic Movies</h1>
            </div> :
            <div className="SciFiMovies">
                <div className="SciFiMovieShowcase">
                    <div className="SciFiMovie">

                    </div>
                </div>
            </div>}
        </div>
    );
}