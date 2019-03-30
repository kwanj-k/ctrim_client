import React from 'react'
import { Button, Card, Image, Container } from 'semantic-ui-react'

import './stores.css';

const StoreCard = () => {
    return (
        <Container className='cards'>
              <Card.Group>
                <Card className='each-card'>
                    <Card.Content>
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Card.Header>Ctrim Traders</Card.Header>
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
                <Card>
                    <Card.Content>
                        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                        <Card.Header>Ctrim Traders</Card.Header>
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
            </Card.Group>
        </Container>

    )
}
export default StoreCard;
