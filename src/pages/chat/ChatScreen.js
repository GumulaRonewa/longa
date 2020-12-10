import React, { Component } from "react";
import './chat.css';
import MessageList from './MessageList';
import axios from "axios";

import ConversationList from './ConversationList';
import { Switch, Route, Link } from "react-router-dom";

export default class ChatScreen extends Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,

    };
  }
 


  render(){
  	 return(
  	 	  <div className={'chathome'}>
             <Switch>
              <Route
                exact
                path="/chat"
                render={(props) => (
                  <MessageList/>
                )}
              />
              <Route
                exact
                path="/chat/:id"
                render={(props) => (
                  <MessageList/>
                )}
              />
         </Switch>
  	 	   </div>
  	 	)
  }
 }