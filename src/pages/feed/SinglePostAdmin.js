import React from "react";
import "./SinglePost.css";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ReactWebMediaPlayer from 'react-web-media-player';

import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    border:10,
    borderColor:"red",
    marginLeft:4,
    width: "99%",
    borderRadius:20,
    height: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
function Comment(props) {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handlePost = () => {
    const form = new FormData();
    

    form.append("userID", sessionStorage.getItem("userId"));
    form.append("postID", props.id);
    form.append("text", text);
        form.append("name", sessionStorage.getItem("name"));
        form.append("surname", sessionStorage.getItem("surname") );

    axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/feed/comment`, // First page at 0
      data: form,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setText("");
    });
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        multiline
        fullWidth
        rowsMax={7}
        value={text}
        onChange={handleText}
        placeholder="Add a comment"
        inputProps={{ "aria-label": "search google maps" }}
      />

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={handlePost}
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
const SinglePostAdmin = (prop) => {
  const post=prop.post;
  var image=typeof post.url==='undefined' ;

 var id=false;
 image =!image;
  if(image){
    id= post.url.slice(post.url.length - 4)
    id=id===".mp4";

  }
      const [total, setTotal] = React.useState(0);
  const [rep, setviewRep] = React.useState(false);

const handleClick = () => {
  
  };
  const handleComment = (e) => {
    setviewRep(!rep);
  };

  return (
    <div>
      <div class="timeline-body">
        <div class="timeline-header">
          <span class="userimage">
            <Avatar
              src="L"
              alt="L"
            />
          </span>
          <span class="username">
            <a href="javascript:;">Longa Money Admin</a> <small></small>
          </span>
        </div>
        <div>
          <p>
            {post.content}
          </p>
           {image && !id &&

                <img
                    src={post.url}
                    alt="profile"
                    className={'imagezx'}

                    style={{width:'90%',marginLeft:10,maxHeight:400}}
                  />
                }
                           {id &&
                            <video className={'imagezx'} style={{width:'90%',marginLeft:10,minHeight:400}} controls>
              <source
                src={post.url}
                type="video/mp4"
              />
            </video>
     }
        </div>
        <div class="timeline-likes">
          <div class="stats-right">
            <span class="stats-text">0 Comments</span>
          </div>
          <div class="stats">
            <span class="fa-stack fa-fw stats-icon">
              <i class="fa fa-circle fa-stack-2x text-danger"></i>
              <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
            </span>

            <span class="stats-total">{total}</span>
          </div>
        </div>
        <div class="timeline-footer">
          <a href="javascript:;" onClick={handleClick} class="m-r-15 text-inverse-lighter">
            <i  class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
          </a>
          <a href="javascript:;"  class="m-r-15 text-inverse-lighter">
            <i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
          </a>
         
        </div>
        {rep && (
          <div>
          <Divider style={{marginTop:5}} />
 <div className="comments-container" >
              <Avatar
                style={{ width: 40, height: 40 }}
                src={
                  "DFG"
                }
                alt="L"
              />
              <Comment id={post._id} />
              
            </div>
                      <Divider style={{marginTop:5}} />

            </div> )}
            {rep && (
            <div>
              {post.comments.map(({ _id, text, username }) => (
                 <div key={_id} className="comment" style={{width:"100%"}}>
          <Avatar className="avatar" src={""} alt={'L'}/>
          <p>
            <span>{username}</span> 
            <br/>
            {text}
          </p>
        </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default SinglePostAdmin;