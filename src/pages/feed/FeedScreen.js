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
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import ReplyIcon from '@material-ui/icons/Reply';
import axios from "axios";

 function Feed(props) {
  
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [selected, setSelect] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [file, setfile] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [post, setPost] = React.useState(null);
  //const [feed, setFeed] = React.useState(null);
  const [color, setColor] = React.useState(null);
  var feed=props.feed;
  const [likes, setlikes] = React.useState(46);
  const isMenuOpen = Boolean(anchorEl);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
        const isMenuOpen2 = Boolean(anchorEl2);
 
   const handleEmojiOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };
    const handleEmojiClose = () => {
    setAnchorEl2(null);
    handleMobileMenuClose();
  };
    const handleClick = () => {
       const data = {
          name:sessionStorage.getItem('name'),
          surname:sessionStorage.getItem('surname'),
          text:post
    };
    console.log(data);
    
    const fd = new FormData();
    fd.append("data", JSON.stringify(data));
    fd.append("file", file);
     axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
}
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
    const like = () => {
      if(color===null){
              setlikes(likes+1)
              setColor("secondary")
      }
      else{
         if(likes>4){
                        setlikes(likes-1)
              setColor(null)

         }
      }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleFile = (e)=> {
      setfile(e.target.files[0])
      var v=e.target.files[0];
      setName(v.name)
   }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const App = () => {
    const [chosenEmoji, setChosenEmoji] = React.useState(null);

    const onEmojiClick = (event, emojiObject) => {
              setPost(`${post}${emojiObject.emoji}`)

        setChosenEmoji(emojiObject);
    }

    return (
        <div>
            <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} skinTone={SKIN_TONE_MEDIUM_DARK} groupNames={{smileys_people:"PEOPLE"}}/>
        </div>
    );
};
  const renderEmojiMenu = (
    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      id={'id2'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen2}
      onClose={handleEmojiClose}
    >
       <App />
    </Menu>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      id={"id"}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <input
          type="file"
           accept="image/x-png,image/gif,image/jpeg"
           onChange={handleFile}
          style={{width:'100%'}}                
          id="customFile"
         />  
    </Menu>
  );

    const handleChange = (e) => {
        var m= e.target;
        setPost(m.value)
    }
  	 return(
  	 	  <div className={'feedhome'}>
           <div className={'feedbox'}>
             <div className={'feedround'}>
                <p className={'feedheadertext'}>Feed</p>
             </div>
                <div className={'sbox'}>
               <div className={'feedleftbox'} >
                                      <Divider />

                       <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"T"}
                      />
                        <ListItemText
                            style={{ marginLeft: 5 }}
                            primary={"Admin :Pinned Post"}
                            secondary={"Lorem ipsum dolor sit amet, consetetur sa"}
                        />
                       <IconButton onClick={like}>
                        <Badge badgeContent={likes} max={99} color="secondary">
                    <FavoriteIcon color={`${color}`} />

                  </Badge>
                  </IconButton>

                     </ListItem>
                                                           <Divider />

               <div className={'feedmessagebox'}>
               <div>

                 <div className={'feedinputdiv'}>
                 <TextField id="standard-basic" onChange={handleChange}    value={post} fullWidth placeholder={"What's on your mind?"}  />
                 </div>
                   <div className={'emojibox'} >
                      <div className={'theemojileftbox'} >
                        <div className={'emojirow'} >
                        <IconButton
                            aria-label="account of current user"
                            aria-controls={"id2"}
                            aria-haspopup="true"
                            onClick={handleEmojiOpen}
                            color="inherit"
                        >
                        <EmojiEmotionsOutlinedIcon />
                        </IconButton>
                         <IconButton>
                        <div style={{fontSize:20,marginLeft:10}}>#</div>
                        </IconButton>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls={"id"}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                        <AttachFileOutlinedIcon  style={{marginLeft:10}} />
                        </IconButton>
                        <div style={{marginTop:10}}>{name}</div>
                        </div>
                      </div>
                      <div className={'theemojirightbox'}>
                        < IconButton onClick={handleClick}>
                        <SendIcon color={'primary'}/>
                        </IconButton>
                      </div>
                      {renderMenu}
                      {renderEmojiMenu}
                   </div>
                 </div>

                 </div>
                  <div className={'liststyle'}>
                     <List className={'scroll'}>
                   
                                  {feed.map(({id,text,username})=> (
                  <div>
                     <Divider />
                        <ListItem>
                       <Avatar
                           style={{ height: 60, width: 60, right: 2 }}
                        src={'r'}
                        alt={"T"}
                      />
                        <div className='postsection'>
                          <div className={'username'}>{username} </div>
                          <div className={'postext'}> {text}

 
                          </div>
                        </div>
                        <div className='iconcol'>
                    <IconButton>
                        <Badge badgeContent={5} max={9} color="secondary">
                    <FavoriteIcon color="secondary" />
                  </Badge>
                  </IconButton>
                   <IconButton>
                        <Badge badgeContent={1} max={99} color="secondary">
                    <ReplyIcon color="secondary" />
                  </Badge>
                  </IconButton>
                  </div>
                     </ListItem>
                     <Divider/>
                                          </div>

                                ))}

                 </List>
                
               </div>
                 
               </div>

             
             </div>
          </div>
  	 	  </div>
  	 	)
  
 }
  export default class FeedScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      feed:[]
    };
  }
  componentWillMount() {
     axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
        this.setState({feed:res.data})
    })
  }


  render(){
     return(

        <Feed window={window} feed={this.state.feed} />
      )
  }
 }