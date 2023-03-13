import axios from "axios";
import {API} from "../api";

export const refreshToken = () => {
    return axios.get(`${API}/token/refresh`);
}