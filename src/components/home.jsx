import React, { useState } from "react";
import PreviewBanner from "./previewBanner";
import { InputBase, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  CardMedia,
  Card,
  Typography,
  Box,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 400,
    marginLeft: 80,
    marginRight: 80,
    [theme.breakpoints.down("sm")]: {
      margin: 0
    }
  },
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginLeft: 0,
    width: "100%"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0,0,0,.5)",
    [theme.breakpoints.down("sm")]: {
      height: 200
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: 270
    }
  },
  inputInput: {
    padding: theme.spacing(1.5, 1.5, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%"
  },
  button: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0.2)}px)`,
    borderRadius: 20,
    width: 100
  },
  overlay: {
    position: "absolute",
    top: "120px",
    left: "140px",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      top: 60,
      left: 20,
      width: "100%"
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  const [searchTxt, setSearchTxt] = useState("");

  const onHandleChanges = e => {
    setSearchTxt(e.currentTarget.value);
  };
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          image={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg`}
          className={classes.media}
        />

        <div className={classes.overlay}>
          <Typography style={{ color: "#FFFFFF" }} component="div">
            <Box style={{ fontWeight: 800, fontSize: 50 }}>Welcome.</Box>
            <Box style={{ fontWeight: 600, fontSize: 30 }}>
              Millions of movies, TV shows and people to discover. Explore now.
            </Box>
          </Typography>
          <br></br>
          <Grid container spacing={1}>
            <Grid item md>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search for Movie / Tv Shows"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onChange={onHandleChanges}
                />
              </div>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => (window.location = `/search/${searchTxt}`)}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </Card>
      <PreviewBanner
        movieType="popular"
        movieHeader="What's Popular"
        tvShows="Y"
      />
      <PreviewBanner
        movieType="top_rated"
        movieHeader="What's Top Rated"
        tvShows="Y"
      />
      <PreviewBanner movieType="upcoming" movieHeader="What's Upcoming" />
      <PreviewBanner movieType="now_playing" movieHeader="What's Now Playing" />
    </React.Fragment>
  );
}
