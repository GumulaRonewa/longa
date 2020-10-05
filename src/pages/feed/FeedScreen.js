import React, { Component } from "react";
import './feed.css';

export default class FeedScreen extends Component {
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
  	 	  <div className={'feedhome'}>
           <div className={'feedbox'}>
             <div className={'feedround'}>
                <p className={'feedheadertext'}>Feed</p>
             </div>
          </div>
  	 	  </div>
  	 	)
  }
 }