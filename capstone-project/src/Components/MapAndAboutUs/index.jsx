import React from "react";
import "./style.css";

import Map from "../../assets/images/YerevanAUAMap.png";

export default function MapAndAboutUs() {
    return (
        <div className="MapAndAboutUs">
            <div className="row3">
                <div className="col3">
                    <img src={Map} alt="AUAMap" />
                </div>
                <div className="col3">

                </div>
            </div>
        </div>
    );
}