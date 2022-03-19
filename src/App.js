import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./components/movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
