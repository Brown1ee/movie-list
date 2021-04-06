import React from "react";
import * as s from "./Movie.styled";

export const Movie = (props) => {
  return (
    <s.MovieContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}
        alt={props.title}
      />
    </s.MovieContainer>
  );
};
