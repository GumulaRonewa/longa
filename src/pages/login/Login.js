import React, { Component } from "react";
import "./App.css";
import whitelogo from "../../images/whitelogo.png";
import login from "../../images/login.svg";
import facebook from "../../images/facebook.svg";
import google from "../../images/google.svg";
import loading from "../../images/loading.svg";
import axios from "axios";
import profile_picture_without_slogan from "../../images/profile_picture_without_slogan.png";
import notag from "../../images/notag.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      img: login,
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
    this.setState({ error: false });

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ img: loading });
    const user = { email: this.state.email, password: this.state.password };
    axios({
      method: "POST",
      url: `http://localhost:5000/api/user/login`,
      data: user,
    })
      .then((res) => {
        sessionStorage.setItem("token", res.data["token"]);
        var user = res.data["user"];
        var banking = user["bankingDetails"];
        banking = banking.accountNumber;
        banking = banking === "";
        sessionStorage.setItem("value", 0);
        sessionStorage.setItem("name", user["name"]);
        sessionStorage.setItem("bankings", banking);
        sessionStorage.setItem("surname", user["surname"]);
        sessionStorage.setItem("image", user["image"]);
        sessionStorage.setItem("userId", user["_id"]);
        window.open("home", "_self");
      })
      .catch((e) => {
        console.log(e);
        this.setState({ img: login });
        this.setState({ error: true });
      });
  };
  render() {
    return (
      <div className="authBox">
        <div className="leftBox">
          <div className="bgGreen"></div>
          <div className="imageAuth"></div>
        </div>
        <div className="rightBox">
          <div className="bgRed">
            <div className="logoplace">
              <img
                src={notag}
                alt="L"
                style={{ height: 200, width: 300 }}
                className="image"
              />
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
                <input
                  type="password"
                  name={"password"}
                  onChange={this.handleChange}
                  className="inputPasswordbox"
                  placeholder="Password"
                />
              </div>
              {this.state.error && (
                <span className="errorMessage">Invalid Email or Password</span>
              )}
              <button onClick={this.handleLogin} className="buttons">
                <img src={this.state.img} className="iconSign" alt="b" />
                Login
              </button>
              <button className="facebookbutton">
                <img src={facebook} className="icon" alt="b" />
                Facebook
              </button>
              <button className="Gmailbutton">
                <img src={google} className="icon" alt="b" />
                Google
              </button>
            </div>
            <div className="registerbutton">
              <a href={"register"} style={{ color: "white" }}>
                Register
              </a>
            </div>
            <div className="forgotbutton">
              <a href={"/forgot"} style={{ color: "white" }}>
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
