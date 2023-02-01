import React from "react";
import axios from "axios";
import {API} from "../api";
const profiles = "/profiles";

export const getAllProfiles = () => {
    return axios.get(`${API}${profiles}`);
}

export const getProfile = (id) => {
    return axios.get(`${API}${profiles}/${id}`);
}

export const addProfile = (profile) => {
    return axios.post(`${API}${profiles}`, profile);
}

export const updateProfile = (id, profile) => {
    return axios.put(`${API}${profiles}/${id}`, profile);
}

export const deleteProfile = (id) => {
    return axios.delete(`${API}${profiles}/${id}`);
}