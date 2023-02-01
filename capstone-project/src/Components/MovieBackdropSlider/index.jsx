import {React} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function MovieBackdropSlider({movie}) {
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
        beforeChange: function(currentSlide) {
          console.log(currentSlide);
          for(let i = currentSlide; i > currentSlide - 2; i--) {
            document.querySelector(".backdropSlider .slick-list").querySelector(".slick-track").querySelector(`[data-index="${i}"]`).querySelector(".backdropImage").style.transform = "scale(0.8) perspective(1000px) rotateX(4deg) rotateY(16deg) rotateZ(-4deg)";
          }
          setTimeout(() => {
            for(let i = currentSlide; i > currentSlide - 2; i--) {
              document.querySelector(".backdropSlider .slick-list").querySelector(".slick-track").querySelector(`[data-index="${i}"]`).querySelector(".backdropImage").style.transform = "scale(0.8) perspective(1000px) rotateX(4deg) rotateY(-16deg) rotateZ(4deg)";
            }
          }, 10000);
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
        <div className="backdropSlider">
            <h1>Images</h1>
            <Slider {...settings}>
                {movie.backdrops.map((elem, index) => {
                    return (
                        <div key={index}>
                            <div className="backdropImage" style={{backgroundImage: `url(${elem})`}}>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}