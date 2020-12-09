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
 
  return (
    <div className={'compose'}>
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <AttachFileIcon />
      </IconButton>
      
      <InputBase
        className={classes.input}
        multiline
        rowsMax={7}
        placeholder="What's on your mind?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
