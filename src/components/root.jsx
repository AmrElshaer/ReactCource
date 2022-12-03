import React, { Component } from "react";

import Counters from "./counters";
import NavBar from "./navbar";
class Root extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };
  incrementCounter = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  deleteCounter = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);

    this.setState({ counters });
  };
  reset = () => {
    const counters = this.state.counters.filter((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.reset}
            counters={this.state.counters}
            deleteCounter={this.deleteCounter}
            incrementCounter={this.incrementCounter}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default Root;
