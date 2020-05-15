import React from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import DefaultImg from "./defaultImg";

export default function SearchResult(props) {
  let { contents, filteredData } = props;
  if (filteredData) {
    contents = [...filteredData];
  }
  if (contents.length === 0 && filteredData.length === 0)
    return <p>There are no movies that matched your query.</p>;
  return (
    <div style={{ marginRight: 50 }}>
      <Grid container direction="row" spacing={5}>
        {contents.map(content => (
          <React.Fragment key={content.id}>
            <Grid item>
              {content.poster_path && (
                <img
                  src={`http://image.tmdb.org/t/p/w154${content.poster_path}`}
                  alt="data poster"
                  onClick={() =>
                    (window.location = `/content/${content.media_type}/${content.id}`)
                  }
                  style={{ cursor: "pointer" }}
                ></img>
              )}
              {!content.poster_path && (
                <DefaultImg media_type={content.media_type} id={content.id} />
              )}
            </Grid>
            <Paper
              elevation={5}
              style={{
                width: "80%",
                paddingTop: 20,
                paddingLeft: 20,
                marginTop: 20,
                marginBottom: 20
              }}
            >
              <Grid item>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Box>
                      {content.media_type === "movie"
                        ? content.title
                        : content.name}
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      {content.media_type === "movie"
                        ? content.release_date
                        : content.first_air_date}
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography component="div">
                      <Box>
                        {content.overview
                          ? content.overview.substring(0, 500)
                          : "No Overview"}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
