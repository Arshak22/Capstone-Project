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

export const getProfileMovieComments = (profileID, pageNumber, pageSize) => {
    return axios.get(`${API}${comments}/profile-${profileID}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getAllMovieComments = (movieID, pageNumber, pageSize) => {
    return axios.get(`${API}${comments}/watchable-${movieID}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
}

export const getComment = (id) => {
    return axios.get(`${API}${comments}/comment-${id}`);
}