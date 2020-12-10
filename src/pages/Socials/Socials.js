import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/bg.jpg";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Socials = ({ twitter, setTwitter, socket, apiUrl }) => {
  return (
    <Container>
      <Wrapper>
        <Sidebar
          twitter={twitter}
          setTwitter={setTwitter}
          socket={socket}
          apiUrl={apiUrl}
        />
        <Main twitter={twitter} setTwitter={setTwitter} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
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

export default Socials;
