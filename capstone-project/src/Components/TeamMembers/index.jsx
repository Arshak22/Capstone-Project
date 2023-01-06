import React from "react";
import "./style.css";

import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

export default function TeamMembers({team}) {
    return (
        <>
            <h1 className="TeamHeader">Meet The <span class="ChangingTeamName"></span></h1>
            <div className="Team">
            {team.map((elem, index) => {
                return (
                    <div className="teamMember" key={index}>
                        <img src={elem.img} alt="teamMember" className="MemberPic" />
                        <div className="member">
                            <h3>{elem.name}</h3>
                            <h4>{elem.profession}</h4>
                            <div className="memberSocial">
                                {elem.FB ? <a href={elem.FB} target="_blank" rel="noreferrer"><FaFacebookF className="memberSocialIcon"/></a> : null}
                                {elem.IG ? <a href={elem.IG} target="_blank" rel="noreferrer"><RiInstagramFill className="memberSocialIcon secondIcon"/></a> : null}
                                {elem.TG ? <a href={elem.TG} target="_blank" rel="noreferrer"><FaTelegramPlane className="memberSocialIcon"/></a> : null}
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}