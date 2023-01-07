import React from "react";
import "./style.css";

// Icon Logos
import ReactLogo from "../../assets/images/SkillsLogos/React-logo-Red.png";
import JSLogo from "../../assets/images/SkillsLogos/JS-logo-Red.png";
import JAVALogo from "../../assets/images/SkillsLogos/Java-logo-Red.png";
import DBLogo from "../../assets/images/SkillsLogos/DB-logo-Red.png";

export default function SkillsSection() {
    return (
        <div className="SkillsSection">
                <div className="col4">
                    <img src={ReactLogo} alt="ReactLogo" id="ReactLogo"/>
                </div>
                <div className="col4 bottom">
                    <img src={JSLogo} alt="JSLogo" id="JSLogo"/>
                </div>
                <div className="col4">
                    <img src={JAVALogo} alt="JAVALogo" id="JAVALogo"/>
                </div>
                <div className="col4 bottom">
                    <img src={DBLogo} alt="DBLogo" id="DBLogo"/>
                </div>
        </div>
    );
}