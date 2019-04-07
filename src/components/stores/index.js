import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import _ from 'lodash';
import { Button, Card, Container } from 'semantic-ui-react'

import './stores.css';
import { loadStores } from '../../actions/storeActions';

class StoreCard extends Component {
    componentWillMount() {
        let arr = _.values(this.props.stores);
        if(arr.length === 0){
            this.props.loadStores();
        }
    }

    storeCard () {
        const arr = _.values(this.props.stores['stores'])
        const stores = arr.map(store => {
            return(
                <Card className='each-card' key={store.pk}>
                    <Card.Content>
                        <Card.Header>{ store.name }</Card.Header>
                        <Card.Meta>Owned by Cecy</Card.Meta>
                        <Card.Description>
                        WholeSale store located at OTC
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Open
                        </Button>
                        <Button basic color='red'>
                            Delete
                        </Button>
                        </div>
                    </Card.Content>
                </Card>
            );
        })
        return (<div>{ stores} </div>)
    }

    render () {
        return (
            <Container className='cards'>
                <Card.Group>
                    { this.storeCard() }
                </Card.Group>
            </Container>

        )
    }
}

StoreCard.propTypes = {
    loadStores: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) =>{
    return state
}

export default withRouter(
    connect(
      mapStateToProps,
      { loadStores }
    )(StoreCard)
  );

