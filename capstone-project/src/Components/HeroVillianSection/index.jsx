import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";


//images
import Thanos from "../../assets/images/FanPagePictures/HeroAndVillan/Thanos.png";
import Thanos_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Thanos-Name.png";
import Thanos_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Thanos-Background.jpg";

import IronMan from "../../assets/images/FanPagePictures/HeroAndVillan/IronMan.png";
import IronMan_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/IronMan-Name.png";
import IronMan_BG from "../../assets/images/FanPagePictures/HeroAndVillan/IronMan-Background.jpg";

import Joker from "../../assets/images/FanPagePictures/HeroAndVillan/Joker.png";
import Joker_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Joker-Name.png";
import Joker_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Joker-Background.jpg";

import Batman from "../../assets/images/FanPagePictures/HeroAndVillan/Batman.png";
import Batman_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Batman-Name.png";
import Batman_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Batman-Background.jpg";

import Venom from "../../assets/images/FanPagePictures/HeroAndVillan/Venom.png";
import Venom_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Venom-Name.png";
import Venom_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Venom-Background.jpg";

import SpiderMan from "../../assets/images/FanPagePictures/HeroAndVillan/SpiderMan.png";
import SpiderMan_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/SpiderMan-Name.png";
import SpiderMan_BG from "../../assets/images/FanPagePictures/HeroAndVillan/SpiderMan-Background.jpg";

import Homelender from "../../assets/images/FanPagePictures/HeroAndVillan/Homelender.png";
import Homelender_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Homelender-Name.png";
import Homelender_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Homelender-Background.jpg";

import Darkside from "../../assets/images/FanPagePictures/HeroAndVillan/Darkside.png";
import Darkside_Logo from "../../assets/images/FanPagePictures/HeroAndVillan/Darkside-Name.png";
import Darkside_BG from "../../assets/images/FanPagePictures/HeroAndVillan/Darkside-Background.jpg";

