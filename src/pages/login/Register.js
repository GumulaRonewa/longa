import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'
import axios from "axios";
import Checkbox from '@material-ui/core/Checkbox';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
var formValid = (formErrors, rest) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};
const StyledTextField = withStyles({
  root: {
    background: "#FFFF",
    height:53,
    paddingLeft:20,
    paddingRight:20,
    marginTop:10,
  }
})(TextField);
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      name:null,
      surname:null,
      dob:null,
      password: null,
      cpassword:null,
      check: false,
       formErrors: {
        email: "",
        name: "",
        cpassword: "",
        surname: "",
        dob: "",
        password: "",
      },
    };
  }
     componentWillMount() {
      this.setState({date:new Date()})
}
   handleCheck =(e) =>{
          this.setState({check:!this.state.check})


   }
   handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(typeof value);
        let formErrors = this.state.formErrors;

        switch (name) {
     
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";

        break;

      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characaters required" : "";

        break;

      case "cpassword":
        formErrors.cpassword =
          this.state.password === value ? "" : "Password doesn't match";

        break;
       case "dob":
         var msDiff =  new Date().getTime()-new Date(value).getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24));
         var years=days/364;

         console.log(years)
        formErrors.cpassword =
          years >= 13 ? "" : "minimum age for this platform is 13";

        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
        const user = { email: this.state.email,name:this.state.name,surname:this.state.surname,dateOfBirth:this.state.dob,password: this.state.password };
          let formErrors = this.state.formErrors;

    if (formValid(this.state.formErrors, user)) {
         axios({
            method: "POST",
            url: `https://longa-money.herokuapp.com/api/user/register`,
             data: user,
             }).then((res) => {
              localStorage.setItem('name',user.name);

                       console.log(res);
                       this.props.history.push("/validreg");
         
            });
    } else {
      console.log("errorMessage");
      formErrors.cpassword ="Form invalid";
    }
        
  };
  render() {
        const { formErrors } = this.state;
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
                       <StyledTextField
                       helperText="Select your Date of Birth"
                        name="dob"
                        id="dob"
                        type="date"
                        defaultValue="2006-05-24"
                         onChange={this.handleChange}
                        className={"inputRegibox"}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    <input type='text' name={'email'}  onChange={this.handleChange} className="inputRegibox" placeholder="Email Address" />
                    <input type='password' name={'password'}  onChange={this.handleChange} className="inputRegibox" placeholder="Password" />
                    <input type='password'  name={'cpassword'}  onChange={this.handleChange} className="inputRegibox" placeholder="Confirm Password" />
                     {formErrors.cpassword.length > 0 && (
                         <span className="errorMessage"> {formErrors.cpassword}</span>
                       )}
                    <div className='tc'>
                      <Checkbox   onChange={this.handleCheck}/>
                      <div  style={{marginTop:9,color:"black"}}> By Signing up you agree with our Accept our 
                      <a href="#" style={{marginTop:10,color:"black"}}> Terms of service </a> 
                        and
                      <a href="#" style={{marginTop:10,color:"black"}}> Privacy policy </a>
                       </div>
                    </div>
                 </div>
                 <button disabled={!this.state.check} onClick={this.handleLogin} className="buttonsreg">
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

