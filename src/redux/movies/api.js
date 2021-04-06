import axios from "axios";

export const getMovies = () => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=8ddb8b8ddfbac6a9b09604d847cba715"
  );
};
