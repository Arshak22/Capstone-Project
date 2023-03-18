import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

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
            <h1>Discover the Enchantment of Fantasy Movies</h1>
            <p>
                Step into the magical world of fantasy films. From the wizarding world of Harry Potter to the epic fantasy of Game of Thrones, to the monster-hunting adventure of The Witcher, we've got a selection of films that will transport you to new realms. Each film is represented by a unique card design featuring symbols that connect them - an owl for Harry Potter, a dragon for Game of Thrones, and a wolf for The Witcher. Discover the wonder and excitement of these beloved fantasy worlds and let your imagination run wild. Browse through our selection and find your next magical cinematic adventure.
            </p>
            <div className="magic">
                    <div className="magicCard">
                        <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + "671"} end>
                            <div className="wrapper">
                                <img src={HarryPotterCard} alt="HarryPotterCard" />
                            </div>
                            <img src={HarryPotter} alt="HarryPotter" className="magicCharachter"/>
                        </NavLink>
                    </div>
                <div className="magicCard">
                    <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + "1399"} end>
                        <div className="wrapper">
                            <img src={GOTCard} alt="GOTCard" />
                        </div>
                        <img src={Daenerys} alt="Daenerys" className="magicCharachter"/>
                    </NavLink>
                </div>
                <div className="magicCard">
                    <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + "71912"} end>
                        <div className="wrapper">
                            <img src={WitcherCard} alt="WitcherCard" />
                        </div>
                        <img src={Geralt} alt="Geralt" className="magicCharachterGeralt"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}