import React, { Component } from "react";
import './wallet.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
export default class WalletScreen extends Component {
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
  	 	  <div className={'wallethome'}>
           <div className={'walletbox'}>
             <div className={'walletround'}>
                <p className={'walletheadertext'}>Wallet</p>
                <div className={'columntext'}>
                  <div className={'rowtext'}>
                      <div className={'columntextfont1'}>Pending Payment</div>
                      <div className={'columntextfont1'}>R 3000</div>
                  </div>
                  <div className={'rowtext'}>
                     <div className={'columntextfont'}>Rewards</div>
                     <div className={'columntextfont3'}>None </div>
                  </div> 
                  <div className={'rowtext'}>
                     <div className={'columntextfont'}>Total Paid</div>
                     <div className={'columntextfont2'}>R 1200 </div>
                  </div>
                </div>
             </div>
             <List>
                <ListItem>
                  <div className={'listdiv'}>
                  </div>
                </ListItem>
                 <ListItem>
                  <div className={'listdiv'}>
                  </div>
                </ListItem>

             </List>
          </div>
  	 	  </div>
  	 	)
  }
 }