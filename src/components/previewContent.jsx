import React, { useEffect, useState } from "react";
import { getVideoId, getMovieContents } from "../services/moviesService";
import ReactPlayer from "react-player";
import { CardMedia, Card, Grid } from "@material-ui/core";
import { PreviewContentHeader } from "./previewContentHeader";
import CastCrew from "./castCrew";
import Recommendations from "./recommendations";

export default function PreviewContent(props) {
  const [videoUrl, setUrl] = useState("");
  const [contents, setContents] = useState({});
  const id = props.match.params.id;
  const type = props.match.params.type;
  const styles = {
    media: {
      height: 0,
      paddingTop: "56.25%",
      opacity: 0.4
    },
    card: {
      height: 550,
      position: "relative"
    },
    overlay: {
      position: "absolute",
      top: "20px"
    }
  };
  useEffect(() => {
    async function getVideoUrl() {
      const { results } = await getVideoId(type, id);
      if (results[0]) {
        setUrl(`https://www.youtube.com/watch?v=${results[0].key}`);
      }
    }
    async function getContents() {
      console.log(type);
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
      <Card style={styles.card}>
        {contents.backdrop_path && (
          <CardMedia
            image={`http://image.tmdb.org/t/p/w1280${contents.backdrop_path}`}
            style={styles.media}
          />
        )}
        <div style={styles.overlay}>
          <PreviewContentHeader contents={contents} type={type} />
        </div>
      </Card>

      {contents.id && (
        <Grid style={{ flex: 1 }}>
          <CastCrew id={contents.id} type={type} />
        </Grid>
      )}
      {videoUrl && <ReactPlayer url={videoUrl} style={{ marginLeft: 80 }} />}
      <Recommendations id={contents.id} type={type} />
    </div>
  );
}
