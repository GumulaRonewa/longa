import React, { Component } from "react";

import styled from "styled-components";
import axios from "axios";

import Post from "./Post";

import SinglePost from "./SinglePost";
 import SinglePostAdmin from "./SinglePostAdmin"
const Container = styled.div`
  width: auto;
  margin-left: 1rem;
  position: relative;
  padding: 10px 1rem;
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
    <Container>
     <SinglePostAdmin post={admin} />
      <Post />
                  {post.map((item)=> (

      <SinglePost post={item}/>
      ))}
    </Container>
  );
};

export default Feed;
