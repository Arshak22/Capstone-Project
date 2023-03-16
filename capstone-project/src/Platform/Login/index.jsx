import axios from "axios";
import {API} from "../api";

const options = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
};  

export const SignInUser = (user) => {
    return axios.post(`${API}/login`, user, options);
}