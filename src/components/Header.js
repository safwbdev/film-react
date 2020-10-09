import React from "react";
import { Link } from "react-router-dom";
import {
  HEADER_TITLE,
  HEADER_WATCHLIST,
  HEADER_WATCHED,
  HEADER_ADD,
} from "../constants/lang";

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
              <Link to="/">{HEADER_WATCHLIST}</Link>
            </li>

            <li>
              <Link to="/watched">{HEADER_WATCHED}</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                {HEADER_ADD}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
