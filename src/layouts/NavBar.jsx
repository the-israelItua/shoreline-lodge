import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <h2 className="navbar-brand">ShoreLine</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
