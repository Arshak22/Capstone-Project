import axios from "axios";
import {API} from "../api";
const rates = "/rates";

export const addRating = (rating, jwt) => {
    return axios.post(`${API}${rates}`, rating, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
};