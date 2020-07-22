/* eslint-disable react/no-typos */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      username: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      console.log("played");
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  }
  render() {
    const { loading } = this.props.auth;
    let logo;
    if (loading) {
      logo = <h4>Loading user</h4>;
    } else {
      logo = <img src={require("../../assets/images/logo.svg")} alt="logo" />;
    }
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">{logo}</div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3" onSubmit={this.onSubmit}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      placeholder="Password"
                      size="lg"
                    />
                  </Form.Group>

                  <Form.Control
                    type="submit"
                    size="lg"
                    value="Sign in"
                    className="btn btn-block btn-primary btn-lg "
                  />

                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-2">
                    <button
                      type="button"
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mdi-facebook mr-2"></i>Connect using
                      facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateProps, { loginUser })(Login);
