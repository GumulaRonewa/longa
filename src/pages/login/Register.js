import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'
import axios from "axios";
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from "react-datepicker";
import SendIcon from '@material-ui/icons/Send';


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      name:null,
      surname:null,
      dob:null,
      password: null,
      phone: null,
      error: false,
      date:null,
    };
  }
     componentWillMount() {
      this.setState({date:new Date()})
}
   handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
        const user = { email: this.state.email,name:this.state.name,surname:this.state.surname,dateOfBirth:this.state.dob,phone:"05393384", password: this.state.password };
           console.log(user);
         axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/user/register`,
      data: user,
      }).then((res) => {
              localStorage.setItem('name',user.name);

                       console.log(res);
                       this.props.history.push("/welcome");
         
      });
  };
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
                    <input type='text' name={'name'} onChange={this.handleChange} className="inputbox" placeholder=" Name" />
                    <input type='text' name={'surname'} onChange={this.handleChange} className="inputRegibox" placeholder="Surname" /> 
                    <input type='date'name={'dob'} label={"DoB"} onChange={this.handleChange} className="inputRegibox" placeholder="Date of Birth" />
                    <input type='text' name={'email'}  onChange={this.handleChange} className="inputRegibox" placeholder="Email Address" />
                    <input type='password' name={'password'}  onChange={this.handleChange} className="inputRegibox" placeholder="Password" />
                    <input type='password' className="inputRegibox" placeholder="Confirm Password" />
                    <div className='tc'>
                      <Checkbox />
                      <a href="#" style={{marginTop:10,color:"black"}}> Accept our terms & conditions </a>
                    </div>
                 </div>
                 <button onClick={this.handleLogin} className="buttons">
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

