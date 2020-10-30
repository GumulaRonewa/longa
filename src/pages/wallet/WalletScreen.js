import React, { Component } from "react";
import './wallet.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
                  </div> 
                  <div className={'rowtext'}>
                     <div className={'columntextfont'}>Total Paid</div>
                     <div className={'columntextfont2'}>R 1200 </div>
                  </div>
                </div>
             </div>
             <List>
                <ListItem>
                  <div className={'walletlistdiv'}>
                   <Avatar                            
                   style={{ height: 60, width: 60, left: 20,top:10 }}
                  src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                  <div className={'promowname'}>MTN Yellow </div>
                  <div className={'amount'}>R 800</div>
                  <div className={'amount2'}>Paid</div>
                  </div>
                </ListItem>
                 <ListItem>
                  <div className={'walletlistdiv'}>
                   <Avatar                            
                   style={{ height: 60, width: 60, left: 20,top:10 }}
                  src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                  <div className={'promowname'}>MTN summer </div>
                  <div className={'amount'}>R 400</div>
                  <div className={'amount2'}>Paid</div>
                  </div>
                </ListItem>
                <ListItem>
                  <div className={'walletlistdiv'}>
                   <Avatar                            
                   style={{ height: 60, width: 60, left: 20,top:10 }}
                  src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                  <div className={'promowname'}>MTN summer </div>
                  <div className={'amount'}>R 12400</div>
                  <div className={'amount2'}>Paid</div>
                  </div>
                </ListItem>

             </List>
          </div>
  	 	  </div>
  	 	)
  }
 }