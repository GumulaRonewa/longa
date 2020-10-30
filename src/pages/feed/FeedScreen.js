import React, { Component } from "react";
import './feed.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from '@material-ui/core/TextField';
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SendIcon from '@material-ui/icons/Send';
import Divider from "@material-ui/core/Divider";

const phases=[
    {id:"1",phase:"Phase 1",plan:"Business plan",duration:"6 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"3",phase:"Phase 3",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"21",phase:"Phase 4",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"22",phase:"Phase 5",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"24",phase:"Phase 6",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"223",phase:"Phase 7",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},

]
export default class FeedScreen extends Component {
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
  	 	  <div className={'feedhome'}>
           <div className={'feedbox'}>
             <div className={'feedround'}>
                <p className={'feedheadertext'}>Feed</p>
             </div>
                <div className={'sbox'}>
               <div className={'feedleftbox'} >
               <div className={'feedmessagebox'}>
               <div>
                 <div className={'feedinputdiv'}>
                 <TextField id="standard-basic" fullWidth placeholder={"What's on your mind?"}  />
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
                  <div className={'liststyle'}>
                     <List className={'scroll'}>
                                  {phases.map(({id,phase,plan,duration,image})=> (
                  <div>
                     <Divider />
                        <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"T"}
                      />
                        <ListItemText
                            style={{ marginLeft: 5 }}
                            primary={phase}
                            secondary={"Lorem ipsum dolor sit amet, consetetur sa"}
                        />
                        <Badge badgeContent={5} max={9} color="secondary">
                    <FavoriteIcon color="secondary" />
                  </Badge>
                     </ListItem>
                     <Divider/>
                                          </div>

                                ))}

                 </List>
                
               </div>
                 
               </div>
                        <div className={'pinned'}>Pinned Post</div>

               <div className={'feedrightbox'} >

                  <div className={'posttext'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,a 
                  </div>
               </div>
             </div>
          </div>
  	 	  </div>
  	 	)
  }
 }