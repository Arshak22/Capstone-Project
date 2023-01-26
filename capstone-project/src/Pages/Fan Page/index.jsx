import {React, useEffect} from "react";
import FanPageMainPicture from "../../Components/FanPageMainPicture";
import MagicSection from "../../Components/MagicSection";

export default function FanPage() {
    useEffect(() => {
        document.title = "Movie Mavericks: Fan Page";
    })
    return (
        <div className="main">
            <FanPageMainPicture/>
            <MagicSection/>
        </div>
    );
}