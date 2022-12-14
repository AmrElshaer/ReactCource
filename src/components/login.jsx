import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Joi from "joi-browser";
class Login extends Component {
  state = { acount: { Email: "", Password: "" }, errors: {} };
  schema = {
    Email: Joi.string().required(),
    Password: Joi.string().required(),
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  validate = () => {
    const result = Joi.validate(this.state.acount, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let error of result.error.details) {
      errors[error.path[0]] = error.message;
    }
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const acount = { ...this.state.acount };
    acount[input.name] = input.value;

    this.setState({ acount, errors });
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

            {this.state.errors["Email"] && (
              <div className="alert alert-danger">
                {this.state.errors["Email"]}
              </div>
            )}
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
            {this.state.errors["Password"] && (
              <div className="alert alert-danger">
                {this.state.errors["Password"]}
              </div>
            )}
          </div>
          <button className="btn btn-primary" disabled={this.validate()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
