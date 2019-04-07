import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import StoreCard from '../stores';
import Nav from '../common/DashNav';


class Dashboard extends Component {

    componentDidMount = () => {
        const auth = this.props.auth.isAuthenticated
        if(!auth){
          this.props.history.push('/login')
        }
    };
    render () {
        return (
            <div>
                < Nav />
                < StoreCard />
            </div>
        )
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  

  export default withRouter(
    connect(
      mapStateToProps
    )(Dashboard)
  );
