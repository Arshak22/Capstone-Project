import {React, useEffect} from "react";
import MainPic from "../../assets/images/BackgroundImages/MoviesMain.jpg";
import MainPicture from "../../Components/MainPicture";
import MoviePaginationList from "../../Components/MoviePaginationList";

// Testing Posters
import MovieTest1 from "../../assets/images/DefaultMoviePoster.jpg";
import MovieTest2 from "../../assets/images/Menu.jpg";
import MovieTest3 from "../../assets/images/BlackAdam.jpg";
import MovieTest4 from "../../assets/images/Avatar.jpg";
import MovieTest5 from "../../assets/images/LOU.jpg";

export default function Movies() {
    const movieList = [
        {
            id: 1,
            title: "Movie 1",
            duration: "1hr 50m",
            img: MovieTest1
        },
        {
            id: 2,
            title: "Movie 2",
            duration: "1hr 50m",
            img: MovieTest2
        },
        {
            id: 3,
            title: "Movie 3",
            duration: "1hr 50m",
            img: MovieTest3
        },
        {
            id: 4,
            title: "Movie 4",
            duration: "1hr 50m",
            img: MovieTest4
        },
        {
            id: 5,
            title: "Movie 5",
            duration: "1hr 50m",
            img: MovieTest5
        },
        {
            id: 6,
            title: "Movie 6",
            duration: "1hr 50m",
            img: MovieTest3
        },
        {
            id: 7,
            title: "Movie 7",
            duration: "1hr 50m",
            img: MovieTest2
        },
        {
            id: 8,
            title: "Movie 8",
            duration: "1hr 50m",
            img: MovieTest5
        },
        {
            id: 9,
            title: "Movie 9",
            duration: "1hr 50m",
            img: MovieTest1
        },
        {
            id: 10,
            title: "Movie 10",
            duration: "1hr 50m",
            img: MovieTest4
        },
        {
            id: 11,
            title: "Movie 11",
            duration: "1hr 50m",
            img: MovieTest5
        },
        {
            id: 12,
            title: "Movie 12",
            duration: "1hr 50m",
            img: MovieTest4
        },
        {
            id: 13,
            title: "Movie 13",
            duration: "1hr 50m",
            img: MovieTest3
        },
        {
            id: 14,
            title: "Movie 14",
            duration: "1hr 50m",
            img: MovieTest2
        },
        {
            id: 15,
            title: "Movie 15",
            duration: "1hr 50m",
            img: MovieTest1
        },
        {
            id: 16,
            title: "Movie 16",
            duration: "1hr 50m",
            img: MovieTest1
        },
        {
            id: 17,
            title: "Movie 17",
            duration: "1hr 50m",
            img: MovieTest4
        },
        {
            id: 18,
            title: "Movie 18",
            duration: "1hr 50m",
            img: MovieTest2
        },
        {
            id: 19,
            title: "Movie 19",
            duration: "1hr 50m",
            img: MovieTest3
        },
        {
            id: 20,
            title: "Movie 20",
            duration: "1hr 50m",
            img: MovieTest5
        }
    ];
    useEffect(() => {
        document.title = "Movie Mavericks: Movies";
    })
    return (
        <div className="main">
            <MainPicture img={MainPic} headline="Enter a world of endless entertainment"/>
            <MoviePaginationList movies={movieList}/>
        </div>
    );
}