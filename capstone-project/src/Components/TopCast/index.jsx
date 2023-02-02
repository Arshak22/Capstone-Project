import React from "react";
import './style.css';

export default function TopCast({movie}) {
    return (
        <div className="cast">
            <h1>Top Cast</h1>
            <div className="topCast">
                {movie.cast.map((elem, index) => {
                    return (
                        <div className="castMember" key={index} >
                            <div className="castMemberInfo">
                                <h4>{elem.firstName} {elem.lastName}</h4>
                                <h6>{elem.birthDate}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}