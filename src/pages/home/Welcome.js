import React, { Component } from "react";
import './home.css';
import whitelogo from '../../images/whitelogo.png'
import facebookblack from '../../images/facebookblack.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin.svg'
import snapchat from '../../images/snapchat.svg'

export default class Welcome extends Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,

      password: null,
      error: false,
    };
  }

  render(){
  	 return(

        <div className="WelcomeBox">
        <div className="WelcomeleftBox">
          <div className="bgBlue">
                    <img style={{height:200,width:200,marginLeft:40}} src={whitelogo} alt="l" />

          </div>

        </div>
        <div className="WelcomerightBox">
           <div className="bgWhite">
              <div>
                <div className="welcometext"> Welcome __First Name__ </div>
                <div className="linktext">Please link one or more social media accounts to proceed</div>
                <div className="accountsrow">
                   <img src={instagram} style={{marginLeft:160}} className='accounticon' alt="b"/>
                   <img src={twitter} style={{marginLeft:20}} className='accounticon' alt="b"/>
                   <img src={facebookblack} style={{marginLeft:20}} className='accounticon' alt="b"/>
                   <img src={linkedin} style={{marginLeft:20}} className='accounticon' alt="b"/>
                   <img src={snapchat} style={{marginLeft:20}} className='accounticon' alt="b"/>
                </div>
               </div>
          </div>
        </div>
      </div>
  	 	)
  }
 }