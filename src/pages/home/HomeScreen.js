import React, { Component } from "react";
import './home.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class HomeScreen extends Component {
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
  	 	  <div className={'home'}>
           <div className={'thebox'}>
             <div className={'round'}>
                <p className={'headertext'}>Campaigns</p>
             </div>
              <List>
                <ListItem>
                  <div className={'homelistdiv'}>
                  </div>
                </ListItem>
                 <ListItem>
                  <div className={'homelistdiv'}>
                  </div>
                </ListItem>
                <ListItem>
                  <div className={'homelistdiv'}>
                  </div>
                </ListItem>
              
             </List>
          </div>
  	 	  </div>
  	 	)
  }
 }