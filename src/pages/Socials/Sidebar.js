import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";

function Sidebar () {
  localStorage.setItem('skip',"true");

  const AddInsta = (e) => {
  e.preventDefault();
  localStorage.setItem('skip',"true");

    //handlePopMenuOpen(event);
    var data = {
      userID: localStorage.getItem("userId"),
    };
    console.log(data);

    window.open(
      `https://longa-money.herokuapp.com/api/i/auth/insta/${data.userID}`,
      "_self"
    );
    // axios({
    //   method: "GET",
    //   url: `https://longa-money.herokuapp.com/api/i/auth/insta/${data.userID}`, // First page at 0
    //   data: data,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const AddYoutube = (e) => {
  	  e.preventDefault();
  localStorage.setItem('skip',"true");

    var data = { userID: localStorage.getItem("userId") };
    console.log(data);
    window.open(`https://longa-money.herokuapp.com/api/y/auth/yt/${data.userID}`, "_self");
    // axios({
    //   method: "GET",
    //   url: `https://longa-money.herokuapp.com/api/y`, // First page at 0
    //   data: data,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  const AddTwitter = (e) => {
  	  e.preventDefault();
  localStorage.setItem('skip',"true");

    var data = { userID: localStorage.getItem("userId") };
    console.log(data);

    window.open(`https://longa-money.herokuapp.com/api/t/auth/tw/${data.userID}`, "_self");
    // axios({
    //   method: "GET",
    //   url: `https://longa-money.herokuapp.com/api/t/auth/twitter/${data.userID}`, // First page at 0
    //   data: data,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  const AddFacebook = (e) => {
  	  e.preventDefault();

    var data = { userID: localStorage.getItem("userId") };
    console.log(data);
  localStorage.setItem('skip',"true");

    window.open(`https://longa-money.herokuapp.com/api/fb/auth/fb/${data.userID}`, "_self");
    // axios({
    //   method: "POST",
    //   url: `https://longa-money.herokuapp.com/api/fb`, // First page at 0
    //   data: data,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

    return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Link Socials</h3>

        <button className="signin-btn" onClick={AddTwitter}>
          Twitter
        </button>
        <button className="signin-btn" onClick={AddInsta}>Instagram</button>
        <button className="signin-btn" onClick={AddFacebook}>Facebook</button>
        <button className="signin-btn" onClick={AddYoutube}>Youtube</button>
      </Form>
      <h4>
         <span onClick={() =>window.open("/home","_self")}>Skip</span>
        </h4>
      
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
