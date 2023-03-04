import React from "react";
import axios from "axios";
import {API} from "../api";
const images = "/images";

export const getProfileImage = (id, jwt) => {
    return axios.get(`${API}${images}/${id}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const uploadProfileImage = (profileID, image, jwt) => {
    return axios.post(`${API}${images}/${profileID}`, image, {
        headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${jwt}`
        }
    });
}