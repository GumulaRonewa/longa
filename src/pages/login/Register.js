import React, { Component } from "react";
import "./App.css";
import minilogo from "../../images/minilogo.png";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import login from "../../images/login.svg";
import loading from "../../images/loading.svg";

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
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      name: null,
      surname: null,
      dob: null,
      password: null,
      load: false,
      cpassword: null,
      check: false,
      submit: false,
      formErrors: {
        email: "",
        name: "",
        form: "",
        cpassword: "",
        surname: "",
        dob: "",
        password: "",
      },
    };
  }
  componentWillMount() {
    this.setState({ date: new Date() });
  }
  handleCheck = (e) => {
    this.setState({ check: !this.state.check });
    this.setState({ submit: true });
  };
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
          value.length < 6 ? "minimum 8 characaters required" : "";

        break;

      case "cpassword":
        formErrors.cpassword =
          this.state.password === value ? "" : "Password doesn't match";

        break;
      case "dob":
        var msDiff = new Date().getTime() - new Date(value).getTime(); //Future date - current date
        var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        var years = days / 364;

        console.log(years);
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
    const user = {
      email: this.state.email,
      name: this.state.name,
      surname: this.state.surname,
      dateOfBirth: this.state.dob,
      password: this.state.password,
    };
    let formErrors = this.state.formErrors;
    this.setState({ load: true });

    if (formValid(this.state.formErrors, user) && this.state.check) {
      axios({
        method: "POST",
        url: `http://localhost:5000/api/user/register`,
        data: user,
      })
        .then((res) => {
          localStorage.setItem("name", user.name);

          console.log(res.data);
          window.open("https://longamoney.groundrabbit.co.za", "_self");
        })
        .catch((res) => {
          console.log(res);
          this.setState({ load: false });
        });
    } else {
      console.log(formErrors);
      this.setState({ load: false });

      this.setState({ submit: true });
    }
  };
  render() {
    const { formErrors } = this.state;
    return (
      <div className="authBox">
        <div className="leftRegBox">
          <div className="bgGreen"></div>
          <div className="imageRegAuth"></div>
        </div>
        <div className="rightRegBox">
          <div className="bgRed" style={{ marginTop: "-30" }}>
            <div className="toplogo">
              <img src={minilogo} alt="L" className="topSec" />
            </div>
            <div className="regplace" style={{ marginTop: "-40" }}>
              Register
            </div>
            <div className="RegBox">
              <div className="logininput">
                <input
                  type="text"
                  name={"name"}
                  onChange={this.handleChange}
                  className="inputbox"
                  placeholder=" Name"
                />
                <input
                  type="text"
                  name={"surname"}
                  onChange={this.handleChange}
                  className="inputRegibox"
                  placeholder="Surname"
                />
                <StyledTextField
                  helperText="Select your Date of Birth"
                  name="dob"
                  id="dob"
                  type="date"
                  defaultValue="Birth"
                  onChange={this.handleChange}
                  className={"inputRegibox"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <input
                  type="text"
                  name={"email"}
                  onChange={this.handleChange}
                  className="inputRegibox"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  name={"password"}
                  onChange={this.handleChange}
                  className="inputRegibox"
                  placeholder="Password"
                />
                <input
                  type="password"
                  name={"cpassword"}
                  onChange={this.handleChange}
                  className="inputRegibox"
                  placeholder="Confirm Password"
                />
                {formErrors.cpassword.length >= 0 && (
                  <span className="errorMessage"> {formErrors.cpassword}</span>
                )}
                {!this.state.check && this.state.submit && (
                  <span className="errorMessage"> Error</span>
                )}
                <div className="tc">
                  <Checkbox onChange={this.handleCheck} />
                  <div style={{ marginTop: 9, color: "black" }}>
                    {" "}
                    By Signing up you agree with our
                    <a
                      href="https://www.dropbox.com/s/ltz49mxd0mu6rcj/LM%20User%20Agreement.pdf?dl=0"
                      target="_blank"
                      style={{
                        marginTop: 10,
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      User Agreement{" "}
                    </a>
                    and
                    <a
                      href="https://www.dropbox.com/s/jdp25froz375fdr/LM%20Privacy%20Policy_05_11_2020.pdf?dl=0"
                      target="_blank"
                      style={{
                        marginTop: 10,
                        color: "black",
                        textDecoration: "underline",
                      }}
                    >
                      {" "}
                      Privacy policy{" "}
                    </a>
                  </div>
                </div>
              </div>
              <button onClick={this.handleLogin} className="buttonsreg">
                {this.state.load && (
                  <img src={loading} className="iconSign" alt="b" />
                )}
                {!this.state.load && <SendIcon className="iconSign" />}
                <p style={{ color: "transparent" }}> e</p>
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
