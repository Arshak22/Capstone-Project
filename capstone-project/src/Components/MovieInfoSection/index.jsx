import React from "react";
import "./style.css";

export default function MovieInfoSection({movie}) {
    return (
        <div className="movieInfoSection" style={{backgroundImage: `url(${movie.backdrop})`}}>
            <div className="infoCol1">
                <div>
                    <img src={movie.poster} alt="moviePoster" />
                </div>
            </div>
            <div className="infoCol2">
                <div className="titleGenre">
                    <h1>{movie.title}</h1>
                    <h3>{movie.releaseDate}  Action, Adventure, Comedy  {movie.duration}</h3>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}