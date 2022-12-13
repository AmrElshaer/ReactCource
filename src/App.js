import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products";
import MovieLayout from "./components/movieLayout";
import NavBar from "./components/navbar";
import Movie from "./components/movie";
import React, { Component } from "react";
import Login from "./components/login";

class App extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<MovieLayout />} />
          <Route path="/movies/:id" element={<Movie></Movie>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
