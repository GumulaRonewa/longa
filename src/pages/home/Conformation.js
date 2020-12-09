import React, { Component } from "react";
import "../login/App.css";
import minilogo from "../../images/minilogo.png";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
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
    height: 53,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
})(TextField);
class Conformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: false,
    };
  }
  componentWillMount() {
    localStorage.clear();
    sessionStorage.clear();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
    const user = { email: this.state.email };
    axios({
      method: "POST",
      url: `http://localhost:5000/api/user/password-reset`, // First page at 0
      data: user,
    })
      .then((res) => {
        window.open(
          "https://longamoney.groundrabbit.co.za/password-link.html",
          "_self"
        );
      })
      .catch((e) => {});
  };
  render() {
    return (
      <div className="authBox">
        <div className="leftRegBox">
          <div className="bgGreen"></div>
          <div className="imageRegAuth"></div>
        </div>
        <div className="rightRegBox">
          <div className="bgRed">
            <div className="toplogo">
              <img
                src={minilogo}
                style={{ height: 170, width: 170 }}
                alt="L"
                className="topSec"
              />
            </div>

            <div style={{ marginTop: "20%" }} className="RegBox">
              <div className={"forgotext"}>Forgot Password?</div>
              <div className={"prompt"}>
                Please enter your email address and a reset link will be sent to
                you.
              </div>
              <div className="loginBox">
                <div className="logininput">
                  <input
                    type="text"
                    name={"email"}
                    onChange={this.handleChange}
                    className="inputbox"
                    placeholder="Email Address"
                  />
                </div>
                <button onClick={this.handleLogin} className="btfg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Conformation;
