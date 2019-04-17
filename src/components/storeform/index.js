import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Form, Button, Segment } from "semantic-ui-react";

import "../home/home.css";
import { createStore } from "../../actions/storeActions";

class AddStore extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    console.log(this.props);
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const storeData = {
      name: this.state.name
    };
    const { createStore } = this.props;
    createStore(storeData);
  };

  render() {
    const { errors } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="cont-pad">
          <Header as="h2" color="teal" textAlign="center">
            Add-new-store
          </Header>
          <Form size="large" onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="warehouse"
                iconPosition="left"
                placeholder="Store name"
                name="name"
                onChange={this.onChange}
                error={errors.name}
              />
              <Button color="teal" fluid size="large">
                Add
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

AddStore.propTypes = {
  createStore: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => state;

export default withRouter(
  connect(
    mapStateToProps,
    { createStore }
  )(AddStore)
);
