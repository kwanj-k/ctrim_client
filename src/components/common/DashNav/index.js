import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './nav.css';
import ctrim from './ctrim.fgy';
import { logoutUser } from '../../../actions/authActions';


class Nav extends Component {

    onClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push('/')
    };

    render () {
        return (
            <div className='nav_marg'>
                <nav>
                    <ul>
                        <li>
                            <img
                            src={ctrim}
                            className="img-responsive"
                            alt="+Ctrim" />
                        </li>
                        <li ><Link to="/newstore" >AddStore</Link></li>
                        <li >
                        <Button
                            as='a'
                            className='btn'
                            onClick={this.onClick}>
                            Logout
                        </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => (
    state
)


export default withRouter(
    connect(
      mapStateToProps,
      { logoutUser }
    )(Nav)
  );
