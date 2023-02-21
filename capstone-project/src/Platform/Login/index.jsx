import React from "react";
import axios from "axios";
import {API} from "../api";

export const SignIn = (user) => {
    return axios.post(`${API}login`, user);
}