import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "../SignUp/Input";
import axios from "axios";
import Loading from "../loading/loading";

class Sidebar extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: false,
      load: false,
    };
  }
  componentWillMount(){
    localStorage.clear();
    sessionStorage.clear();
  }
  handleChange = (e) => {
    e.preventDefault();
                        this.setState({error: false });

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
   handleLogin = (e) => {
                            this.setState({load: true });

    e.preventDefault();
            const user = { email: this.state.email,password: this.state.password };
            console.log(user)
         axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/user/login`,
      data: user,
      }).then((res) => {
      sessionStorage.setItem('token',res.data['token']);
      var user=res.data['user'];
      var banking=user['bankingDetails'];
      banking=banking.accountNumber;
      banking=banking==="";
     sessionStorage.setItem('value',0);
      sessionStorage.setItem('name',user['name']);
      sessionStorage.setItem('bankings',banking);
      sessionStorage.setItem('surname',user['surname']);
      sessionStorage.setItem('image',user['image']);
      sessionStorage.setItem('userId',user['_id']);
      window.open("home", "_self");
         
      }).catch((e) => {
                 console.log(e);
                    this.setState({error: true });
                                     this.setState({load: false });

      });

       };

  render(){
    return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Sign In</h3>

        <Input name={'email'} onChange={this.handleChange} type="email" placeholder="Email" />
        <Input name={'password'} style={{position:'absolute',zIndex:1}} onChange={this.handleChange} type="password" placeholder="Password" />
        {this.state.load &&(
            <Loading style={{position:'absolute',zIndex:2}} loading={false} />
          )}
        
        {this.state.error  && (
                         <span className="errorMessage">Invalid Email or Password</span>
                       )}
        <a href={"/forgot"} style={{ color: "grey" }}>Forgot Password?</a>
        <button onClick={this.handleLogin} className="signin-btn">Sign In</button>
        <button onClick={this.handleLogin} className="signin-btn">Sign In With Facebook</button>
        <button onClick={this.handleLogin} className="signin-btn">Sign In With Google</button>
      </Form>
      <div>
        <h4>
          Don't have an account? 
          <a style={{'text-decoration':"none"}} href={'/register'}>
          <span >Sign Up</span>
          </a>
        </h4>
      </div>
    </Container>
  );
  }
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button.signin-btn {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #0f81c7;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 8rem;
  }
`;

const Container = styled.div`
  min-width: 500px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
