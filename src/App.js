import React from "react";
import "./App.css";
// import Movie from "./components/Movie";
// import { SEARCH_PLACEHOLDER } from "./constants/lang";
// import { API_KEY } from "./constants/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";

// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

function App() {
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   getMovies(FEATURED_API);
  // }, []);

  // const getMovies = (API) => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchTerm) {
  //     getMovies(SEARCH_API + searchTerm);
  //     setSearchTerm("");
  //   }
  // };
  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // console.log("qwerty");
  // console.log(movies);
  return (
    // <>
    //   <header>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="search"
    //         placeholder={SEARCH_PLACEHOLDER}
    //         className="search"
    //         onChange={handleChange}
    //       />
    //     </form>
    //   </header>
    //   <div className="movie-container">
    //     {movies.length > 0 &&
    //       movies.map((movie, index) => {
    //         return <Movie key={index} {...movie} />;
    //       })}
    //   </div>
    // </>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
