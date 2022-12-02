import React, { Component } from "react";
class Counter extends Component {
  state = { counter: 0, tags: ["tag1", "tag2", "tag3"] };

  formatCounter() {
    return this.state.counter === 0 ? "Zero" : this.state.counter;
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There no tags!</p>;
    return this.state.tags.map((t) => <li key={t}>{t}</li>);
  }
  incrementCounter = (product) => {
    console.log(product);
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.incrementCounter({ id: 1, Name: "IPhone" })}
          className="btn btn-secondary btn-sm"
        >
          Increamnet
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 ";
    classes += this.state.counter == 0 ? "bg-warning" : "bg-primary";
    return classes;
  }
}

export default Counter;
