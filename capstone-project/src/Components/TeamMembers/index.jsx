import React from "react";
import "./style.css";

export default function TeamMembers({team}) {
    return (
        <div className="Team">
            {team.map((elem, index) => {
                return (
                    <div className="teamMember" key={index}>
                        <img src={elem.img} alt="teamMember" className="MemberPic" />
                        <div className="member">
                            <h3>{elem.name}</h3>
                            <h4>{elem.profession}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}