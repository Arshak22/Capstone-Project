import {React, useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getWatchable } from "../../Platform/Watchables";
import { useGlobalContext } from "../../Context/Context";

import MovieInfoSection from "../../Components/MovieInfoSection";
import TopCast from "../../Components/TopCast";
import MovieBackdropSlider from "../../Components/MovieBackdropSlider";
import MovieTrailerSection from "../../Components/MovieTrailerSection";

export default function DefaultMoviePage() {
    const {id} = useParams();
    const {setIsLoading} = useGlobalContext();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState();
    const {castPopUpOpen} = useGlobalContext();
    useEffect(() => {
        getMovie(id);
    }, [])

    useEffect(() => {
        if(movieData) {
            document.title = `Movie Mavericks: ${movieData.name}`;
        }
    }, [movieData])

    const getMovie = async (movieID) => {
        try {
            const response = await getWatchable(movieID);
            setMovieData(response.data);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        } catch (e) {
            console.log(e);
            navigate('/error-page', { replace: true });
        }
    }

    return (
        <div className={`main ${castPopUpOpen ? 'popup-open' : ''}`}>
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