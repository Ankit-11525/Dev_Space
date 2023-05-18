import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  const brandStyle={
    textDecoration:'none',
    color:'#fff',
    fontWeight:'bold',
    fontSize:'22px',
    display:'flex',
    alignItem:'center'
  }
  return (
    <nav className={ `${styles.navbar} container`}>
      <Link to="/" style={brandStyle}>
        <img src='/images/logo.png' alt='Logo'/>
        <span style={
          {fontSize:'40px',
          marginLeft:'10px'        
        }
        }> DevSpace</span>
      </Link>
    </nav>
  )
}
// css module work only on it, not on child component so we define internal css for img and logo name 
// Link used over <a> href because it works on without reloading
export default Navigation