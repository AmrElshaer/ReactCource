import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products";
import MovieLayout from "./components/movieLayout";
import NavBar from "./components/navbar";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<MovieLayout />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
