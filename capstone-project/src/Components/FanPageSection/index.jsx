import React from "react";
import "./style.css";
import Pic from "../../assets/images/Surprised-Deadpool.png";

export default function FanPageSection() {
    return (
        <div className="FanPageSection">
            <div className="row">
                <div className="col">
                    <h1>Be Surprised by the Magic of Movies on Our Fan Page</h1>
                    <p>Join our movie community and be transported into the world of your favorite films! Our page is filled with stunning visual effects and exclusive movie-based content that will leave you wanting more. Keep up with the latest movie news, participate in discussions with other fans, and get access to behind-the-scenes content and special promotions. Click the button below to visit our Fan Page now and start exploring.</p>
                    <button className="btn btn2">Explore More</button>
                </div>
                <div className="col">
                    <img src={Pic} alt="FanPageSectionPic" id="FanPageSectionPic"/>
                </div>
            </div>
        </div>
    );
}