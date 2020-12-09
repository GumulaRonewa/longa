import React, { Component } from "react";
import "./feed.css";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import Post from "./Post";
import Reply from "./Reply";
import Comment from "./Comment";
import TweetBox from "./TweetBox";
import Divider from "@material-ui/core/Divider";
import { Switch, Route, Link } from "react-router-dom";
import { Main, NavBar, BoxContent, Content } from "./styled";
import "font-awesome/css/font-awesome.min.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "white",

    color: "white",
    height: 2,
    padding: "0 30px",
  },
});
function Feed(props) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelect] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [file, setfile] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [post, setPost] = React.useState(null);
  //const [feed, setFeed] = React.useState(null);
  const [color, setColor] = React.useState(null);
  var feed = props.feed;
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
      name: sessionStorage.getItem("name"),
      surname: sessionStorage.getItem("surname"),
      text: post,
    };
    console.log(data);

    const fd = new FormData();
    fd.append("data", JSON.stringify(data));
    fd.append("file", file);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/feed`, // First page at 0
      data: data,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res);
    });
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <div className={"feedhome"}>
      <TweetBox />
      <Divider style={{ marginTop: 10 }} className={classes.root} />

      <Content.HorizontalTab>
        {feed.map(({ _id, text, username, likes, comments, url }) => (
          <div>
            <Post
              style={{ paddingTop: 10 }}
              feed={[
                username,
                text,
                _id,
                likes.includes(sessionStorage.getItem("userId")),
                likes.length,
                comments.length,
                url,
                comments,
              ]}
              window={props.window}
            />
            <Divider className={classes.root} />
            <Divider />
          </div>
        ))}
      </Content.HorizontalTab>
    </div>
  );
}
const rep = [{ name: "image" }, { name: "image" }];

class Individual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      post: null,
    };
  }
  componentDidMount() {
    var path = window.location.pathname;
    var id = path.substring(6, path.length);
    var post = { postID: id };
    console.log(post);
    this.setState({ id: id });
    axios({
      method: "POST",
      url: `http://localhost:5000/api/feed/post`, // First page at 0
      data: post,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      this.setState({ post: res.data });
    });
  }

  render() {
    return (
      <div className={"feedhome"}>
        <Divider />
        <Divider />
        <Post />
        <Comment id={this.state.id} />
        <Divider />

        <List style={{ marginTop: 5 }}>
          {rep.map(({ _id, text, username }) => (
            <div>
              <Reply />
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: [],
    };
  }
  componentWillMount() {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/feed`, // First page at 0
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data["posts"]);
      this.setState({ feed: res.data["posts"] });
    });
  }
  componentDidMount() {
    /*   const update =()=>{
axios({
      method: 'GET',
     url: `http://localhost:5000/api/feed`, // First page at 0
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

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/feed"
          render={(props) => <Feed window={window} feed={this.state.feed} />}
        />
        <Route exact path="/feed/:id" render={(props) => <Individual />} />
      </Switch>
    );
  }
}
