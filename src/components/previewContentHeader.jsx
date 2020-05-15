import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

export function PreviewContentHeader(props) {
  const { contents, type } = props;
  const releaseDate =
    type === "movie"
      ? contents.release_date
        ? contents.release_date.split("-")[0]
        : ""
      : contents.first_air_date
      ? contents.first_air_date.split("-")[0]
      : "";
  let genres = [];
  if (contents.genres) {
    contents.genres.forEach((element, index, array) => {
      genres.push(element.name);
    });
  }
  return (
    <div style={{ marginLeft: 80, marginRight: 50, marginTop: 80 }}>
      <Grid container spacing={3} direction="row" style={{ paddingTop: 20 }}>
        {contents.poster_path && (
          <Grid item>
            <img
              src={`http://image.tmdb.org/t/p/w300${contents.poster_path}`}
              alt="data poster"
            ></img>
          </Grid>
        )}
        <Grid item xs style={{ paddingTop: 50, paddingRight: 200 }}>
          <Typography variant="h4">
            {type === "movie" ? contents.title : contents.original_name}(
            {releaseDate})
          </Typography>
          <Typography variant="h5">
            {genres.join()} {contents.runtime}m
          </Typography>
          <Typography variant="h6">
            <Box fontStyle="oblique"> {contents.tagline}</Box>
          </Typography>
          <Typography variant="h4">Overview</Typography>
          <Typography variant="h6">{contents.overview}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
