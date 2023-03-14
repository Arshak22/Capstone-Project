import axios from "axios";
import {API} from "../api";
const images = "/images";

export const getProfileImage = (id) => {
    return axios.get(`${API}${images}/${id}`);
}

export const uploadProfileImage = (profileID, image, jwt) => {
    return axios.post(`${API}${images}/${profileID}`, image, {
        headers: { 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${jwt}`
        }
    });
}