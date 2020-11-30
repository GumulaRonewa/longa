 import React, { Component } from "react";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
 export default class Notification extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      details:[]
    };
  }
  componentWillMount() {
                var data={userID:sessionStorage.getItem("userId")}
        console.log(data);

     axios({
         method: 'Get',
         url: `https://longa-money.herokuapp.com/api/notification`, // First page at 0
           data:data,

       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
      console.log(res.data)
        this.setState({details:res.data})
    }).catch((e) => {
        console.log(e);
      });
  }


  render(){
     return(
          <div className={'proscreen'}>
          </div>
      )
  }
}