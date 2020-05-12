import React from "react";
import PreviewBanner from "./previewBanner";

export default function Home() {
  return (
    <React.Fragment>
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
