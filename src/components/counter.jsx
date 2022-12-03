import React, { Component } from "react";
class Counter extends Component {
  state = { tags: ["tag1", "tag2", "tag3"] };

  formatCounter() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There no tags!</p>;
    return this.state.tags.map((t) => <li key={t}>{t}</li>);
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.props.OnIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increamnet
        </button>
        <button
          className="btn bg-danger btn-sm m-2"
          onClick={this.props.OnDelete}
        >
          Remove
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value == 0 ? "bg-warning" : "bg-primary";
    return classes;
  }
}

export default Counter;
