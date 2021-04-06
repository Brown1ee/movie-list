import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesList from "./movies/reducers";

const store = applyMiddleware(thunk)(createStore)(
  combineReducers({
    moviesList,
  })
);

export default store;
