import React from "react";
import axios from "axios";
import {API} from "../api";
const cast = "/cast";

export const getMovieCast = (id) => {
    return axios.get(`${API}${cast}/${id}`);
}

export const addMovieCast = (movieId, actorId) => {
    return axios.post(`${API}${cast}/${movieId}/${actorId}`);
}

export const deleteMovieCast = (movieId, actorId) => {
    return axios.delete(`${API}${cast}/${movieId}/${actorId}`);
}