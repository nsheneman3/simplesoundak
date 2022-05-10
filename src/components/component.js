import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return <div className={styles['container']}></div>
}

AppComponent.defaultProps = {
  profile_alt: 'profile',
}

AppComponent.propTypes = {
  profile_alt: PropTypes.string,
}

export default AppComponent
