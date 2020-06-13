import React, { useEffect, useState } from "react";
import SearchType from "./searchType";
import { Grid } from "@material-ui/core";
import SearchResult from "./searchResult";
import { getMultiSearchResults } from "../services/moviesService";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  container: {
    flexFlow: "row",
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      flexFlow: "column"
    }
  }
}));

export default function SearchComponent(props) {
  const classes = useStyles();
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const search = props.match.params.query;
  let moviesArr = [];
  let tvShowsArr = [];
  const [moviesData, setMoviesData] = useState([]);
  const [tvData, setTvData] = useState([]);
  const [filteredData, setFilteredData] = useState("");

  const handleSearchClick = type => {
    let data = [];
    if (type === "movies") {
      data = [...moviesData];
    } else if (type === "tv") {
      data = [...tvData];
    }
    setFilteredData(data);
  };

  const handleClick = (event, value) => {
    setSearchData([]);
    setPage(value);
  };

  useEffect(() => {
    async function getSearchData() {
      const results = await getMultiSearchResults(search, page);
      setTotalPages(results.total_pages);
      results.results.forEach((element, index, array) => {
        if (element.media_type === "movie") {
          moviesArr.push(element);
        } else if (element.media_type === "tv") {
          tvShowsArr.push(element);
        }
      });
      // By default show movies
      if (moviesArr.length > 0) {
        setSearchData([...moviesData]);
      } else {
        setSearchData([...tvData]);
      }
      setMoviesData(moviesArr);
      setTvData(tvShowsArr);
    }
    if (searchData.length === 0) getSearchData();
  });
  return (
    <React.Fragment>
      <Grid container className={classes.container} spacing={7}>
        <Grid item>
          <SearchType
            movies={moviesData}
            tv={tvData}
            onSearchClick={handleSearchClick}
          />
        </Grid>
        <Grid item style={{ flexGrow: 2 }} md>
          {searchData && (
            <SearchResult
              contents={searchData}
              filteredData={filteredData}
              page={page}
            />
          )}
          <br />
          <br />
          <Pagination count={totalPages} page={page} onChange={handleClick} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
