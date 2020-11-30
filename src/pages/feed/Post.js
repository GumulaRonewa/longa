import React from "react";

import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";
import { Main, NavBar, BoxContent, Content } from "./styled";

import './feed.css'
const Posts = (feed) => {
 var feeds=feed.feed;
 var image=typeof feeds[6]==='undefined' ;
 image =!image;
 var replies=feeds[7]
     const [value, setValue] = React.useState(true?'fas fa-heart pink':'fas fa-heart');
     const [total, setTotal] = React.useState(feeds[4]);
     const [comment, setComment] = React.useState(false);
     const [rep, setviewRep] = React.useState(false);
     const [repliess, setReplies] = React.useState([]);

       const [text, setText] = React.useState("");
     const handleText=(e)=>{
  setText(e.target.value)
}
 const handleComment=(e)=>{
  setComment(!comment)
}
const handleRep=(e)=>{
   setReplies(replies)
        console.log(repliess)
  setviewRep(!rep)
}
      const handleClickrep=()=>{
        var window=feed.window;
       var path="/feed/"+feeds[2];
        window.open(path,"_self");
}
 const handlePost =() =>{
                const form= new FormData();
var use=sessionStorage.getItem('surname') +" "+sessionStorage.getItem('name');
    console.log(use)
    console.log("top")
      form.append("username", use);
      form.append("name", sessionStorage.getItem('name'));
      form.append("surname", sessionStorage.getItem('surname'));
      form.append("userID", sessionStorage.getItem("userId"));
      form.append("postID", feeds[2]);
      form.append("text", text);
      console.log(form.get('postID'))
       axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed/comment`, // First page at 0
     data:form,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)
 setText("");
    })
      
}
 const handleClick=()=>{
            var databit={userID:sessionStorage.getItem("userId"),postID:feeds[2]}
  if(value !== 'null'){
      setTotal(1+total);

   setValue('fas fa-heart pink');
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
       setValue('fas fa-heart');
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
    <div >
  <div className="post-box">
              <div className="profile-nav">
                <div className="user-box">
                  <Avatar
                   style={{width:40,height:40}}
                    src={'L'} alt={'L'}
                  />
                  <div>
                    <span style={{fontSize:15}}>{feeds[0]}</span>

                  </div>
                </div>
                <p>{feeds[1]}</p>
              </div>
              <div className="video-container">
                      {image &&

                <img
                    src={feeds[6]}
                    alt="profile"

                    style={{width:'90%',marginLeft:10}}
                  />
                }
              {false &&
                <video controls>
                  <source
                    src="https://drive.google.com/file/d/1888llEbemqPaw5_F0JZhKF_x9lN_ntko.mp4"
                    type="video/mp4"
                  />
                </video>
              }
                <div className="likes-box">
                  
                  <i className="fas fa-heart pink"></i>
                  <span style={{color:'white'}} className="likes-span">{feeds[4]} likes.</span>
                  <i className="far fa-comments" style={{color:'white'}} />
                  <span style={{color:'white'}} onClick={handleRep} className="likes-span">{feeds[5]} Comments</span>
                </div>
              </div>
              <div className="media-actions-container">
                <div className="media-actions">
                  <i onClick={handleClick} className={value}>
                    <h2 className="blue">Like</h2>
                  </i>
                  <i onClick={handleComment} style={{color:'white'}} className="far fa-comments">
                    <span style={{color:'white'}}>Comments</span>
                  </i>
                  <i style={{color:'white'}} className="fas fa-share">
                    <h2 style={{color:'white'}}>Share</h2>
                  </i>
                </div>
               {comment &&
                <div className="comments-container">
                  <Avatar
                    style={{width:30,height:30}}
                    src={'https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg'}
                    alt="profile-2"
                  />
                  <div className="input-camera">
                    <input  onChange={handleText} defaultValue={text} placeholder="Add a comment..." />
                    <i onClick={handlePost} className="fas fa-paper-plane"></i>
                  </div>
                </div>
              }
              {rep &&
              <div>
              {replies.map(({_id,text,username})=> (
              <div style={{width:"50%"}} className={'comment'}>
               <div>
               <Avatar
                    style={{width:40,height:40}}
                    src={'L'} alt={'L'}
                  />
               </div>
              <div>     
                         <p style={{color:"black"}}>
                          <span>{username}</span>
                          {text}</p>

              </div>
              </div>
                ))}
              </div>
             }
              </div>
            </div>
     </div>
  );
};

export default Posts;
