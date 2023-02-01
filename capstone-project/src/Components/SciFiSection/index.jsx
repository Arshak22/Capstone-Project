import {React, useState, useEffect} from "react";
import "./style.css";

export default function SciFiSection() {
    const [isActive, setIsActive] = useState(false);
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
            {!isActive ? <div className="SciFiGIF"></div> :
            <div className="SciFiMovies">

            </div>}
        </div>
    );
}