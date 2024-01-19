import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "90fb581c16b62d203d0356e91f91d54f";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=90fb581c16b62d203d0356e91f91d54f";

//https://api.themoviedb.org/3/trending/all/day?api_key=90fb581c16b62d203d0356e91f91d54f
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
