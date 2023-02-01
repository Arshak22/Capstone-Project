import React from "react";
import axios from "axios";
import {API} from "../api";
const actors = "/actors";

export const getActors = () => {
    return axios.get(`${API}${actors}`);
}

export const addActors = (actor) => {
    return axios.post(`${API}${actors}`, actor);
}

export const getActor = (id) => {
    return axios.get(`${API}${actors}/${id}`);
}

export const updateActor = (id, actor) => {
    return axios.put(`${API}${actors}/${id}`, actor);
}

export const deleteActor = (id) => {
    return axios.delete(`${API}${actors}/${id}`);
}