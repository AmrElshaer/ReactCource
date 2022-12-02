import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = { movies: getMovies() };
  removeMovie = (movie) => {
    this.state.movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: this.state.movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no data!!</p>;
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>genre</th>
              <th>InStock</th>
              <th>dailyRentalRate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <th
                  className="btn btn-danger btn-sm bg-danger"
                  onClick={() => this.removeMovie(m)}
                >
                  Remove
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
