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
            img: Thanos,
            name: Thanos_Logo,
            BG: Thanos_BG,
            description: ""
        },
        {
            img: IronMan,
            name: IronMan_Logo,
            BG: IronMan_BG,
            description: ""
        },
        {
            img: Joker,
            name: Joker_Logo,
            BG: Joker_BG,
            description: ""
        },
        {
            img: Batman,
            name: Batman_Logo,
            BG: Batman_BG,
            description: ""
        },
        {
            img: Venom,
            name: Venom_Logo,
            BG: Venom_BG,
            description: ""
        },
        {
            img: SpiderMan,
            name: SpiderMan_Logo,
            BG: SpiderMan_BG,
            description: ""
        },
        {
            img: Homelender,
            name: Homelender_Logo,
            BG: Homelender_BG,
            description: ""
        },
        {
            img: Darkside,
            name: Darkside_Logo,
            BG: Darkside_BG,
            description: ""
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
        speed: 2000,
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
        <Slider {...settings}>
            {charachters.map((elem, index) => {
                return (
                    <div className="HeroVillianSection" key={index} style={{backgroundImage: `url(${elem.BG})`}}>
                        <div>
                            <img src={elem.name} alt={elem.name} />
                            <p>{elem.description}</p>
                        </div>
                        <div>
                            <img src={elem.img} alt={elem.img} />
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
}