import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function SliderHeader(props) {
    return (
        <div className="sliderHeader">
            <h2>{props.header}</h2>
            <h4 className="view"><NavLink to={props.link} end>{props.btnName}</NavLink></h4>
        </div>
    )
}