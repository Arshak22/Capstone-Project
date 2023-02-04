import {React, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { getWatchable } from "../../Platform/Watchables";
import { getActors } from "../../Platform/Actors";

import MovieInfoSection from "../../Components/MovieInfoSection";
import TopCast from "../../Components/TopCast";
import MovieBackdropSlider from "../../Components/MovieBackdropSlider";
import MovieTrailerSection from "../../Components/MovieTrailerSection";

export function DefaultMoviePage() {
    const {id} = useParams();
    const [movieData, setMovieData] = useState();
    const [allActors, setAllActors] = useState();
    useEffect(() => {
        getMovie(id);
        getAllActors();
    }, [id])

    useEffect(() => {
        if(movieData) {
            document.title = `Movie Mavericks: ${movieData.name}`;
        }
    }, [movieData])

    const getMovie = async (movieID) => {
        try {
            const response = await getWatchable(movieID);
            setMovieData(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const getAllActors = async () => {
        try {
            const response = await getActors();
            setAllActors(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="main">
            {movieData ? 
                <>
                    <MovieInfoSection movie={movieData}/>
                    {allActors ? <TopCast movie={allActors}/>: null}
                    <MovieBackdropSlider movie={movieData}/>
                    <MovieTrailerSection movie={movieData}/>
                </>
            : null}
        </div>
    )
}