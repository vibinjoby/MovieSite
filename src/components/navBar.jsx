import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "#14213D" }}>
        <Toolbar>
          <Button color="inherit" onClick={() => (window.location = "/")}>
            <Typography variant="h6">Movies </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
