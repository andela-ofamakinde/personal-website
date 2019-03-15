import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stream from '../Videos/Stream';

import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import Blog from '../Blog/BlogForm';
import ContactForm from '../Contact/ContactForm';
import HomepageHeading from './HomepageHeading';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
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
          <Router>
            <div>
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
                  <Link to="/home">Home</Link></Menu.Item>
                  <Menu.Item>Work</Menu.Item>
                  <Menu.Item><Link to="/blog">Blog</Link></Menu.Item>
                  <Menu.Item><Link to="/videos">Videos</Link></Menu.Item>
                  <Menu.Item><Link to="/contact">Find Me</Link></Menu.Item>
                </Container>
              </Menu>
                <Route path="/" exact component={HomepageHeading} />
                <Route path="/home" component={HomepageHeading} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={ContactForm} />
                <Route path="/videos" component={Stream}/>
              </div>
            </Router>
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

export default DesktopContainer