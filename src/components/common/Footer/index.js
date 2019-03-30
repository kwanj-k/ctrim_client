import React from 'react';

import {
    Container,
    Grid,
    Header,
    List,
    Segment

  } from 'semantic-ui-react'
const Footer = () => {
    return (
        <div>
            <Segment inverted vertical style={{ padding: '5em 0em', position: 'relative', bottom: '0px' }}>
                <Container>
                    <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Sitemap</List.Item>
                            <List.Item as='a'>Contact Us</List.Item>
                        </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>FAQ</List.Item>
                            <List.Item as='a'>How To Use</List.Item>
                            <List.Item as='a'>Favorite features</List.Item>
                        </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            Ctrim.Inc
                        </Header>
                        <p>
                            Ctrim is a business management platform inspired by the way you work.
                            From small to large scale business, 
                            you can keep track of products, profits, employees and collaborate with other business owners.
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}

export default Footer;
