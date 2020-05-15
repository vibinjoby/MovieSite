import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PreviewContent from "./components/previewContent";
import Home from "./components/home";
import ScrollToTop from "./components/scrollToTop.jsx";
import SearchComponent from "./components/searchComponent";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/content/:type/:id" component={PreviewContent} />
            <Route path="/movies" component={Home} />
            <Route path="/search/:query" component={SearchComponent} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
