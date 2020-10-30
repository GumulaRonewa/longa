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
             <div className={'box'}>
               <div className={'theleftbox'} >
                   <List>
                     <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"T"}
                      />
                        <ListItemText
                            style={{ marginLeft: 5 }}
                            primary={"Tammy"}
                            secondary={"Lorem ipsum dolor sit amet, consetetur sa"}
                        />
                     </ListItem>
                      <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"B"}
                      />
                        <ListItemText
                            style={{ marginLeft: 5 }}
                            primary={"Becky"}
                            secondary={"Lorem ipsum dolor sit ame"}
                        />
                     </ListItem>
                     <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"L"}
                      />
                        <ListItemText
                            style={{ marginLeft: 5 }}
                            primary={"Laura"}
                            secondary={"Lorem ipsum dolor si non"}
                        />
                     </ListItem>
                   </List>
               </div>
               <div className={'therightbox'} >
                 <div>
                 <div className={'inputdiv'}>
                 <TextField id="standard-basic" fullWidth  label="Reply" />
                 </div>
                   <div className={'emojibox'} >
                      <div className={'theemojileftbox'} >
                        <div className={'emojirow'} >
                        <EmojiEmotionsOutlinedIcon />
                        <div style={{fontSize:20,marginLeft:10}}>#</div>
                        <AttachFileOutlinedIcon  style={{marginLeft:10}} />
                        </div>
                      </div>
                      <div className={'theemojirightbox'}>
                        <SendIcon color={'primary'}/>
                      </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
  	 	  </div>
  	 	)
  }
 }