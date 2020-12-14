import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

import Post from "./Post";
import '../home/home.css';

import SinglePost from "./SinglePost";
 import SinglePostAdmin from "./SinglePostAdmin"
const Container = styled.div`
  width: auto;
  margin-left: 1rem;
  position: relative;
  min-height:100vh;
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

function Feed(props){
    const [post, setPost] = React.useState([]);
    const [admin, setAdmin] = React.useState({});
  
  React.useEffect(() => {
    axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
         setPost(res.data['posts'])
         setAdmin(res.data['pinned'])
    })
  });
  return (
        <div className={'home'} style={{marginLeft:"1rem"}} >
      <Post />
                  {post.map((item)=> (

      <SinglePost post={item}/>
      ))}
    </div>
  );
};

export default Feed;
