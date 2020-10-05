import React, { Component } from "react";
import './wallet.css';

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
             </div>
          </div>
  	 	  </div>
  	 	)
  }
 }