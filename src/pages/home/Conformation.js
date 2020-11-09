import React, { Component } from "react";
import "../login/App.css";
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
class Conformation extends Component {

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
              
              <div className="RegBox">
                 <div className="conftext">
                    <div className={"conformationtext"}>
                     Thank you 
                     Please check your emails 
                     <br/>
                     and verify the account.
                    </div>
                    <h3 style={{color:'transparent'}}>Transparent Text</h3>
                 </div>
                  <a href="/login" className={'conreg'} style={{marginTop:10,color:"white"}}> Login </a>
                 
              </div>
               
          </div>
        </div>
      </div>
    );
  }
}
export default Conformation;

