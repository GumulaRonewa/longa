import React from "react";
import {
  FaComment,
  FaRegChartBar,
    FaHeart,
  FaLeaf,
  FaFlag
} from "react-icons/fa";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";

import './feed.css'
const Posts = (feed) => {
  console.log(feed)
 var feeds=feed.feed;
 var image=true;
     const [value, setValue] = React.useState(feeds[3]?"secondary":'');
     const [total, setTotal] = React.useState(feeds[4]);
      const handleClickrep=()=>{
        var window=feed.window;
       var path="/feed/"+feeds[2];
        window.open(path,"_self");
}
 const handleClick=()=>{
            var databit={userID:sessionStorage.getItem("userId"),postID:feeds[2]}
  if(value !== 'secondary'){
      setTotal(1+total);

   setValue('secondary');
    axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed/like`, // First page at 0
       data:databit,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{

       console.log(res.data)
    })
  }
  else{
       setValue('');
        setTotal(total-1);

     axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed/like`, // First page at 0
       data:databit,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res.data)
    })
  }
 }
  return (
    <div className="postss">
      <div className="postss__first">
          <Avatar src={image?"https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg":"use"} alt='R' />
        <div className="posts__first__name">
          <strong>{feeds[0]}</strong> 
        </div>
        
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
        {feeds[1]}
        </div>
        {image &&
        <div className="postss__details__img">
          <img style={{width:"94%",height:"40vh"}} src="https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg" alt="post" />
        </div>
      }
        <div className="reactions">
          <span style={{color:"black"}}>
            <IconButton onClick={handleClickrep}>
            <FaComment className="re" /> 
            </IconButton>
            {feeds[5]}
          </span>
          <span>
            <IconButton onClick={handleClick}>
            <FavoriteIcon color={value}/> 
            </IconButton>
            {total}
          </span>
          <span style={{color:"black"}} >
            <IconButton>
            <FaFlag className="re" />
            </IconButton> 
          
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
