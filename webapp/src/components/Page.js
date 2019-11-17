import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import '../css/Nav.css'
import '../css/Page.css'
import Zoom from 'react-reveal/Zoom';

class Page extends React.Component {


constructor(props){
  super(props);
}

 componentDidMount(){
  window.addEventListener('scroll',this._handle_Scroll_offSet);
 }

 _handle_Scroll_offSet = () => {
   var Scrollpos = window.pageYOffset;
   console.log(Scrollpos)
   if(Scrollpos > 560 && Scrollpos < 700)
   {
     document.getElementById("new").style.opacity = 1;
   }
   else{
      document.getElementById("new").style.opacity = 0;
   }
 }

  render () {
      return(
        <div class="Master_container">
          <Nav/>
          <div Class='Hero_container'>

            <div class='Home' >
              <Zoom>
                <p className='mainhead'>AirPods Pro</p>
                <p className='smallhead'>Watch the film</p>
              </Zoom>
            </div>

            <div>
              <div class='one' id="navbar">
                  <p className='fourpara' id='new'>Active Noise Cancellation for immersive sound.</p>
              </div>
              <div class='two'>
                <p className='fourpara'>Transparency mode for hearing what’s happening around you.</p>
              </div>
              <div class='three'>
                <p className='fourpara'>A customizable fit for all-day comfort.</p>
              </div>
              <div class='four'>
                <p className='fourpara'>Magic like you’ve never heard.</p>
              </div>
            </div>

          </div>
        </div>
      )
  }
}

export default Page;
