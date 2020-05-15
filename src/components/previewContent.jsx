import React, { useEffect, useState } from "react";
import { getVideoId, getMovieContents } from "../services/moviesService";
import ReactPlayer from "react-player";
import { CardMedia, Card, Grid, makeStyles } from "@material-ui/core";
import { PreviewContentHeader } from "./previewContentHeader";
import CastCrew from "./castCrew";
import Recommendations from "./recommendations";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    opacity: 0.4,
    [theme.breakpoints.down("sm")]: {
      height: 400
    }
  },
  card: {
    height: 700,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 600
    }
  },
  overlay: {
    position: "absolute",
    top: "20px"
  },
  videoPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 80,
    marginLeft: 80,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20
    }
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%"
  }
}));

export default function PreviewContent(props) {
  const [videoUrl, setUrl] = useState("");
  const [contents, setContents] = useState({});
  const id = props.match.params.id;
  const type = props.match.params.type;
  const classes = useStyles();
  useEffect(() => {
    async function getVideoUrl() {
      const { results } = await getVideoId(type, id);
      if (results[0]) {
        setUrl(`https://www.youtube.com/watch?v=${results[0].key}`);
      }
    }
    async function getContents() {
      const data = await getMovieContents(id, type);
      setContents(data);
    }
    if (Object.keys(contents).length === 0) {
      getContents();
    }
    if (videoUrl.trim() === "") {
      getVideoUrl();
    }
  });
  return (
    <div>
      <Card className={classes.card}>
        {contents.backdrop_path && (
          <CardMedia
            image={`http://image.tmdb.org/t/p/w1280${contents.backdrop_path}`}
            className={classes.media}
          />
        )}
        <div className={classes.overlay}>
          <PreviewContentHeader contents={contents} type={type} />
        </div>
      </Card>

      {contents.id && (
        <Grid style={{ flex: 1 }}>
          <CastCrew id={contents.id} type={type} />
        </Grid>
      )}
      <div className={classes.playerWrapper}>
        {videoUrl && (
          <ReactPlayer
            url={videoUrl}
            className={classes.videoPlayer}
            width="90%"
            height="100%"
          />
        )}
      </div>
      <Recommendations id={contents.id} type={type} />
    </div>
  );
}
