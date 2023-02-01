import React from "react";
import axios from "axios";
import {API} from "../api";
const comments = "/comments";

export const addComment = (comment) => {
    return axios.post(`${API}${comments}`, comment);
}

export const updateComment = (id, comment) => {
    return axios.put(`${API}${comments}/${id}`, comment);
}

export const deleteComment = (id) => {
    return axios.delete(`${API}${comments}/${id}`);
}

export const getProfileMovieComments = (profileID, movieID) => {
    return axios.get(`${API}${comments}/${profileID}/${movieID}`);
}

export const getAlllMovieComments = (movieID) => {
    return axios.get(`${API}${comments}/${movieID}`);
}

export const getComment = (id) => {
    return axios.get(`${API}${comments}/comment-${id}`);
}