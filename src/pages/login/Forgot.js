import React, { Component } from "react";
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import bgImg from "../../assets/bg.jpg";
import axios from "axios";
import Input from "../SignUp/Input";
import Loading from "../loading/loading";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

class Forgot extends React.Component {
 /* constructor(props) {
    super(props);

    this.state = {
      email: null,
      img:login,
      password: null,
      error: false,
    };
  }
  componentWillMount(){
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
            this.setState({img: loading });
            const user = { email: this.state.email};
        axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/user/password-reset`, // First page at 0
     data:user,
    
    }).then((res) => {
      
      window.open("'https://longamoney.groundrabbit.co.za/password-link.html'", "_self");
         
      }).catch((e) => {
                    this.setState({img: login });

      });

       };*/
  render() {
    return (
      
        <Containers2>
          <Wrapper>
            <Sidebar window={window}/>
            <Main window={window}/>
          </Wrapper>
        </Containers2>
    );
  }
}
export default Forgot;

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
 handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSub = (e) => {
        e.preventDefault();
                                    this.setState({load: true });

      const user = { email: this.state.email};
        axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/user/password-reset`, // First page at 0
     data:user,
    
    }).then((res) => {
              toast("Success")

      window.open("https://longamoney.groundrabbit.co.za/password-link.html", "_self");
         
      }).catch((e) => {
        toast("Invalid Email")
                            this.setState({load: false });

      });
  }
render(){    
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="Longa-Money" />
      </LogoWrapper>
     <div>
         <Form>
        <h3>Forgot Password</h3>

        <Input
          placeholder="Email address"
          onChange={this.handleChange}
          name="email"
        />
        {this.state.load &&(
            <Loading style={{position:'absolute',zIndex:2}} loading={false} />
          )}
<ToastContainer />
        <button onClick={this.handleSub} className="continue" >
          Submit
        </button>
      </Form>
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

  button.continue {
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

const Main = (props) => {
  return (
    <Containers>
      <h1 style={{marginLeft:50}}>
        Please enter your email address and a reset link will be sent to you.

      </h1>

    </Containers>
  );
};

const Containers2 = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
 @media (max-width: 900px) {
      display: none;
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
  h1 {
    font-size: 65px;
    font-weight: 900;
    margin-left:50;
    color: #343434;
    
  }
`;
const LogoWrapper = styled.div`
  img {
    height: 8rem;
  }
`;

const Container = styled.div`
  min-width: 400px;
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
    h1 {
    font-size: 35px;
    font-weight: 200;
    margin-left:50;
    color: #343434;
    
  }
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