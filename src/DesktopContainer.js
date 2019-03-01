import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HomepageHeading from './HomepageHeading'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Blog from './Blog'
import ContactForm from './ContactForm'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Router>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container 
                style={{ justifyContent: 
                  'space-around' }}
                >
                  <Menu.Item active>
                  <Link to="/home">Home</Link>
                  </Menu.Item>
                  <Menu.Item>Work</Menu.Item>
                  <Menu.Item><Link to="/blog">Blog</Link></Menu.Item>
                  <Menu.Item>Tutorials</Menu.Item>
                  <Menu.Item><Link to="/contact">Find Me</Link></Menu.Item>
                </Container>
              </Menu>
                <Route path="/home" component={HomepageHeading} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={ContactForm} />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      </Router>
    )
}
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer