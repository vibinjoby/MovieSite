import React, { Fragment } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PreviewContent from "./components/previewContent";
import Home from "./components/home";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <BrowserRouter>
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/content/:type/:id" component={PreviewContent} />
            <Route path="/movies" component={Home} />
            <Route path="/" component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
