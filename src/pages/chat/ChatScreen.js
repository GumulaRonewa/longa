import React, { Component } from "react";
import './chat.css';

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
          </div>
  	 	  </div>
  	 	)
  }
 }