export default function HeroVillianSection() {
    const charachters = [
        {
            id: "Thanos",
            img: Thanos,
            name: Thanos_Logo,
            BG: Thanos_BG,
            description: "Thanos is a powerful and formidable villain, known for his immense strength and his quest to collect the Infinity Stones. He is driven by his belief that wiping out half of all life in the universe will bring balance and peace. Thanos is not your typical one dimensional villain, he is a complex character with a tragic backstory and a deep conviction in his cause. His presence in the movies brings high stakes and tension to the Avengers series, making for an unforgettable cinematic experience. If you're a fan of epic battles, masterful storytelling, and mind-blowing special effects, you won't want to miss a single film featuring Thanos."
        },
        {
            id: "IronMan",
            img: IronMan,
            name: IronMan_Logo,
            BG: IronMan_BG,
            description: "Iron Man is a billionaire genius inventor and superhero who uses his high-tech suit of armor to save the world. He is a charismatic, witty and charming character, who is not afraid to speak his mind and has a strong sense of humor. The Iron Man movies follow Tony Stark's journey from a self-centered businessman to a true hero who is willing to sacrifice everything to protect the world. The films are filled with thrilling action, cutting-edge technology and a great deal of heart. The special effects in Iron Man movies are some of the best in the industry, making for an exciting visual experience. If you're looking for a mix of humor, action and heart-pumping adventure, Iron Man movies are definitely worth a watch."
        },
        {
            id: "Joker",
            img: Joker,
            name: Joker_Logo,
            BG: Joker_BG,
            description: "Joker is a psychologically complex and deeply disturbing villain, whose descent into madness and criminality is a central focus of the movie. The Joker is a unique and fascinating character that will keep you on the edge of your seat. The movie delves into the origins of the character and explores his psyche, his motivations and his relationship with Gotham City. The Joker movie is a dark, intense and thought-provoking film that tells a powerful story of a man driven to the brink of insanity. The acting is top-notch, particularly the lead performance by Joaquin Phoenix, who delivers a truly captivating portrayal of the iconic villain. If you're a fan of gritty, realistic, and thought-provoking storytelling, The Joker movie is a must-watch."
        },
        {
            id: "Batman",
            img: Batman,
            name: Batman_Logo,
            BG: Batman_BG,
            description: "Batman is a iconic superhero known for his intelligence, physical prowess, and use of high-tech gadgets. He is one of the most popular and enduring characters in comics and has been adapted to various forms of media. The Batman movie is a darker, grittier and more grounded take on the character, which explores the early days of Bruce Wayne becoming the Dark Knight. This film focus on the detective side of Batman, the audience will see him solving a series of murders that leads to a larger conspiracy in Gotham City. The movie also promises an exciting new take on the iconic rogues gallery of Batman's villains, and the introduction of new ones. The Batman is an action-packed, thrilling and emotionally engaging film that will leave audiences on the edge of their seats. If you're a fan of superhero movies, crime dramas, and gritty, realistic storytelling, The Batman movie is a must-watch."
        },
        {
            id: "Venom",
            img: Venom,
            name: Venom_Logo,
            BG: Venom_BG,
            description: "Venom is a powerful and terrifying symbiote, known for its ability to bond with a host and grant them superhuman strength and abilities. The Venom movie follows journalist Eddie Brock as he becomes the host of the Venom symbiote and struggles to control its monstrous impulses while also using its power to fight crime. This film offers a unique take on the Venom character, blending elements of horror, action, and comedy, making it a thrilling and entertaining watch. The special effects in the movie are top-notch, bringing the Venom symbiote to life in a spectacular way. The lead performance by Tom Hardy as Eddie Brock/Venom is highly praised, adding depth and complexity to the character. If you're a fan of superhero movies, horror, and action-packed entertainment, Venom is a must-see."
        },
        {
            id: "SpiderMan",
            img: SpiderMan,
            name: SpiderMan_Logo,
            BG: SpiderMan_BG,
            description: "Spider-Man is a beloved superhero known for his superhuman strength and spider-like abilities. He uses his powers to protect the citizens of New York City from dangerous criminals and villains, such as Doctor Octopus, The Green Goblin, Venom, and many more. He uses his webs to swing through the city, giving him the nickname, 'The Friendly Neighborhood Spider-Man.' He also has heightened senses, particularly his spider-sense, which allows him to detect danger before it happens. He must balance his responsibilities as Spider-Man with his personal life, including his relationships with his friends and loved ones. Spider-Man's movies are filled with action, humor, and heart, making them a thrilling and entertaining watch for both fans of the comics and newcomers to the franchise. They showcase the hero's struggles and triumphs as he fights to protect the city he loves. Don't miss your chance to see the web-slinging hero in action!"
        },
        {
            id: "Homelender",
            img: Homelender,
            name: Homelender_Logo,
            BG: Homelender_BG,
            description: "Homelander is the leader of The Seven, a group of powerful and famous superheroes in the TV series The Boys. He is often depicted as a charismatic and handsome figure, but beneath the surface, he is a cruel and psychopathic individual. Homelander's character arc in the series is a complex and disturbing one, as he struggles with his own power, his need for validation, and his inability to empathize with others. The Boys is a satirical and dark take on the superhero genre, and Homelander's character is a major part of that. The series is filled with action, dark humor, and character-driven storytelling that will keep you on the edge of your seat. If you're a fan of superhero shows, dark comedy and thought-provoking storytelling, The Boys is a must-watch."
        },
        {
            id: "Darkside",
            img: Darkside,
            name: Darkside_Logo,
            BG: Darkside_BG,
            description: "Darkside is a powerful and mysterious villain in the Zack Snyder's Justice League. He is a force of evil who threatens the safety and survival of Earth. The Zack Snyder's Justice League is a retelling of the Justice League story, with a more darker and serious tone. Darkside serves as the main antagonist of the film, and his presence raises the stakes for the Justice League members as they work together to stop him from destroying the planet. The film is filled with stunning visual effects and intense action sequences that will leave you breathless. With a strong ensemble cast, and a new villain to introduce, Zack Snyder's Justice League is sure to be a thrilling and epic watch. If you're a fan of superhero movies, epic battles, and a darker take on the DC universe, Zack Snyder's Justice League is a must-watch."
        },
    ];
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 1,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <div className="HeroVillianSection">
            <div>
                <Slider {...settings}>
                {charachters.map((elem, index) => {
                    return (
                        <div key={index}>
                            <div className="CharacterSection" style={{backgroundImage: `url(${elem.BG})`}} id={elem.id}>
                                <div className="leftCol">
                                    <img src={elem.name} alt={elem.name} className="MovieTitlePic"/>
                                    <p>{elem.description}</p>
                                </div>
                                <div className="rightCol">
                                    <img src={elem.img} alt={elem.img} className="HeroVillianCharachter"/>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </Slider>
            </div>
        </div>
    );
}