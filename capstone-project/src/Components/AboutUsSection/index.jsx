import {React, useState, useEffect} from "react";
import "./style.css";
import Logo2 from "../../assets/images/Logo2.png";
import VideoIcon from "../../assets/images/video.png";

export default function AboutUsSection() {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setFlipped(!flipped);
        }, 6000);
        return () => clearInterval(interval);
    }, [flipped]);

    return (
        <div className="AboutUsSection">
                <div className="left-column">
                    <div className="flip-card">
                        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
                            <div className="flip-card-front flip">
                                <img src={Logo2} alt="TeamLogo" />
                            </div>
                            <div className="flip-card-back flip">
                                <img src={Logo2} alt="TeamLogo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <h1>Behind the Scenes with Our Team</h1>
                    <p>Welcome to our movie website! We're a team of three movie enthusiasts who are passionate about all things cinema. As aspiring programmers and students at AUA (American University of Armenia), we love using technology to bring the magic of movies to the masses. Consider us the tireless and efficient crew working behind the scenes to make your streaming experience as enjoyable as possible. Want to know more about our team and what drives us? Click the button below to step into our world.</p>
                    <button className="btn btn2"><img src={VideoIcon} alt="VideoIcon" className="btnIcon btnIcon2"/>Our Story</button>
                </div>
            </div>
    );
}