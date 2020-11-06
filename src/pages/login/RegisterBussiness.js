import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'

import SendIcon from '@material-ui/icons/Send';


class RegisterBussiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,

      password: null,
      error: false,
    };
  }
 
  render() {
    return (
      <div className="authBox">
        <div className="leftBoxBusiness">
          <div className="bgGreen">
          </div>
          <div className="imageBusinessAuth">
          </div>
        </div>
        <div className="rightBoxBusiness">
           <div className="bgRed"> 
                 <div className="regplaceBusiness">
                Contact Us
              </div>
              <div>
              <div className="RegBoxBusiness">
                 <div className="logininput">
                    <input type='text' className="inputbox" placeholder=" Name of Brand" />
                    <input type='text' className="inputRegibox" placeholder="Has your brand used Influencer Marketing before?" /> 
                    <input type='text' className="inputRegibox" placeholder="Name & Surname" />
                    <input type='text' className="inputRegibox" placeholder="Email Address" />
                    <input type='text' className="inputRegibox" placeholder="Contact Number" />
                    <input type='text' className="inputRegibox" placeholder="Name of Campaign" />
                    <textarea  type='text' style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Description of Campaign" />
                     <input type='text' className="inputboxhidden" placeholder="Duration of campaign" />
                    <input type='text' className="inputRegiboxhidden" placeholder="Number of influencers needed" /> 
                    <textarea  type='text' style={{height:120,fontSize: 14}} multiline className="inputRegiboxhidden" placeholder="Do's for influencers" />
                    <textarea  type='text' style={{height:120,fontSize: 14}} multiline className="inputRegiboxhidden" placeholder="Dont's for influencers" />
                      <button className="buttonshidden">
                  <SendIcon className='iconSign' />
                   <p style={{color:'transparent'}}> e</p>
                     Submit
                 </button> 
                 </div> 

              </div>

              <div className="RegBoxBusinessRight">
                 <div className="logininput">
                    <input type='text' className="inputbox" placeholder="Duration of campaign" />
                    <input type='text' className="inputRegibox" placeholder="Number of influencers needed" /> 
                    <textarea  type='text' style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Do's for influencers" />
                    <textarea  type='text' style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Dont's for influencers" />
                 </div>
                 <div className='regbuttondiv'>
                 <button className="buttons">
                  <SendIcon className='iconSign' />
                   <p style={{color:'transparent'}}> e</p>
                     Submit
                 </button>
                 </div>
                 
                 
              </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterBussiness;
