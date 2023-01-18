import {React, useState, useEffect} from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import VideoIcon from "../../assets/images/video.png";
import { ROUTE_NAMES } from "../../Routes";

export default function AboutUsSection() {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setFlipped(!flipped);
        }, 10000);
        return () => clearInterval(interval);
    }, [flipped]);

    return (
        <div className="AboutUsSection">
            <div className="row2">
                <div className="col2 Left">
                    <div className="flip-card">
                        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
                            <div className="flip-card-front flip">
                            </div>
                            <div className="flip-card-back flip">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <h1>Behind the Scenes with Our Team</h1>
                    <p>Welcome to our movie website! We're a team of three movie enthusiasts who are passionate about all things related to cinema. As aspiring programmers and students at AUA (American University of Armenia), we love using technology to bring the magic of movies to the masses. Consider us the tireless and efficient crew working behind the scenes to make your streaming experience as enjoyable as possible. Want to know more about our team and what drives us? Click the button below to step into our world.</p>
                    <NavLink to={ROUTE_NAMES.ABOUT_US} end><button className="btn btn2"><img src={VideoIcon} alt="VideoIcon" className="btnIcon btnIcon2"/>Our Story</button></NavLink>
                </div>
            </div>  
        </div>
    );
}