import axios from "axios";
import {API} from "../api";
const genres = "/genres";

export const getFavoriteGenres = (profileID, jwt) => {
    return axios.get(`${API}${genres}/${profileID}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const addFavoriteGenre = (profileID, favoriteGenres, jwt) => {
    return axios.post(`${API}${genres}/${profileID}`, favoriteGenres, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}

export const deleteFavoriteGenre = (profileID, favoriteGenre, jwt) => {
    return axios.delete(`${API}${genres}/${profileID}?genre=${favoriteGenre}`, {
        headers: {'Authorization': `Bearer ${jwt}`}
    });
}