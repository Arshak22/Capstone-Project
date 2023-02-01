import React from "react";
import axios from "axios";
import {API} from "../api";
const favorites = "/favorites";

export const getProfileFavorites = (profileID) => {
    return axios.get(`${API}${favorites}/${profileID}`);
}

export const addFavorite = (profileID, movieID) => {
    return axios.post(`${API}${favorites}/${profileID}/${movieID}`);
}

export const deleteFavorite = (profileID, movieID, movie) => {
    return axios.delete(`${API}${favorites}/${profileID}/${movieID}`);
}