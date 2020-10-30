import React, { Component } from "react";
import "./App.css";
import whitelogo from '../../images/whitelogo.png'
import login from '../../images/login.svg'
import facebook from '../../images/facebook.svg'
import google from '../../images/google.svg'
import loading from '../../images/loading.svg'
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      img:login,
      password: null,
      error: false,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name);
    this.setState({ [name]: value });
  };
   handleLogin = (e) => {
    e.preventDefault();
        this.setState({img: loading });
       setTimeout(() => {
        window.open("home", "_self");
      }, 2000)
  };
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
                    <input type='text' name={'email'} onChange={this.handleChange} className="inputbox" placeholder="Email Address" />
                    <input type='password'name={'password'} onChange={this.handleChange} className="inputPasswordbox" placeholder="Password" />
                 </div>
                 <button onClick={this.handleLogin
                 } className="buttons">
                  <img src={this.state.img} className='iconSign' alt="b"/>
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
                 <a href={"register"} style={{ color: "white" }}>
                   Register
                 </a>
               </div>
               <div className='forgotbutton'>
                 <a href={"login"} style={{ color: "white" }}>Forgot Password?</a>
               </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

