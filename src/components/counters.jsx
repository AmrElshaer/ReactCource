import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn bg-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            OnIncrement={() => this.props.incrementCounter(c)}
            OnDelete={() => this.props.deleteCounter(c.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
