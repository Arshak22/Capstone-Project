import React, { useState, useEffect } from "react";
import './style.css';
import Popup from 'reactjs-popup';
import { useGlobalContext } from "../../Context/Context";
import { getMovieCast } from "../../Platform/Cast";

import DefaultUser from "../../assets/images/Icons/DefaultUser.jpg";

export default function TopCast(id) {
  const {setCastPopUpOpen} = useGlobalContext();
  const [cast, setCast] = useState([]);
  const [popupState, setPopupState] = useState(Array(cast.length).fill(false));

  useEffect(() => {
    setCastPopUpOpen(false);
    getCast();
  }, [setCastPopUpOpen])

  const getCast = async () => {
        try {
            const response = await getMovieCast(id.movie);
            setCast(response.data);
            setPopupState(Array(cast.length).fill(false));
        } catch (e) {
            console.log(e);
        }
    }

  const handleOpen = (index) => {
    setPopupState(popupState.map((popup, i) => i === index ? true : false));
    document.body.classList.add('hiddenScroll');
    setCastPopUpOpen(true);
  };

  const handleClose = () => {
    setPopupState(Array(cast.length).fill(false));
    document.body.classList.remove('hiddenScroll');
    setCastPopUpOpen(false);
  };

  return (
      <>
      {cast.length === 0 ? <div></div>:  
      <div className="cast">
        <h1>Top Cast</h1>
        <div className="topCast">
          {cast.map((elem, index) => {
            const memberPic = elem.imagePath ?  `url(https://www.themoviedb.org/t/p/original/${elem.imagePath})`: `url(${DefaultUser})`;
            const date = new Date(elem.birthDate);
            const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
            const bio = elem.bio;
            const sliceIndex = bio.lastIndexOf(".", 500);
            const shortBio = bio.slice(0, sliceIndex + 1);
            return (
              <Popup
                key={index}
                trigger={
                  <div className="castMember" key={index} style={{backgroundImage: memberPic}}>
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
                {close => (
                  <div className="castPopUp" key={index}>
                    <div className="castPopUpLCol" style={{backgroundImage: memberPic}}>
                    </div>
                    <div className="castPopUpRCol">
                      <button className="closePopUp" onClick={close}>
                      x
                      </button>
                      <h2>{elem.firstName} {elem.lastName}</h2>
                      <h4>{dateString}</h4>
                      <p>{shortBio}</p>
                    </div>
                  </div>
                )}
              </Popup>
            )
          })}
        </div>
      </div>
      }
      </>
  );
}
