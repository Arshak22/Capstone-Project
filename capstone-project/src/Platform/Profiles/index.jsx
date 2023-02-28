import React from "react";
import axios from "axios";
import {API} from "../api";
const profiles = "/profiles";

const options = {
    headers: {'Content-Type': 'application/json'}
}; 

export const getAllProfiles = (jwt) => {
    return axios.get(`${API}${profiles}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const getProfile = (id, jwt) => {
    return axios.get(`${API}${profiles}/${id}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const getProfileByEmail = (email, jwt) => {
    return axios.get(`${API}${profiles}/profile?email=${email}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    })
}

export const addProfile = (profile) => {
    return axios.post(`${API}${profiles}`, profile, options);
}

export const updateProfile = (id, profile, jwt) => {
    return axios.put(`${API}${profiles}/${id}`, profile, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const deleteProfile = (id, jwt) => {
    return axios.delete(`${API}${profiles}/${id}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}