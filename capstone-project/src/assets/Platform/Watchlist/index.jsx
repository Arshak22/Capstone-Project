import React from "react";
import axios from "axios";
import {API} from "../api";
const watchlist = "/watchlist";

export const getProfileWatchlist = (id) => {
    return axios.get(`${API}${watchlist}/${id}`);
}

export const addToWatchlist = (profileID, movieID, movie) => {
    return axios.post(`${API}${watchlist}/${profileID}/${movieID}`, movie);
}

export const deleteFromWatchlist = (profileID, movieID) => {
    return axios.delete(`${API}${watchlist}/${profileID}/${movieID}`);
}