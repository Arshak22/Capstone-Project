import React, { useState, useEffect } from "react";
import './style.css';
import Popup from 'reactjs-popup';
import { useGlobalContext } from "../../Context/Context";

export default function TopCast({movie}) {
  const {setCastPopUpOpen} = useGlobalContext();
  const [popupState, setPopupState] = useState(Array(movie.length).fill(false));

  useEffect(() => {
    setCastPopUpOpen(false);
  }, [setCastPopUpOpen])

  const handleOpen = (index) => {
    setPopupState(popupState.map((popup, i) => i === index ? true : false));
    document.body.classList.add('hiddenScroll');
    setCastPopUpOpen(true);
    document.querySelector(".cast").classList.add('popup-open');
  };

  const handleClose = () => {
    setPopupState(Array(movie.length).fill(false));
    document.body.classList.remove('hiddenScroll');
    setCastPopUpOpen(false);
    document.querySelector(".cast").classList.remove('popup-open');
  };

  return (
    <div className="cast">
      <h1>Top Cast</h1>
      <div className="topCast">
        {movie.map((elem, index) => {
          const date = new Date(elem.birthDate);
          const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
          return (
            <Popup
              key={index}
              trigger={
                <div className="castMember" key={index} style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${elem.imagePath}.jpg)`}}>
                  <div className="castMemberInfo">
                    <h4>{elem.firstName} {elem.lastName}</h4>
                    <h6>{dateString}</h6>
                  </div>
                </div>
              }
              position="center"
              open={popupState[index]}
              onOpen={() => handleOpen(index)}
              onClose={handleClose}
            >
              <div className="castPopUp" key={index}>
                <div className="castPopUpLCol" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original/${elem.imagePath}.jpg)`}}>
                </div>
                <div className="castPopUpRCol">
                  <h2>{elem.firstName} {elem.lastName}</h2>
                  <h4>{dateString}</h4>
                  <p>{elem.bio}</p>
                </div>
              </div>
            </Popup>
          )
        })}
      </div>
    </div>
  );
}
