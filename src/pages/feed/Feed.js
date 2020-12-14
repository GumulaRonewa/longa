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
    const [render, setrender] = React.useState(true);
   
  React.useEffect(() => {
    if(render){
    axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
      setPost([])
        setPost(res.data['posts'])
          setAdmin(res.data['pinned'])
         setrender(false)
    })
  }
  });
  return (
        <div className={'home'} style={{marginLeft:"1rem"}} >
        {!render &&
              <SinglePost update={setrender} post={admin}/>
            }

      <Post update={setrender} />
                  {post.map((item)=> (

      <SinglePost update={setrender} post={item}/>
      ))}
    </div>
  );
};

export default Feed;
