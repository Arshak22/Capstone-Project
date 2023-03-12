import React from "react";
import axios from "axios";
import {API} from "../api";
const comments = "/comments";

export const addComment = (comment, jwt) => {
    return axios.post(`${API}${comments}`, comment, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const updateComment = (id, comment, jwt) => {
    return axios.put(`${API}${comments}/${id}`, comment, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const deleteComment = (id, jwt) => {
    return axios.delete(`${API}${comments}/${id}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
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