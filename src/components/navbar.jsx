import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar <span className="bg-primary">{this.props.totalCounter}</span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
