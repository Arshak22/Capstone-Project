import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/Context";
import MainPic from "../../assets/images/BackgroundImages/About.jpg";
import MainPicture from "../../Components/MainPicture";
import TeamMembers from "../../Components/TeamMembers";
import Arshak from "../../assets/images/TeamMembers/Arshak.png";
import Member from "../../assets/images/TeamMember.png";
import MapAndAboutUs from "../../Components/MapAndAboutUs";
import Map from "../../Components/Map";
import SkillsSection from "../../Components/SkillsSection";

export default function About() {
    const {setIsLoading} = useGlobalContext();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        document.title = "Movie Mavericks: About Us";
    });

    const teamMembers = [
        {
            id: 1,
            name: "Arshak Kosakyan",
            img: Arshak,
            profession: "Front-End Developer",
            FB: "https://www.facebook.com/arshak.qosakyan",
            LinkedIn: "https://www.linkedin.com/in/arshak-kosakyan-10a6a3268/",
            TG: "https://t.me/ArshakKosakyan"
        },
        {
            id: 2,
            name: "Emin Ter-Mkrtchyan",
            img: Member,
            profession: "Back-End Developer",
            FB: "https://www.facebook.com/emin.termkrtchyan",
            LinkedIn: "https://www.linkedin.com/in/emin-ter-mkrtchian-778b6722b/",
            TG: "https://t.me/japanBratz"
        },
        {
            id: 3,
            name: "Arman Harutyunyan",
            img: Member,
            profession: "Data Specialist",
            FB: "https://www.facebook.com/profile.php?id=100008017995400",
            LinkedIn: "https://www.linkedin.com/in/arman-harutyunyan30303/",
            TG: "https://t.me/harutyunyan_0001"
        }
    ];

    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Find out more about us"/>
            <TeamMembers team={teamMembers}/>
            <SkillsSection/>
            <MapAndAboutUs/>
            <Map/>
        </div>
    );
}