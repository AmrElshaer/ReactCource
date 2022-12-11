import React, { Component } from "react";
import { useParams } from "react-router-dom";
function Movie() {
  let { id } = useParams();
  console.log(id);
  return <h1>Movie:</h1>;
}

export default Movie;
