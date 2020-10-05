import React, { Component } from "react";
import './job.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
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
                      <List>
                <ListItem>
                  <div className={'joblistdiv'}>
                  </div>
                </ListItem>
                 <ListItem>
                  <div className={'joblistdiv'}>
                  </div>
                </ListItem>
                <ListItem>
                  <div className={'joblistdiv'}>
                  </div>
                </ListItem>
              
             </List>
          </div>
  	 	  </div>
  	 	)
  }
 }