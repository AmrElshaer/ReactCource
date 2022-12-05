import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";
class Movies extends Component {
  render() {
    const { length: count } = this.props.movies;
    const movies = _(this.props.movies)
      .slice((this.props.currentPage - 1) * 2)
      .take(2)
      .value();
    if (count === 0) return <p>There is no data!!</p>;
    return (
      <React.Fragment>
        <p>
          Count:<span>{count}</span>
        </p>
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
            {movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <th
                  className="btn btn-danger btn-sm bg-danger"
                  onClick={() => this.props.OnRemove(m)}
                >
                  Remove
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            {this.props.pages.map((i) => (
              <li
                key={i}
                className={
                  this.props.currentPage == i ? "page-item active" : "page-item"
                }
              >
                <button
                  className="page-link"
                  onClick={() => this.props.OnPaging(i)}
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Movies;
