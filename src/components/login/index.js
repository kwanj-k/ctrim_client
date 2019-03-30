import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Button,
    Message,
    Segment,
} from 'semantic-ui-react'


class Login extends Component {

    render (){
        return ( 
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }} className='cont-pad'>
                    <Header as='h2' color='teal' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='teal' fluid size='large'>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#hh'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )

    }
}

export default Login;
