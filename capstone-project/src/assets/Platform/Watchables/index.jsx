import React from "react";
import axios from "axios";
import {API} from "../api";
const watchables = "/watchables";

// Watchable
export const getWatchables = () => {
    return axios.get(`${API}${watchables}`);
}

export const postWatchable = (movie) => {
    return axios.post(`${API}${watchables}`, movie);
}

export const getWatchable = (id) => {
    return axios.get(`${API}${watchables}/${id}`);
}

export const updateWatchable = (id, movie) => {
    return axios.put(`${API}${watchables}/${id}`, movie);
}

export const deleteWatchable = (id) => {
    return axios.delete(`${API}${watchables}/${id}`);
}