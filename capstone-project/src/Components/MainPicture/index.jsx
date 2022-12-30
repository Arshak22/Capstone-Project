import React from "react";
import "./style.css";

export default function MainPicture(props) {
    return (
        <div className="mainImage">
            {props.img ? <img src={props.img} alt="MainImage" style={{width: "100%", height: "100%"}}/>: null}
            <div className="centeredHeadline">{props.headline}</div>
        </div>
    );
}