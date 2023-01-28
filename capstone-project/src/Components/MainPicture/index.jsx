import React from "react";
import "./style.css";

export default function MainPicture(props) {
    return (
        <div className="mainImage" style={{backgroundImage: `url(${props.img})`}}>
            <div className="centeredHeadline"><h1>{props.headline}</h1></div>
        </div>
    );
}