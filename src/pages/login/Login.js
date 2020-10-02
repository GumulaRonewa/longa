import React, { Component } from "react";
import "./App.css";
import whitelogo from '../../images/whitelogo.png'
import login from '../../images/login.svg'
import facebook from '../../images/facebook.svg'
import google from '../../images/google.svg'


class Login extends Component {
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
        <div className="leftBox">
          <div className="bgGreen">
          </div>
          <div className="imageAuth">
          </div>
        </div>
        <div className="rightBox">
           <div className="bgRed">
              <div className="logoplace">
                 <img src={whitelogo} alt="L" className="image"/>
              </div>
              <div className="loginBox">
                 <div className="logininput">
                    <input type='text' className="inputbox" placeholder="Email Address" />
                    <input type='password' className="inputPasswordbox" placeholder="Password" />
                 </div>
                 <button className="buttons">
                  <img src={login} className='iconSign' alt="b"/>
                      Login
                 </button>
                 <button className="facebookbutton">
                  <img src={facebook} className='icon' alt="b"/>
                  Facebook
                 </button>
                 <button className="Gmailbutton">
                  <img src={google} className='icon' alt="b"/>
                   Google
                 </button>
              </div>
               <div className='registerbutton'>
                 <p>Register</p>
               </div>
               <div className='forgotbutton'>
                 <p>Forgot Password?</p>
               </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

