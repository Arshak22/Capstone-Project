import axios from "axios";
import {API} from "../api";
const recommendation = "/recommend/content_based";

export const getContentBasedRecommendation = (pageNumber, pageSize, id) => {
    return axios.get(`${API}${recommendation}?pageNumber=${pageNumber}&pageSize=${pageSize}&watchableId=${id}`);
};