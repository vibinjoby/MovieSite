import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import PreviewBanner from "./components/previewBanner";

function App() {
  return (
    <React.Fragment>
      <AppBar />
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

export default App;
