import {React, useEffect} from "react";
import "./style.css"
import { useGlobalContext } from "../../Context/Context";

import FanPageMainPicture from "../../Components/FanPageMainPicture";
import MagicSection from "../../Components/MagicSection";
import GangsterSection from "../../Components/GangsterSection";
import HeroVillianSection from "../../Components/HeroVillianSection";
import SciFiSection from "../../Components/SciFiSection";

//icons
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function FanPage() {
    const {setIsLoading} = useGlobalContext();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
        document.title = "Movie Mavericks: Fan Page";
    })
    return (
        <div className="main">
            <FanPageMainPicture/>
            <div className="IntroFanPage">
                <h1><RiDoubleQuotesL className="quotes"/> Cinematic Gems Recommended by Movie Mavericks <RiDoubleQuotesR className="quotes"/></h1>
                <p>Welcome to Movie Mavericks' Recommendations! Here, we showcase our team's all-time favorite genres. Whether you're in the mood for an epic fantasy adventure, a gritty crime drama, a thrilling science fiction epic, or a superhero blockbuster, we've got something for you. Our carefully curated selection will take you on a journey through the magical world, the retro era, the future and the action-packed universe. Discover new films and rediscover old favorites, all recommended by the Movie Mavericks team. Browse through our selection and find your next cinematic adventure.</p>
            </div>
            <MagicSection/>
            <GangsterSection/>
            <HeroVillianSection/>
            <SciFiSection/>
        </div>
    );
}