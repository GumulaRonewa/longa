import React, { Component } from "react";
import './wallet.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios";

export default class WalletScreen extends Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,

      wallet: [],
      total:'',
      pending:'',
      error: false,
    };
  }
 componentDidMount(){
            var data={userID:localStorage.getItem("userId")}

   axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/wallet/jobs`, // First page at 0
       data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
                          this.setState({wallet:res.data['wallets']})
                          this.setState({pending:res.data['balance']})
                          this.setState({total:res.data['withdrawn']})

    })

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
                      <div className={'columntextfont1'}>R {this.state.pending}</div>
                  </div>
                  
                  <div className={'rowtext'}>
                     <div className={'columntextfont'}>Total Paid</div>
                     <div className={'columntextfont2'}>R {this.state.total} </div>
                  </div>
                </div>
             </div>
             <List>
                         {this.state.wallet.map((item)=> (
                  <div className={'walletlistdiv'}>

                <ListItem>
                   <Avatar                            
                   style={{ height: 60, width: 60, left: 20,top:10 }}
                  src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                  <div  style={{marginLeft:30,marginTop:10,fontSize:26}}>{item.campaignName} </div>
                  <div  style={{marginLeft:20,marginTop:10,fontSize:23}}>{item.amount}</div>
                  <div  style={{marginLeft:20,marginTop:10,fontSize:23}}>{item.status}</div>
                </ListItem>
                                  </div>

                ))}

             </List>
          </div>
  	 	  </div>
  	 	)
  }
 }