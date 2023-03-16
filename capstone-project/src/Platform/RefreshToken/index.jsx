import axios from "axios";
import {API} from "../api";

export const refreshToken = (refreshToken) => {
    return axios.get(`${API}/token/refresh`, {
        headers: {'Authorization': `Bearer ${refreshToken}`}
    });
}