import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Button,
    Message,
    Segment,
    Modal
} from 'semantic-ui-react'
import Login from '../login';


class SignUp extends Component {
    state = { 
        openLogin: false
       }
    showLogin = dimmer => () => this.setState({ dimmer, openLogin: true }) 
    close = () => this.setState({ openLogin: false, openSignup: false})
    
    render (){
        const { openLogin, dimmer } = this.state
        
        return ( 
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }} className='cont-pad'>
                    <Header as='h2' color='teal' textAlign='center'>
                        SignUp for Ctrim
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Button color='teal' fluid size='large'>
                            SignUp
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already registered? <a href='#hh'
                        onClick={this.showLogin('blurring')}>
                            LogIn
                        </a>
                        <Modal dimmer={dimmer} open={openLogin} onClose={this.close} className='login-form'>
                            < Login />
                        </Modal>
                    </Message>
                </Grid.Column>
            </Grid>
        )

    }
}

export default SignUp;
