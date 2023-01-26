import React from "react";
import "./style.css";

//images
import HarryPotterCard from "../../assets/images/FanPagePictures/Harry-Potter-Card-Back.png";
import GOTCard from "../../assets/images/FanPagePictures/GOT-Card-Back.jpg";
import WitcherCard from "../../assets/images/FanPagePictures/Witcher-Card-Back.png";

import HarryPotter from "../../assets/images/FanPagePictures/Flying-Harry.png";
import Daenerys from "../../assets/images/FanPagePictures/Daenerys.png";
import Geralt from "../../assets/images/FanPagePictures/Geralt.png";

export default function MagicSection() {
    return (
        <div className="magicSection">
            <div className="magic">
                <div className="magicCard">
                    <div className="wrapper">
                        <img src={HarryPotterCard} alt="HarryPotterCard" />
                    </div>
                    <img src={HarryPotter} alt="HarryPotter" className="magicCharachter"/>
                </div>
                <div className="magicCard">
                    <div className="wrapper">
                        <img src={GOTCard} alt="GOTCard" />
                    </div>
                    <img src={Daenerys} alt="Daenerys" className="magicCharachter"/>
                </div>
                <div className="magicCard">
                    <div className="wrapper">
                        <img src={WitcherCard} alt="WitcherCard" />
                    </div>
                    <img src={Geralt} alt="Geralt" className="magicCharachter"/>
                </div>
            </div>
        </div>
    );
}