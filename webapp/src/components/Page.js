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
    array : ['Active Noise Cancellation for immersive sound.','Transparency mode for hearing what’s happening around you.','A customizable fit for all-day comfort.','Magic like you’ve never heard.']
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
     })
   }
   else{
     this.setState({
       one : false,
     })
   }
 }

  render () {
    var one = this.state.one ? "withopacity" : "withoutopacity";
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

            <div>
              {
                this.state.array.map((item,index)=>{
                  return <div class={one} key={index}><p class="fourpara">{item}</p></div>
                })
              }
          </div>
        </div>
      </div>
      )
  }
}

export default Page;
