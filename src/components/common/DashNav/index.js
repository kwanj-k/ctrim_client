import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    Button,
    Modal,
} from 'semantic-ui-react';

import './nav.css';
import ctrim from './ctrim.fgy';
import { logoutUser } from '../../../actions/authActions';
import  AddStore  from '../../storeform';

class Nav extends Component {
    state = { 
        openAddStore: false,
    }

    showModal = dimmer => () => this.setState({ dimmer, openAddStore: true })
    close = () => this.setState({ openAddStore: false })

    onClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push('/')
    };

    render () {
        const { openAddStore, dimmer } = this.state
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
                        <li>
                            <Button as='a'
                                className='btn'
                                onClick={this.showModal('inverted')}>
                                AddStore
                            </Button>
                            <Modal dimmer={dimmer} open={openAddStore} onClose={this.close} className='login-form'>
                                < AddStore />
                            </Modal>
                        </li>
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
