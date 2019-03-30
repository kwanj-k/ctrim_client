import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Form,
  Button,
  Message,
  Segment,
  Modal
} from "semantic-ui-react";

import Login from "../login";
import { registerUser } from "../../actions/authActions";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      openLogin: false,
      username: "",
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser);
  };
  showLogin = dimmer => () => this.setState({ dimmer, openLogin: true });
  close = () => this.setState({ openLogin: false, openSignup: false });

  render() {
    const { openLogin, dimmer, errors } = this.state;

    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="cont-pad">
          <Header as="h2" color="teal" textAlign="center">
            SignUp for Ctrim
          </Header>
          <Form size="large" onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                onChange={this.onChange}
                error={errors.username}
              />
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
                SignUp
              </Button>
            </Segment>
          </Form>
          <Message>
            Already registered?{" "}
            <a href="#hh" onClick={this.showLogin("blurring")}>
              LogIn
            </a>
            <Modal
              dimmer={dimmer}
              open={openLogin}
              onClose={this.close}
              className="login-form"
            >
              <Login />
            </Modal>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));
