import React, { Component } from "react";
import Category from "./category";
import Movies from "./movies";
import NavBar from "./navbar";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";
class MovieLayout extends Component {
  state = {
    genrs: [{ _id: -1, name: "All" }, ...getGenres()],
    currentPage: 1,
    movies: getMovies(),
  };

  removeMovie = (movie) => {
    this.state.movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: this.state.movies });
  };
  refresh = (id) => {
    const movies = getMovies().filter((m) => m.genre._id === id);
    this.setState({ movies });
  };
  paging = (currentPage) => {
    this.setState({ currentPage });
  };
  render() {
    const pageSize = 2;
    const count = this.state.movies.length;
    const pagesNum = Math.ceil(count / pageSize);
    const pages = _.range(1, pagesNum + 1);
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <div className="row mt-3">
            <div className="col-2">
              <Category
                genrs={this.state.genrs}
                OnRefresh={this.refresh}
              ></Category>
            </div>
            <div className="col">
              <Movies
                movies={this.state.movies}
                OnRemove={this.removeMovie}
                pages={pages}
                OnPaging={this.paging}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default MovieLayout;
