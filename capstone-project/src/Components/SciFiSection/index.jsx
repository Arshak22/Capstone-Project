import {React, useState, useEffect} from "react";
import "./style.css";

//images 
import InterstellarPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Interstellar-Poster.jpg";

import DunePoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Dune-Poster.jpg";
import PassengersPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Passengers-Poster.jpg";

import MartianPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/Martian-Poster.jpg";

import AdAstraPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/AdAstra-Poster.jpg";

import FirstManPoster from "../../assets/images/FanPagePictures/SciFiPics/SpaceMovies/FirstMan-Poster.jpg";

export default function SciFiSection() {
    const [isActive, setIsActive] = useState(false);
    const scifimovies = [
        {
            id: "Interstellar",
            name: "Interstellar",
            description: "Interstellar is a 2014 science fiction film directed by Christopher Nolan, starring Matthew McConaughey, Anne Hathaway, and Jessica Chastain. The film takes you on a journey through time and space, as a group of astronauts travel through a wormhole in search of a new home for humanity. The stunning visuals and captivating storyline will keep you on the edge of your seat as you experience the wonders and perils of interstellar travel. With themes of love, sacrifice, and the power of the human spirit, Interstellar is a must-watch film for fans of both science fiction and emotional storytelling.",
            poster: InterstellarPoster,
        },
        {
            id: "Dune",
            name: "Dune",
            description: "Dune is a 2021 science fiction film directed by Denis Villeneuve, based on the classic novel by Frank Herbert. The film takes place in a distant future where humanity has spread throughout the galaxy and is locked in a power struggle for control of a valuable resource known as 'spice.' The film follows Paul Atreides, played by Timothée Chalamet, as he navigates a dangerous political landscape and uncovers the secrets of the mysterious desert planet Arrakis. With a talented cast, including Rebecca Ferguson, Oscar Isaac, and Josh Brolin, and visually stunning effects, Dune is a thrilling journey that will transport you to a whole new world. If you're a fan of science fiction or just looking for a movie that will leave you on the edge of your seat, Dune is definitely worth a watch.",
            poster: DunePoster,
        },
        {
            id: "Passengers",
            name: "Passengers",
            description: "Passengers is a 2016 science fiction film starring Jennifer Lawrence and Chris Pratt. The film takes place on a spaceship transporting thousands of passengers to a new planet, where two passengers, played by Lawrence and Pratt, are accidentally awakened from their cryogenic sleep 90 years too early. As they come to terms with the reality of their situation and their growing feelings for each other, they discover a deadly malfunction aboard the ship that threatens the lives of all aboard. With a compelling storyline, breathtaking visuals, and a touching portrayal of love and sacrifice, Passengers is a must-watch movie for fans of science fiction and romance. The talented cast and exceptional storytelling will keep you on the edge of your seat from start to finish.",
            poster: PassengersPoster,
        },
        {
            id: "Martian",
            name: "Martian",
            description: "The Martian is a 2015 science fiction film directed by Ridley Scott and starring Matt Damon. The film follows an astronaut who is stranded on Mars after a mission gone wrong and must use his ingenuity and scientific expertise to survive and find a way back to Earth. With a mix of humor, drama, and breathtaking visuals, The Martian is a thrilling journey that will keep you entertained from start to finish. The film showcases the human spirit and the lengths we will go to in order to survive, making it a must-watch for fans of science fiction, survival stories, and anyone who loves a good adventure. With a talented cast and a captivating storyline, The Martian is a movie you won't want to miss.",
            poster: MartianPoster,
        },
        {
            id: "AdAstra",
            name: "Ad Astra",
            description: "Ad Astra is a 2019 science fiction film directed by James Gray and starring Brad Pitt. The film takes you on a journey to the depths of our solar system as an astronaut travels through space to find his missing father, who was on a mission to find extraterrestrial life and may have encountered something dangerous. Along the way, the astronaut must confront his own demons and the mysteries of the universe as he strives to uncover the truth and complete his mission. With stunning visuals, a captivating storyline, and a powerful performance by Brad Pitt, Ad Astra is a thought-provoking and emotional journey through the unknown reaches of space. If you're a fan of science fiction or just looking for a captivating film that will take you on a journey, Ad Astra is a must-watch movie.",
            poster: AdAstraPoster,
        },
        {
            id: "FirstMan",
            name: "First Man",
            description: "First Man is a 2018 biopic directed by Damien Chazelle and starring Ryan Gosling as Neil Armstrong, the first man to walk on the moon. The film explores Armstrong's personal and professional journey, from his early days as a test pilot to his historic walk on the moon as part of the Apollo 11 mission. With breathtaking visuals, a powerful soundtrack, and a captivating performance by Ryan Gosling, First Man is a thrilling journey that will take you to the heights of human accomplishment. The film provides a unique and intimate look at one of the most famous moments in human history, and will leave you inspired and awestruck. If you're a fan of biopics, history, or just looking for a movie that will take you on an emotional journey, First Man is a must-watch film.",
            poster: FirstManPoster,
        }
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
            }, 3000);
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
                    {scifimovies.map((elem, index) => {
                        return (
                            <div key={index} className="SciFiMovie" id={elem.id} style={{background: `url(${elem.poster})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                                <div>
                                    <h1>{elem.name}</h1>
                                    <p>{elem.description}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>}
        </div>
    );
}