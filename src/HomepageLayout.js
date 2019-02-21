import PropTypes from 'prop-types'
import React from 'react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const HomepageLayout = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

HomepageLayout.propTypes = {
  children: PropTypes.node,
}

export default HomepageLayout