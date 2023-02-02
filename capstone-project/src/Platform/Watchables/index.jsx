import React from "react";
import axios from "axios";
import {API} from "../api";
const watchables = "/watchables";

// Watchable
export const getWatchables = () => {
    return axios.get(`${API}${watchables}`);
}

export const addWatchables = (movies) => {
    return axios.post(`${API}${watchables}`, movies);
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

export const getLatestWatchables = () => {
    return axios.get(`${API}${watchables}/latest`);
}

export const getPopularWatchables = () => {
    return axios.get(`${API}${watchables}/popular`);
}

export const getUpcomingWatchables = () => {
    return axios.get(`${API}${watchables}/upcoming`);
}