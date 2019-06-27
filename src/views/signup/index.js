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
import { registerUser } from "../../redux/actionCreator/registrationAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
      values: {
        username: "",
        email: "",
        password: ""
      },
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      let newErrors = nextProps.errors;
      this.setState({ errors: newErrors });

    }
    
  }

  onChange = e => {
    this.setState({ 
      errors: {},
      [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { registerUser } = this.props
    const values = this.state;
    registerUser(values);
  };
  showLogin = dimmer => () => this.setState({ dimmer, openLogin: true });
  close = () => this.setState({ openLogin: false, openSignup: false });

  render() {
    const { openLogin, dimmer, errors } = this.state;
    var errs = {}
    Object.keys(errors.error ? errors.error : {}).forEach(key => {
      errs[key] = errors.error[key][0]
    })

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
              <div>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  onChange={this.onChange}
                />
              </div>
              <p style={{ color: 'red' }}>{errs.username}</p>
              <div>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  onChange={this.onChange}
                />
              </div>
              <p style={{ color: 'red' }}>{errs.email}</p>
              <div>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                />
              </div>
              <p style={{ color: 'red' }}>{errs.password}</p>
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
const actionCreators = {
  registerUser
}
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object
};

SignUp.defaultProps = {
  registerUser: {},
  errors: {}
};

const mapStateToProps = state => {
  let errors;
  if (state.registration) {
    errors = state.registration.errors;
  }
  return {
    errors: errors,
    registration: state.registration,
  };
};



export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(SignUp));
