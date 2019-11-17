import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import '../css/Nav.css'

class Page extends React.Component {
  render () {
      return(
        <div class="container">
          <Nav/>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
  }
}

export default Page;
