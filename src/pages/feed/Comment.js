import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "99%",

    height:'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize:20
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Comment(props) {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const handlePost =() =>{
                const form= new FormData();
    var use=sessionStorage.getItem('surname') +" "+sessionStorage.getItem('name');
    console.log(use)
    console.log("top")
      form.append("username", use);
      
      form.append("userID", sessionStorage.getItem("userId"));
      form.append("postID", props.id);
      form.append("text", text);
      console.log(form.get('postID'))
       axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/feed/comment`, // First page at 0
     data:form,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)
 setText("");
    })
      
}
const handleText=(e)=>{
  setText(e.target.value)
}
  return (
    <Paper component="form" className={classes.root}>
     
      <InputBase
        className={classes.input}
        multiline
        fullWidth
        rowsMax={7}
        
        onChange={handleText}
        placeholder="reply"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton onClick={handlePost} color="primary" className={classes.iconButton} aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
