import React from "react";
import MainPic from "../../assets/images/HomeMain.jpg";
import MainPicture from "../../Components/MainPicture";
import SliderHeader from "../../Components/SliderHeader";
import HorizontalSlider from "../../Components/HorizontalSlider";

export default function Home() {
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Welcome to the world of cinema"/>
            <SliderHeader header="Latest Movies" link="/movies" btnName="View All"/>
            <HorizontalSlider/>
        </div>
    );
}