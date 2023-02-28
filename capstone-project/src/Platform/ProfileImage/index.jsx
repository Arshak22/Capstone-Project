import React from "react";
import axios from "axios";
import {API} from "../api";
const images = "/images";

export const getProfileImage = (id) => {
    return axios.get(`${API}${images}/${id}`);
}

export const updateProfileImage = (id, image) => {
    return axios.put(`${API}${images}/${id}`, image);
}

export const uploadProfileImage = (profilID, image) => {
    return axios.post(`${API}${images}/${profilID}`, image);
}