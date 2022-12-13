import React, { Component } from "react";
class Login extends Component {
  state = { acount: { Email: "", Password: "" } };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  handleChange = ({ currentTarget: input }) => {
    const acount = { ...this.state.acount };
    acount[input.name] = input.value;
    this.setState({ acount });
  };
  render() {
    const acount = { ...this.state.acount };
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              name="Email"
              type="text"
              onChange={this.handleChange}
              value={acount.Email}
              className="form-control"
              id="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              onChange={this.handleChange}
              value={acount.Password}
              className="form-control"
              id="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
