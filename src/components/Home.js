import React, { Component } from "react";
import { FEATURED_API, FIND_BY_GENRE_URL } from "../constants/urls";
import { FEATURED_FILMS, HORROR_FILMS, COMEDY_FILMS } from "../constants/lang";
import Slider from "./Slider";

/*
action 28
animated 16
documentary 99
drama 18
family 10751
fantasy 14
history 36
comedy 35
war 10752
crime 80
music 10402
mystery 9648
romance 10749
sci fi 878
horror 27
TV movie 10770
thriller 53
western 37
adventure 12
*/

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featured: [],
      horror: [],
      comedy: [],
      animated: [],
    };
  }

  async componentDidMount() {
    await fetch(FEATURED_API)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ featured: data.results });
      })
      .catch((err) => {
        console.log(err);
      });

    await fetch(FIND_BY_GENRE_URL(27))
      .then((response) => response.json())
      .then((data) => {
        this.setState({ horror: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
    await fetch(FIND_BY_GENRE_URL(35))
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comedy: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const featured = this.state.featured;
    const horror = this.state.horror;
    const comedy = this.state.comedy;
    // console.log(featured.featured);
    return (
      <div className="home-page">
        <div className="container">
          <Slider movie={featured} title={FEATURED_FILMS} />
          <Slider movie={horror} title={HORROR_FILMS} />
          <Slider movie={comedy} title={COMEDY_FILMS} />
        </div>
      </div>
    );
  }
}
