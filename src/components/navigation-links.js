import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span
        className={` ${styles['text']} ${projectStyles['navigation-link']} `}
      >
        {props.link1}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
