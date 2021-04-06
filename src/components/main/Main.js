import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../redux/movies/actions";
import { Movie } from "../movie";
import * as s from "./Main.styled";

export const Main = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.moviesList);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <s.MainContainer>
      {movieList.map((movie) => (
        <Movie backdrop_path={movie.backdrop_path} title={movie.title} />
      ))}
    </s.MainContainer>
  );
};
