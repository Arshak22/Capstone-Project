import React from "react";
import "./style.css";

export default function MainPicture(props) {
    return (
        <div className="mainImage" style={{backgroundImage: `url(${props.img})`}}>
            {/* {props.img ? <img src={props.img} alt="MainImage" style={{width: "100%", height: "100%"}}/>: null} */}
            <div className="centeredHeadline"><h1>{props.headline}</h1></div>
        </div>
    );
}