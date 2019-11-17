import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import '../css/Nav.css'

class Nav extends React.Component {
  render () {
    return(
       <nav>
         <NavLink to="/" class='para'>AirPods Pro</NavLink>
         <ul class='nav-links'>
           <li><p className='link-style'><NavLink to='/' activeClassName='chosen'>Overview</NavLink></p></li>
           <li><p className='link-style'><NavLink to='/' activeClassName='chosen'>Tech Specs</NavLink></p></li>
           <li><p className='link-style'><NavLink to='/'  class="add">Buy</NavLink></p></li>
         </ul>
       </nav>
     )
  }
}

export default Nav;
