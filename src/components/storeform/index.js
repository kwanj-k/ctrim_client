import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Header, Form, Button, Segment } from "semantic-ui-react";

import "../home/home.css";

class AddStore extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

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
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="warehouse"
                iconPosition="left"
                placeholder="Store name"
                name="name"
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

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// };

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps,)(AddStore));
