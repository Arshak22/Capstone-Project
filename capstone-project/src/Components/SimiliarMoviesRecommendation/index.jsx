import React, { useState, useEffect } from "react";
import './style.css';
import { getContentBasedRecommendation } from "../../Platform/ContentBasedRecommendation";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

import DefaultPoster from "../../assets/images/BackgroundImages/DefaultPoster.jpg";

export default function SimiliarMoviesRecommendation(id) {
    const [similiarMovies, setSimiliarMovies] = useState([]);
    useEffect(() => {
        getSimiliarMovies();
    }, []);

    const getSimiliarMovies = async() => {
        try {
            
            const response = await getContentBasedRecommendation(0, 5, id.id);
            console.log(response);
            setSimiliarMovies(response.data.content);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {similiarMovies.length === 0 ? <div></div>:
            <div className="similiarMovies">
                <h1>Similiar Films</h1>
                <div className="similiarMoviesList">
                    {similiarMovies.map((elem, index) => {
                        const moviePoster = elem.posterPath ?  `url(https://www.themoviedb.org/t/p/original/${elem.posterPath})`: `url(${DefaultPoster})`;
                        const date = new Date(elem.releaseDate);
                        const dateString = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
                        const shortName = elem.name.length > 35 ? elem.name.slice(0, elem.name.lastIndexOf(" ", 35)) + "..." : elem.name;
                        return (
                            <>
                                <NavLink to={ROUTE_NAMES.DEFAULT_PAGE + elem.id} end>
                                <div className="similiarMovie" key={index} style={{backgroundImage: moviePoster}}>
                                    <div className="similiarMovieInfo">
                                        <h4>{shortName}</h4>
                                        <h6>{dateString}</h6>
                                    </div>
                                </div>
                                </NavLink>
                            </>
                        );
                    })}
                </div>
            </div>}
        </>
    );
}