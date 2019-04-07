import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Modal,

} from 'semantic-ui-react'


import './home.css';
import Login from '../login';
import SignUp from '../signup';


const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class DesktopContainer extends Component {
  state = { 
    openLogin: false,
    openSignup: false
   }

  showLogin = dimmer => () => this.setState({ dimmer, openLogin: true })
  showSignup = dimmer => () => this.setState({ dimmer, openSignup: true })

  close = () => this.setState({ openLogin: false, openSignup: false})

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { openLogin, openSignup, dimmer } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            className='masthead'
            textAlign='center'
            style={{ 
              minHeight: 750,
              padding: '2em 0em'
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container >
                <Menu.Item as='a' active
                >
                  Ctrim
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}
                   onClick={this.showLogin('blurring')} >
                    LogIn
                  </Button>
                </Menu.Item >
                <Modal dimmer={dimmer} open={openLogin} onClose={this.close} className='login-form'>
                  < Login />
                </Modal>
                <Menu.Item>
                  <Button as='a' inverted={!fixed}
                    onClick={this.showSignup('blurring')} >
                      SignUP
                  </Button>
                </Menu.Item >
                <Modal dimmer={dimmer} open={openSignup} onClose={this.close} className='login-form'>
                  < SignUp />
                </Modal>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = { 
    openLogin: false,
    openSignup: false
   }

  showLogin = dimmer => () => this.setState({ dimmer, openLogin: true })
  showSignup = dimmer => () => this.setState({ dimmer, openSignup: true })

  close = () => this.setState({ openLogin: false, openSignup: false})

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { openLogin, openSignup, dimmer } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Ctrim
          </Menu.Item>
          <Menu.Item as='a'
            onClick={this.showLogin('blurring')}
          >
            Log in
          </Menu.Item>
          <Modal dimmer={dimmer} open={openLogin} onClose={this.close} className='mobile-form'>
            < Login />
          </Modal>
          <Menu.Item as='a'
          onClick={this.showSignup('blurring')}>
            Sign Up
          </Menu.Item>
          <Modal dimmer={dimmer} open={openSignup} onClose={this.close} className='mobile-form'>
            < SignUp />
          </Modal>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            className='masthead'
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const HomepageLayout = () => (
  <ResponsiveContainer />
)
export default HomepageLayout
