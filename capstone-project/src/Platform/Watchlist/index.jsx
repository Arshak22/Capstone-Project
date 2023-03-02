import React from "react";
import axios from "axios";
import {API} from "../api";
const watchlist = "/watchlist";

export const getProfileWatchlist = (pageNumber, pageSize, id, jwt) => {
    return axios.get(`${API}${watchlist}/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const addToWatchlist = (profileID, movieID, jwt) => {
    return axios.post(`${API}${watchlist}/${profileID}/${movieID}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const deleteFromWatchlist = (profileID, movieID, jwt) => {
    return axios.delete(`${API}${watchlist}/${profileID}/${movieID}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}