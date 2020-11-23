import React, { Component } from "react";
import './feed.css';
import List from "@material-ui/core/List";
import Menu from '@material-ui/core/Menu';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import axios from "axios";
import Post from './Post';
import Reply from './Reply';
import Comment from './Comment';
import TweetBox from './TweetBox';
import Divider from "@material-ui/core/Divider";
import { Switch, Route, Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

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
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
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
           <TweetBox />
        
                     <List>
                   
                                  {feed.map(({_id,text,username,likes,comments})=> (
                  <div>
                     <Divider />
                      <Post feed={[username,text,_id,likes.includes(sessionStorage.getItem("userId")),likes.length,comments.length]} window={props.window} />
                     <Divider/>
                                          </div>

                                ))}

                 </List>
                
               
        </div>
      )
  
 }
     const rep=[{name:"image"},{name:"image"}]

  class Individual   extends React.Component{
      componentWillMount(){
      var path=window.location.pathname;
      var id=path.substring(6,path.length)
      console.log(id)
        var data={postID:"5fbb5507ece625001761640c"}

    axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed/post`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
         console.log(res.data)
    })
  }

     
    render(){
       return(
        <div className={'feedhome'}>
                 <Divider />
                  <Divider/>
                  <Comment />
                                  <Divider/>

                     <List style={{marginTop:5}}>
                   
         {rep.map(({_id,text,username})=> (
                  <div>
                     <Reply />
                    </div>

              ))}

                 </List>
                
               
        </div>
      )
    }
  
 }
  
  export default class FeedScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      feed:[]
    };
  }
  componentWillMount(){
    axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
         console.log(res.data['posts'])
        this.setState({feed:res.data['posts']})
    })
  }
  componentDidMount() {
 /*   const update =()=>{
axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/feed`, // First page at 0
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
         console.log(res.data['posts'])
        this.setState({feed:res.data['posts']})
    })
    }
    setInterval(update,5000);*/
  }


  render(){
     return(
 <Switch>
              <Route
                exact
                path="/feed"
                render={(props) => (
                  <Feed window={window} feed={this.state.feed} />
                )}
              />
              <Route
                exact
                path="/feed/:id"
                render={(props) => (
                  <Individual />
                )}
              />
         </Switch>
      )
  }
 }