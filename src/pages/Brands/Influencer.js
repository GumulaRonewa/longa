import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "../SignUp/Input";
import Check from "./Check";
import DateRange from "./DateRange";
import Loading from "../loading/loading";

const Influencer = ({ formData, setForm, navigation }) => {
  const { instagram, facebook, twitter, youtube } = formData;
 const handle= (e)=>{
  e.preventDefault();
   console.log(formData); 

 }
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Campaign Information</h3>

        <Input
          placeholder="Number of Instagram posts"
          min="0"
          type="number"
          onChange={setForm}
          value={instagram}
          name="instagram"
        />
        <Input
          placeholder="Number of Twitter posts"
          min="0"
          type="number"
          onChange={setForm}
          value={twitter}
          name="twitter"
        />
        <Input
          placeholder="Number of Youtube posts"
          min="0"
          type="number"
          onChange={setForm}
          value={youtube}
          name="youtube"
        />
        <Input
          placeholder="Number of Facebook posts"
          min="0"
          type="number"
          onChange={setForm}
          value={facebook}
          name="facebook"
        />
        <ButtonWrapper>
          <button className="back" onClick={() => navigation.previous()}>
            Back
          </button>
          <button className="send" onClick={handle}>Submit</button>
        </ButtonWrapper>
      </Form>
      <div>
        <h4>
          Not a brand? <span>Home</span>
        </h4>
      </div>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button.send {
    width: 20%;

    max-width: 350px;
    min-width: 100px;
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
  button.back {
    width: 20%;

    max-width: 350px;
    min-width: 100px;
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

export default Influencer;
