import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
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

export default function Comment() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
     
      <InputBase
        className={classes.input}
        multiline
        fullWidth
        rowsMax={7}
        placeholder="reply"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
