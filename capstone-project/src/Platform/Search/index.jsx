import axios from "axios";
import {API} from "../api";
const search = "/search";

export const searchWatchable = (pageNumber, pageSize, query) => {
    return axios.get(`${API}${search}?pageNumber=${pageNumber}&pageSize=${pageSize}&query=${query}&sort=rating`);
}

export const userSearchWatchable = (email, pageNumber, pageSize, query) => {
    return axios.get(`${API}${search}/userSearch?email=${email}&pageNumber=${pageNumber}&pageSize=${pageSize}&query=${query}&sort=rating`);
}

export const searchWatchableByGenre = (pageNumber, pageSize, genre) => {
    return axios.get(`${API}${search}/genre?genre=${genre}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=rating`);
}

export const searchMovieByGenre = (pageNumber, pageSize, genre) => {
    return axios.get(`${API}${search}/movie/genre?genre=${genre}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=rating`);
}

export const searchSeriesByGenre = (pageNumber, pageSize, genre) => {
    return axios.get(`${API}${search}/series/genre?genre=${genre}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=rating`);
}

export const searchWatchableByReleaseYear = (pageNumber, pageSize, year) => {
    return axios.get(`${API}${search}/releaseYear?pageNumber=${pageNumber}&pageSize=${pageSize}&releaseYear=${year}&sort=releaseDate`);
}

export const searchMovieByReleaseYear = (pageNumber, pageSize, year) => {
    return axios.get(`${API}${search}/movie/releaseYear?pageNumber=${pageNumber}&pageSize=${pageSize}&releaseYear=${year}&sort=releaseDate`);
}

export const searchSeriesByReleaseYear = (pageNumber, pageSize, year) => {
    return axios.get(`${API}${search}/series/releaseYear?pageNumber=${pageNumber}&pageSize=${pageSize}&releaseYear=${year}&sort=releaseDate`);
}