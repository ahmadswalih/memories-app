import axios from "axios";

const url = process.env.REACT_APP_URL;

export const fetchPosts = () => axios.get(url);
