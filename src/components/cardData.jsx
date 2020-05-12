import React from "react";
import { Card, Grid, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexFlow: "row",
    paddingLeft: 20,
    overflow: "auto",
    backgroundColor: "#DCDCDC"
  }
});
export default function CardData(props) {
  const classes = useStyles();
  const { contents, type } = props;
  return (
    <Grid container spacing={3} className={classes.root}>
      {contents
        ? contents.map(content => (
            <Grid item key={content.id} className={classes.item}>
              <Card style={{ height: "100%" }}>
                <CardMedia>
                  <Link
                    to={`/content/${type === 0 ? "movie" : "tv"}/${content.id}`}
                  >
                    <img
                      src={`http://image.tmdb.org/t/p/w185${content.poster_path}`}
                      alt="data poster"
                    ></img>
                  </Link>
                </CardMedia>
                <CardContent>
                  {type === 0 ? content.title : content.name}
                </CardContent>
              </Card>
            </Grid>
          ))
        : ""}
    </Grid>
  );
}
