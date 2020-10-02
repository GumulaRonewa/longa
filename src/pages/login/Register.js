import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'

import SendIcon from '@material-ui/icons/Send';


class Register extends Component {
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
        <div className="leftRegBox">
          <div className="bgGreen">
          </div>
          <div className="imageRegAuth">
          </div>
        </div>
        <div className="rightRegBox">
           <div className="bgRed"> 
             <div className="toplogo">
                 <img src={minilogo} alt="L" className="topSec"/>
              </div>
              <div className="regplace">
                Register
              </div>
              <div className="RegBox">
                 <div className="logininput">
                    <input type='text' className="inputbox" placeholder=" Name" />
                    <input type='text' className="inputRegibox" placeholder="Surname" /> 
                    <input type='text' className="inputRegibox" placeholder="Date of Birth" />
                    <input type='text' className="inputRegibox" placeholder="Email Address" />
                    <input type='password' className="inputRegibox" placeholder="Password" />
                    <input type='password' className="inputRegibox" placeholder="Confirm Password" />
                 </div>
                 <button className="buttons">
                  <SendIcon className='iconSign' />
                   <p style={{color:'transparent'}}> e</p>
                     Submit
                 </button>
                 
              </div>
               
          </div>
        </div>
      </div>
    );
  }
}
export default Register;

