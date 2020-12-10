import React from "react";
import styled from "styled-components";

const Main = ({ twitter, setTwitter }) => {
  const { name, photo } = twitter;
  return (
    <Container>
      <h2>Please link at least one social media account</h2>
      <p>{name ? name : ""}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;
