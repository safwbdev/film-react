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
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">{HEADER_TITLE}</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to={ROOT_PATH}>{HEADER_WATCHLIST}</Link>
            </li>

            <li>
              <Link to={WATCHED_PATH}>{HEADER_WATCHED}</Link>
            </li>

            <li>
              <Link to={SEARCH_PATH} className="btn btn-main">
                {HEADER_SEARCH}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
