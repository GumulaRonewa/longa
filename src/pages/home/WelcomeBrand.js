import React, { Component } from "react";
import './home.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import bgImg from "../../assets/bg.jpg";

export default class WelcomeBrand extends Component {
   

  render(){
  	 return(

        <Containers2>
          <Wrapper>
            <Sidebar window={window}/>
            <Main window={window}/>
          </Wrapper>
        </Containers2>
  	 	)
  }
 }



const Sidebar = (props) => {
  
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="Longa-Money" />
      </LogoWrapper>
     <div>
        <h4>
          Add another <span onClick={() =>{props.window.open("/registerbrands","_self")}}>Campaign</span>
        </h4>
      </div>
    </Container>
  );
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
        Thank you for your submission, we will be in touch with you soon.

      </h1>
<div className={'addCam'}>
        <h4>
          Add another <span onClick={() =>{props.window.open("/registerbrands","_self")}}>Campaign</span>
        </h4>
      </div>
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
`;