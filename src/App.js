import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import MoviePreviewBanner from "./components/moviePreviewBanner";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <MoviePreviewBanner movieType="popular" movieHeader="Popular Movies" />
      <MoviePreviewBanner
        movieType="top_rated"
        movieHeader="Top Rated Movies"
      />
      <MoviePreviewBanner movieType="upcoming" movieHeader="Upcoming Movies" />
      <MoviePreviewBanner
        movieType="now_playing"
        movieHeader="Now Playing Movies"
      />
    </React.Fragment>
  );
}

export default App;
