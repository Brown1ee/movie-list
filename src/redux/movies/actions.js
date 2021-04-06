import { GET_MOVIES_LIST } from "./actionTypes";
import { getMovies } from "./api";

const receiveMovies = (movies) => ({
  type: GET_MOVIES_LIST,
  movies,
});

export const getAllMovies = () => (dispatch) => {
  getMovies().then((movies) => {
    dispatch(receiveMovies(movies.data.results));
  });
};
