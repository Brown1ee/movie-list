import { GET_MOVIES_LIST } from "./actionTypes";
const initialState = {
  movieList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return { ...state, movieList: action.movies };
    default:
      return state;
  }
};

export default reducer;
