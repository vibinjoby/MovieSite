import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import { getCredits } from "../services/moviesService";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    flexFlow: "row",
    overflow: "auto",
    marginTop: 20,
    marginBottom: 30
  }
});

export default function CastCrew(props) {
  const { id, type } = props;
  const classes = styles();

  const [credits, setCredits] = useState([]);
  useEffect(() => {
    async function getCreditsData() {
      const data = await getCredits(id, type);
      setCredits(data.cast);
    }
    getCreditsData();
  });
  return (
    <div style={{ marginLeft: 80, marginRight: 50 }}>
      <Typography variant="h5" style={{ marginTop: 20 }}>
        <Box fontWeight="fontWeightMedium">Cast and Crew</Box>
      </Typography>
      <Grid container spacing={3} className={classes.root}>
        {credits.length > 0
          ? credits.map(cast => (
              <Grid item key={cast.id}>
                <Card style={{ height: "100%" }}>
                  {!cast.profile_path && (
                    <CardMedia style={{ height: 280, width: 200 }}>
                      <img
                        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        alt="data poster"
                      ></img>
                    </CardMedia>
                  )}
                  {cast.profile_path && (
                    <CardMedia>
                      <img
                        src={`http://image.tmdb.org/t/p/w185${cast.profile_path}`}
                        alt="data poster"
                      ></img>
                    </CardMedia>
                  )}
                  <CardContent>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold">{cast.name}</Box>
                      <Box>{cast.character}</Box>
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
