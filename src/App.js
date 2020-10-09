import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Search } from "./components/Search";
import { GlobalProvider } from "./context/GlobalState";
import { ROOT_PATH, WATCHED_PATH, SEARCH_PATH } from "./constants/routes";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROOT_PATH}>
            <WatchList />
          </Route>
          <Route exact path={WATCHED_PATH}>
            <Watched />
          </Route>
          <Route exact path={SEARCH_PATH}>
            <Search />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
