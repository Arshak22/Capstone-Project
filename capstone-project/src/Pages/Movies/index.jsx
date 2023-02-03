import {React, useEffect, useState} from "react";
import MainPic from "../../assets/images/BackgroundImages/MoviesMain.jpg";
import MainPicture from "../../Components/MainPicture";
import MoviePaginationList from "../../Components/MoviePaginationList";
import { getWatchables } from "../../Platform/Watchables";

export default function Movies() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        document.title = "Movie Mavericks: Movies";
        getMovieList();
    }, [])

    const getMovieList = async () => {
        try {
            const result = await getWatchables();
            setMovieList(result.data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Enter a world of endless entertainment"/>
            <MoviePaginationList movies={movieList}/>
        </div>
    );
}