import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Influencer Marketing. Redesigned.</h5>
      <h1>Bid.</h1>
      <h1>Post.</h1>
      <h1>Earn.</h1>
      <h1>It's that easy!</h1>
      
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #0f81c7;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #0f81c7;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #0f81c7;
      transform: translateY(-5px);
    }
  }
  .readmore {
    color: #0f81c7;
    background: transparent;
    border: 3px solid #0f81c7;
    &:hover {
      box-shadow: 0px 17px 16px -11px#0F81C7;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
