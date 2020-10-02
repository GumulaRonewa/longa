import React, { Component } from "react";
import './home.css';

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
  	 	    <h2>Home page</h2>
  	 	  </div>
  	 	)
  }
 }