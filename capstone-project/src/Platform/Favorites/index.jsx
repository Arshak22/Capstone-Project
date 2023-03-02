import React from "react";
import axios from "axios";
import {API} from "../api";
const favorites = "/favorites";

export const getProfileFavorites = (pageNumber, pageSize, profileID, jwt) => {
    return axios.get(`${API}${favorites}/${profileID}?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const addToFavorite = (profileID, movieID, jwt) => {
    return axios.post(`${API}${favorites}/${profileID}/${movieID}`, {}, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const deleteFavorite = (profileID, movieID, jwt) => {
    return axios.delete(`${API}${favorites}/${profileID}/${movieID}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}