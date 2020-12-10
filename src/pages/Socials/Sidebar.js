import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";

const Sidebar = ({ twitter, setTwitter, apiUrl, socket }) => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    socket.on("user", (user) => {
      setTwitter(user);
      console.log(user);
      openPopup().close();
    });
  });

  // socket.on("user", (user) => {
  //   setTwitter(user);
  //   console.log(user);
  //   openPopup().close();
  // });

  const startAuth = () => {
    setPopup(openPopup());
    console.log(popup);
  };

  const openPopup = () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const url = `${apiUrl}/twitter?socketId=${socket.id}`;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`
    );
  };
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Link Socials</h3>

        <button className="signin-btn" onClick={startAuth}>
          Twitter
        </button>
        <button className="signin-btn">Instagram</button>
        <button className="signin-btn">Facebook</button>
        <button className="signin-btn">Youtube</button>
      </Form>
      <div>
        <h4>
          Don't have an account? <span>Sign Up</span>
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
