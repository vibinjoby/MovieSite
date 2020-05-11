import React from "react";
import { Card, Grid, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexFlow: "row",
    paddingLeft: 20,
    overflow: "auto"
  },
  item: {}
});
export default function CardMovies(props) {
  const classes = useStyles();
  const { movies } = props;
  return (
    <Grid container spacing={3} className={classes.root}>
      {movies
        ? movies.map(movie => (
            <Grid item key={movie.id} className={classes.item}>
              <Card>
                <CardMedia>
                  <img
                    src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  ></img>
                </CardMedia>
                <CardContent>{movie.title}</CardContent>
              </Card>
            </Grid>
          ))
        : ""}
    </Grid>
  );
}
