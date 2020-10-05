import React, { Component } from "react";
import './job.css';

export default class JobScreen extends Component {
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
  	 	  <div className={'jobhome'}>
           <div className={'jobbox'}>
             <div className={'jobround'}>
                <p className={'jobheadertext'}>My Jobs</p>
             </div>
          </div>
  	 	  </div>
  	 	)
  }
 }