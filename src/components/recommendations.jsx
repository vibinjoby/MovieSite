import React, { useEffect, useState } from "react";
import { getRecommendations } from "../services/moviesService";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  makeStyles
} from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    flexFlow: "row",
    overflow: "auto",
    marginTop: 20,
    marginBottom: 30
  },
  header: {
    marginLeft: 80,
    marginRight: 50,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
      marginRight: 0
    }
  }
}));

export default function Recommendations(props) {
  const { id, type } = props;
  const classes = styles();
  const [recommendedMvies, setMovies] = useState([]);
  useEffect(() => {
    async function getRecommendedMovies() {
      const { results } = await getRecommendations(id, type);
      setMovies(results);
    }
    if (recommendedMvies.length === 0 && id) getRecommendedMovies();
  });
  return (
    <div className={classes.header}>
      <Typography variant="h5" style={{ marginTop: 20 }}>
        <Box fontWeight="fontWeightMedium">Recommendations</Box>
      </Typography>
      <Grid container spacing={3} className={classes.root}>
        {recommendedMvies.length > 0
          ? recommendedMvies.map(movies => (
              <Grid item key={movies.id}>
                <Card style={{ height: "100%" }}>
                  {!movies.poster_path && (
                    <CardMedia style={{ height: 280, width: 200 }}>
                      <img
                        style={{ cursor: "pointer" }}
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        alt="data poster"
                        onClick={() =>
                          (window.location = `/content/${type}/${movies.id}`)
                        }
                      ></img>
                    </CardMedia>
                  )}
                  {movies.poster_path && (
                    <CardMedia>
                      <img
                        style={{ cursor: "pointer" }}
                        src={`http://image.tmdb.org/t/p/w185${movies.poster_path}`}
                        alt="data poster"
                        onClick={() =>
                          (window.location = `/content/${type}/${movies.id}`)
                        }
                      ></img>
                    </CardMedia>
                  )}
                  <CardContent>
                    <Typography component="div">
                      <Box>
                        {type === "movie"
                          ? movies.original_title
                          : movies.original_name}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : ""}
      </Grid>
    </div>
  );
}
