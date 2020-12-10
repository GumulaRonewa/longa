import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "../SignUp/Input";
import Check from "./Check";

const Sidebar = ({ formData, setForm, navigation }) => {
  const {
    nameOfBrand,
    nameAndSurname,
    email,
    contactNumber,
    usedBefore,
  } = formData;
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="Longa-Money" />
      </LogoWrapper>
      <Form>
        <h3>Contact Us</h3>

        <Input
          placeholder="Name of Brand"
          onChange={setForm}
          value={nameOfBrand}
          name="nameOfBrand"
        />
        <Input
          type="email"
          placeholder="Email*"
          onChange={setForm}
          value={email}
          name="email"
        />
        <Input
          placeholder="Name & Surname*"
          onChange={setForm}
          value={nameAndSurname}
          name="nameAndSurname"
        />
        <Input
          placeholder="Contact Number*"
          onChange={setForm}
          value={contactNumber}
          name="contactNumber"
        />
        <Check onChange={setForm} checked={usedBefore} name="usedBefore" />

        <button className="continue" onClick={() => navigation.next()}>
          Continue
        </button>
      </Form>
      <div>
        <h4>
          Not a brand? <span>Home</span>
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

export default Sidebar;
