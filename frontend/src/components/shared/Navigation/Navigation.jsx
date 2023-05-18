import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={ `${styles.navbar} container`}>
      <Link to="/">
        <img src='/images/logo.png' alt='Logo'/>
        <span> DevSpace</span>
      </Link>
    </nav>
  )
}
// css module work only on it, not on child component so we define internal css for img and logo name 
// Link used over a href because it works on without reloading
export default Navigation