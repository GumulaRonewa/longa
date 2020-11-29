import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Picker } from "emoji-mart";
import axios from "axios";
import "emoji-mart/css/emoji-mart.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "98%",
    marginLeft:10,
    height:150,
    borderRadius:1,
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

 function CustomizedInputBase() {
  const classes = useStyles();
   const [selected, setSelect] = React.useState(null);
      const [anchorEl, setAnchorEl] = React.useState(null);

  const [file, setfile] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [text, setText] = React.useState("");
 const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
      const isMenuOpen = Boolean(anchorEl);
const handlePost =() =>{
                const form= new FormData();

    form.append("name", sessionStorage.getItem('name'));
      form.append("surname", sessionStorage.getItem('surname'));
      form.append("text", text);
      form.append("file",file);
       axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
     data:form,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)
 setText("");
    setfile(null);
    })
      
}
const handleText=(e)=>{
  setText(e.target.value)
}
  const handleFile = (e)=> {
      setfile(e.target.files[0])
      var v=e.target.files[0];
      console.log(v)
      setName(v.name)
   }
     const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'right', horizontal: 'center' }}
      id={"id"}
      keepMounted
      transformOrigin={{ vertical: 'right', horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <div style={{height:300,width:400}}>
     {file &&

      <img style={{height:300,width:"100%"}} src={URL.createObjectURL(file)} alt={''} />
     }
      <input
          type="file"
           onChange={handleFile}
          style={{width:'100%'}}                
          id="customFile"
         /> 
      </div> 
      {file &&
              <button onClick={handleMenuClose} >Add</button>

      }
    </Menu>
  );
  return (
    <Paper component="form" className={classes.root}>
      <IconButton onClick ={handleMenuOpen} className={classes.iconButton} aria-label="menu">
        <AttachFileIcon />
      </IconButton>
      
      <InputBase
        className={classes.input}
        multiline
        rowsMax={7}
        onChange={handleText}
        placeholder="What's on your mind?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton onClick={handlePost} color="primary" className={classes.iconButton} aria-label="directions">
        <SendIcon />
      </IconButton>
      {renderMenu}
    </Paper>
  );
}

export default function TweetBox() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifycontent: "center",
        height: "100%",
        width: "100%",
        flexDirection: "column"
      }}
    >
      <CustomizedInputBase />
    </div>
  );
}