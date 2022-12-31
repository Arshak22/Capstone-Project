import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function SliderHeader(props) {
    return (
        <div className="sliderHeader">
            <h2>{props.header}</h2>
            <h4><NavLink to={props.link} end>View All</NavLink></h4>
        </div>
    )
}