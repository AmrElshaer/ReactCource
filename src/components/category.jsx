import React, { Component } from "react";
class Category extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group mb-3">
        {this.props.genrs.map((g) => (
          <li
            className="list-group-item d-flex justify-content-between lh-sm"
            key={g._id}
          >
            <button className="btn" onClick={() => this.props.OnRefresh(g._id)}>
              {g.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Category;
