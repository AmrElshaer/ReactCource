import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Joi from "joi-browser";
import Form from "./common/form";
class Login extends Form {
  state = { data: { Email: "", Password: "" }, errors: {} };
  schema = {
    Email: Joi.string().required(),
    Password: Joi.string().required(),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Email", "Email")}
          {this.renderInput("Password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
