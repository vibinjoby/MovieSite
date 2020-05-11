import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import CardMovies from "./cardMovies";
import getMoviesFrmServer from "../services/moviesService";

export default function MoviePreviewBanner(props) {
  const [movies, setMovies] = useState([]);
  const movieType = props.movieType;
  useEffect(() => {
    async function getMovies() {
      const data = await getMoviesFrmServer(movieType);
      setMovies(data.results);
    }
    getMovies();
  });

  return (
    <React.Fragment>
      <Typography style={{ paddingLeft: 20 }}>{props.movieHeader}</Typography>
      <CardMovies movies={movies} />
    </React.Fragment>
  );
}
