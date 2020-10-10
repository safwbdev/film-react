import React from "react";
import { Link } from "react-router-dom";
import {
  HEADER_TITLE,
  HEADER_WATCHLIST,
  HEADER_WATCHED,
  HEADER_SEARCH,
} from "../constants/lang";
import { ROOT_PATH, WATCHED_PATH, SEARCH_PATH } from "../constants/routes";

export const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg ">
      <div className="container">
        <div className="brand">
          <Link to="/">{HEADER_TITLE}</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to={ROOT_PATH} className="nav-link">
                {HEADER_WATCHLIST}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={WATCHED_PATH} className="nav-link">
                {HEADER_WATCHED}
              </Link>
            </li>

            <li className="nav-item">
              <Link to={SEARCH_PATH} className="btn btn-main">
                <i className="fa fa-search" aria-hidden="true"></i>
                {" " + HEADER_SEARCH}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
