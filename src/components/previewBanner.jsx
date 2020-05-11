import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import CardData from "./cardData";
import { getMovies, getTvShows } from "../services/moviesService";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#FCA311"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#00000",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo2: {
    backgroundColor: "#E5E5E5",
    marginTop: 20
  }
}));

export default function PreviewBanner(props) {
  const [content, setContent] = useState([]);
  const type = props.movieType;
  const classes = useStyles();
  const [contentType, setContentType] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setContentType(newValue);
  };
  useEffect(() => {
    async function updateContent(contentType) {
      const data =
        contentType === 0 ? await getMovies(type) : await getTvShows(type);
      setContent(data.results);
    }
    updateContent(contentType);
  });

  return (
    <React.Fragment>
      <Typography variant="h5" style={{ paddingLeft: 20, marginTop: 20 }}>
        {props.movieHeader}
      </Typography>
      <div className={classes.demo2}>
        <StyledTabs
          value={contentType}
          onChange={handleChange}
          aria-label="styled tabs"
        >
          <StyledTab label="Movies" />
          {props.tvShows && <StyledTab label="Tv Shows" />}
        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
      <CardData contents={content} type={contentType} />
    </React.Fragment>
  );
}
