import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/products">
        Product
      </Link>
    </nav>
  );
};
 


export default NavBar;
