import React, { Component } from "react";
import './chat.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from '@material-ui/core/TextField';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SendIcon from '@material-ui/icons/Send';
import Messenger from './Messenger';

export default class ChatScreen extends Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,

      password: null,
      error: false,
    };
  }

  render(){
  	 return(
  	 	  <div className={'chathome'}>
           <div className={'chatbox'}>
             <div className={'chatround'}>
                <p className={'headertext'}>Messages</p>
             </div>
             <Messenger />        
            </div>
  	 	   </div>
  	 	)
  }
 }