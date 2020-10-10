import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Movie } from "./components/Movie";
import { Search } from "./components/Search";
import { GlobalProvider } from "./context/GlobalState";
import {
  ROOT_PATH,
  WATCHED_PATH,
  SEARCH_PATH,
  MOVIE_PATH,
} from "./constants/routes";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROOT_PATH} component={WatchList} />
          <Route exact path={WATCHED_PATH} component={Watched} />
          <Route exact path={SEARCH_PATH} component={Search} />
          <Route exact path={`${MOVIE_PATH}/:id`} component={Movie} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
