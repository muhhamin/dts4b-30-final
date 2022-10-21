import axios from "axios";

const API_KEY = "5ef149bd104a8c33c5648d5703a12c4b";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
