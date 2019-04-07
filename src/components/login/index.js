import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Header,
  Form,
  Button,
  Message,
  Segment,
  Modal
} from "semantic-ui-react";
import jwt_decode from "jwt-decode";

import "../home/home.css";
import SignUp from "../signup";
import { loginUser, setCurrentUser } from "../../actions/authActions";
import isExpired from "../../utils/isExpired";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      openSignup: false,
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    if (token ) {
      const decoded = jwt_decode(token);
      const { setCurrentUser } = this.props;
      const { exp } = decoded;
      const expiryCheck = isExpired(exp)
      if (!expiryCheck) {
        setCurrentUser(decoded);
      }
    }
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showSignup = dimmer => () => this.setState({ dimmer, openSignup: true });
  close = () => this.setState({ openSignup: false });

  render() {
    const { openSignup, dimmer, errors } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="cont-pad">
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                onChange={this.onChange}
                error={errors.email}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.onChange}
                error={errors.password}
              />
              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?{" "}
            <a href="#hh" onClick={this.showSignup("blurring")}>
              Sign Up
            </a>
            <Modal
              dimmer={dimmer}
              open={openSignup}
              onClose={this.close}
              className="login-form"
            >
              <SignUp />
            </Modal>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser, setCurrentUser }
  )(Login)
);
