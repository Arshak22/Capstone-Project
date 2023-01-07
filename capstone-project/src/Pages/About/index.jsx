import React from "react";
import MainPic from "../../assets/images/About.jpg";
import MainPicture from "../../Components/MainPicture";
import TeamMembers from "../../Components/TeamMembers";

import Member from "../../assets/images/TeamMember.png";
import MapAndAboutUs from "../../Components/MapAndAboutUs";
import Map from "../../Components/Map";
import SkillsSection from "../../Components/SkillsSection";
export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: "Arshak Kosakyan",
            img: Member,
            profession: "Front-End Developer",
            FB: "https://www.facebook.com/",
            IG: "https://www.instagram.com/",
            TG: "https://t.me/"
        },
        {
            id: 2,
            name: "Emin Ter-Mkrtchyan",
            img: Member,
            profession: "Back-End Developer",
            FB: "https://www.facebook.com/",
            IG: "https://www.instagram.com/",
            TG: "https://t.me/"
        },
        {
            id: 3,
            name: "Arman Harutyunyan",
            img: Member,
            profession: "Data Specialist",
            FB: "https://www.facebook.com/",
            IG: "https://www.instagram.com/",
            TG: "https://t.me/"
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