  
import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Picker } from "emoji-mart";
import axios from "axios";
import "emoji-mart/css/emoji-mart.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import './Compose.css'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "98%",
    marginLeft:10,
    height:50,
    borderRadius:20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: "95%",
    margin: 4,
  },
}));

 export default function Compose() {
  const classes = useStyles();
    const [file, setfile] = React.useState(null);
            const [text, setText] = React.useState('');
   var id=localStorage.getItem("userId")
  const handleText =(e)=>{
            setText(e.target.value)
          }
            const handlePost = () => {
    const form = new FormData();

    form.append("userID",id);
    form.append("senderID", id);
    form.append("text", text);
    form.append("file", file);

    axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/messages`, // First page at 0
      data: form,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
      setText("");

      setfile(null);
    }).catch((e) => {
                 console.log(e);
                 console.log(form.get("file"));
      });

  };
  const handleFile = (e) => {
    setfile(e.target.files[0]);
   

  };
  return (
    <div className={'compose'}>
    <Paper component="form" className={classes.root}>
      <IconButton>
          <input type="file"
          accept="image/x-png,image/gif,image/jpeg,video/mp4,video/x-m4v,video/*"
          onChange={handleFile}
          style={{ width:40,color:'transparent',backgroundColor:"transparent",opacity:0 }}
          id="customFile" />
            <AttachFileIcon style={{marginLeft:-25}} />
            
          </IconButton>
       {file &&
          <img src={URL.createObjectURL(file)} style={{width:40,height:40}} alt={'r'} />
        }
      <InputBase
        className={classes.input}
        onChange={handleText}
        multiline
        value={text}
        rowsMax={7}
        placeholder="Type a message"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton onClick={handlePost} color="primary" aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
    </div>
  );
}