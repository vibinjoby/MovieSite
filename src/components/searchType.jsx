import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  ListItemText,
  Grid,
  Typography,
  Box,
  Badge,
  Card
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  activeItem: {
    backgroundColor: "#C0C0C0",
    cursor: "pointer"
  },
  item: { cursor: "pointer" }
}));
export default function SearchType(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState("movies");
  const { tv, movies, onSearchClick } = props;
  return (
    <div style={{ marginLeft: 50 }}>
      <Grid container style={{ flexFlow: "column" }}>
        <Grid item>
          <Card className={classes.paper}>
            <List
              style={{
                backgroundColor: "#53adcb",
                color: "#FFFFFF"
              }}
            >
              <ListItem alignItems="flex-start">
                <Typography component="div">
                  <Box fontWeight="bold">Search Results</Box>
                </Typography>
              </ListItem>
            </List>
            <List
              className={
                "movies" === selected ? classes.activeItem : classes.Item
              }
            >
              <ListItem
                alignItems="flex-start"
                onClick={() => {
                  setSelected("movies");
                  onSearchClick("movies");
                }}
                className={classes.item}
              >
                <ListItemText>
                  Movies &nbsp; &nbsp;
                  {<Badge badgeContent={movies.length} color="secondary" />}
                </ListItemText>
              </ListItem>
            </List>
            <List
              className={"tv" === selected ? classes.activeItem : classes.Item}
            >
              <ListItem
                alignItems="flex-start"
                onClick={() => {
                  setSelected("tv");
                  onSearchClick("tv");
                }}
                className={classes.item}
              >
                <ListItemText>
                  Tv Shows &nbsp; &nbsp;
                  {<Badge badgeContent={tv.length} color="secondary" />}
                </ListItemText>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
