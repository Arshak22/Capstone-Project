import {React, useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getWatchable } from "../../Platform/Watchables";

import MovieInfoSection from "../../Components/MovieInfoSection";
import TopCast from "../../Components/TopCast";
import MovieBackdropSlider from "../../Components/MovieBackdropSlider";
import MovieTrailerSection from "../../Components/MovieTrailerSection";

export default function DefaultMoviePage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState();
    useEffect(() => {
        getMovie(id);
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
            navigate('/error-page', { replace: true });
        }
    }

    return (
        <div className="main">
            {movieData ? 
                <>
                    <MovieInfoSection movie={movieData}/>
                    <TopCast movie={movieData.id}/>
                    <MovieBackdropSlider movie={movieData}/>
                    <MovieTrailerSection movie={movieData}/>
                </>
            : null}
        </div>
    )
}