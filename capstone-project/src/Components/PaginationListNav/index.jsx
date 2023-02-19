import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";

export default function PaginationListNav(props) {
    const navigate = useNavigate();

    const navigateLatestMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-latest");
        }, 300)
    }

    const navigatePopularMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-popular");
        }, 300)
    }

    const navigatePopularSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-popular");
        }, 300)
    }

    const navigateLatestSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-latest");
        }, 300)
    }

    const navigateUpcomingSeries = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/tv-shows/series-upcoming");
        }, 300)
    }

    const navigateUpcomingMovie = () => {
        navigate("/");
        setTimeout(() => {
            navigate("/movies/film-upcoming");
        }, 300)
    }

    return (
        <div className="paginationListNav">
            {props.type === "movie" ?
            <>
                <h2 onClick={navigateLatestMovie}>Latest</h2>
                <h2 onClick={navigatePopularMovie}>Popular</h2>
                <h2 onClick={navigateUpcomingMovie}>Upcoming</h2>
            </>
            :
            <>
                <h2 onClick={navigateLatestSeries}>Latest</h2>
                <h2 onClick={navigatePopularSeries}>Popular</h2>
                <h2 onClick={navigateUpcomingSeries}>Upcoming</h2>
            </>
            }
        </div>
    );
}