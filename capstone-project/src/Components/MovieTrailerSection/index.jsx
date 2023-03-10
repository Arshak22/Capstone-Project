import {React, useState, useEffect } from 'react';
import "./style.css";

export default function MovieTrailerSection({movie}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".split-section");
      const sectionTop = section.offsetTop;
      const scrollPosition = window.pageYOffset;
      if (scrollPosition >= sectionTop) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`split-section ${isActive ? 'active' : ''}`}>
      <div className="split-section__inner">
        <div className={`split-section__content ${isActive ? 'active' : ''}`}>
            {movie.trailerLink ? <iframe title='movieTrailer' width="100%" height="100%" src={`https://www.youtube.com/embed/${movie.trailerLink}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='trailer'></iframe>: 
            <div className='noTrailerYet'>
                <h2>Sorry, no trailer yet</h2>
            </div>}
        </div>
      </div>
    </div>
  );
};