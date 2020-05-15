import React from "react";
import { Grid, Typography, Box, makeStyles, Card } from "@material-ui/core";
import DefaultImg from "./defaultImg";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    width: "90%",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 50,
      flexflow: "column",
      width: "300%"
    }
  },
  indivContainer: {
    flexFlow: "row"
  },
  cardContainer: {
    position: "relative",
    padding: "10px",
    marginTop: 30,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: 400
    }
  },
  releaseDate: {
    fontSize: "12px",
    color: "#696969",
    fontWeight: 800
  },
  overview: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px"
    }
  },
  title: {
    fontSize: "16px",
    fontWeight: 800
  }
}));

export default function SearchResult(props) {
  const classes = useStyles();
  let { contents, filteredData } = props;
  if (filteredData) {
    contents = [...filteredData];
  }
  if (contents.length === 0 && filteredData.length === 0)
    return <p>There are no movies that matched your query.</p>;
  return (
    <div>
      {contents.map(content => (
        <Grid container spacing={5} className={classes.container}>
          <Card
            key={content.id}
            elevation={5}
            className={classes.cardContainer}
            onClick={() =>
              (window.location = `/content/${content.media_type}/${content.id}`)
            }
          >
            <Grid item md>
              <Grid container spacing={2} className={classes.indivContainer}>
                <Grid item>
                  {content.poster_path && (
                    <img
                      src={`http://image.tmdb.org/t/p/w92${content.poster_path}`}
                      alt="data poster"
                    ></img>
                  )}
                  {!content.poster_path && (
                    <DefaultImg
                      media_type={content.media_type}
                      id={content.id}
                    />
                  )}
                </Grid>

                <Grid item md>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <Box className={classes.title}>
                        {content.media_type === "movie"
                          ? content.title
                          : content.name}
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box className={classes.releaseDate}>
                        {content.media_type === "movie"
                          ? new Date(content.release_date).toDateString()
                          : new Date(content.first_air_date).toDateString()}
                      </Box>
                    </Grid>
                    <Grid item>
                      <Typography component="div">
                        <Box className={classes.overview}>
                          {content.overview
                            ? content.overview.substring(0, 500)
                            : "No Overview"}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </div>
  );
}
