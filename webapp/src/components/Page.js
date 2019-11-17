import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import '../css/Nav.css'
import '../css/Page.css'
import Zoom from 'react-reveal/Zoom';

class Page extends React.Component {


constructor(props){
  super(props);
  this.state = {
    one : false,
    two : false,
    three : false,
    four : false,
  }

}

 componentDidMount(){
  window.addEventListener('scroll',this._handle_Scroll_offSet);
 }

 _handle_Scroll_offSet = () => {
   var Scrollpos = window.pageYOffset;
   console.log(Scrollpos)
   if(Scrollpos > 500 && Scrollpos < 650)
   {
     this.setState({
       one : true,
       two : false,
       three : false,
       four : false,
     })
   }
   else if(Scrollpos > 651 && Scrollpos < 800){
     this.setState({
       one : false,
       two : true,
       three : false,
       four : false,
     })
   }
   else if(Scrollpos > 801 && Scrollpos < 950){
     this.setState({
       one : false,
       two : false,
       three : true,
       four : false,
     })
   }
   else if(Scrollpos > 951 && Scrollpos < 1100){
     this.setState({
       one : false,
       two : false,
       three : false,
       four : true,
     })
   }
 }


  render () {
    var one = this.state.one ? "withopacity" : "withoutopacity";
    var two = this.state.two ? "withopacity" : "withoutopacity";
    var three = this.state.three ? "withopacity" : "withoutopacity";
    var four = this.state.four ? "withopacity" : "withoutopacity";
    console.log(this.state)
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

            <div >
              <div class={one}><p class="fourpara">Active Noise Cancellation for immersive sound.</p></div>
              <div class={two} id="two"><p class="fourpara">Transparency mode for hearing what’s happening around you.</p></div>
              <div class={three} id="three"><p class="fourpara">A customizable fit for all-day comfort.</p></div>
              <div class={four} id="four"><p class="fourpara">Magic like you’ve never heard.</p></div>
           </div>




        </div>
      </div>
      )
  }
}

export default Page;
