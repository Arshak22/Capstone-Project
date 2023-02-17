import React from "react";
import axios from "axios";
import {API} from "../api";
const watchables = "/watchables";
const filteredWatchables = "/filter";

export const getWatchables = (pageNumber, pageSize) => {
    return axios.get(`${API}${watchables}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
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

export const getLatestWatchables = (pageNumber, pageSize) => {
    return axios.get(`${API}${filteredWatchables}/latest?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getPopularWatchables = (pageNumber, pageSize) => {
    return axios.get(`${API}${filteredWatchables}/popular?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getUpcomingWatchables = (pageNumber, pageSize) => {
    return axios.get(`${API}${filteredWatchables}/upcoming?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getAllMovies = (pageNumber, pageSize) => {
    return axios.get(`${API}${filteredWatchables}/movies?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getAllSeries = (pageNumber, pageSize) => {
    return axios.get(`${API}${filteredWatchables}/series?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}