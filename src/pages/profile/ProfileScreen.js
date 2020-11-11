import React, { Component } from "react";
import './profile.css';
import Rating from "@material-ui/lab/Rating";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

export default function ProfileScreen(argument) {
  
   
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>Profile</p>
                 </div>
                <div className={'pbox'}>
                <div>
                 <div className={'profimg'}>
                        <img src={'https://images.daznservices.com/di/library/GOAL/bf/be/sadio-mane-liverpool-watford_15na1agnwusgb1uu7qvnnvew5u.jpg?t=815241929&quality=60&w=1200&h=800'} className={'imge'} alt={'R'} />
                         <Rating
                         precision={0.5}
                         style={{ paddingLeft: 13 }}
                        name="size-medium"
                          value={5}
                          size="small"
                          readOnly
                        />
                 </div>
                 <div className={'biop'}>
                   <div className={'biotext'} >Bio </div>
                 </div>
                 </div>
                 <div>
                 <div className={'general'}>
                    <div className={'gentext'} >First Name: _firstName_ </div>
                    <div className={'gentext'}>Last Name: _lastName_ </div>
                    <div className={'gentext'}>Email    : _Email_ </div>
                    <div className={'gentext'}>Phone Number: _Phone_ </div>
                    <div className={'gentext'}>Country : _Country_ </div>
                    <div className={'gentext'}>Website : _Website_ </div>
                 </div>
                 <div className={'accountsbox'}>
                        <div className={'lntext'} >Social Accounts </div>
                        <div className={'rowx'}>
                          <button className={'iconbt'}>
                         <div className={'iconpl'} >
                          <InstagramIcon size="large" />
                          <div>4.6m</div>
                          </div>
                           </button>
                           <button className={'iconbt'}>
                          <div className={'iconpl'} >
                          <YouTubeIcon size="large" />
                          <div>460K</div>
                          </div>
                           </button>
                           <button className={'iconbt'}>
                          <div className={'iconpl'} >
                          <TwitterIcon size="large" />
                           <div>4678</div>
                          </div>
                           </button>
                           <div className={'reach'}>Reach ~ 5.12m</div>
                        </div>
                 </div>

                 </div>
                 <div>
                  <div className={'featured'}>
                   <div className={'lntext'}>Featured Posts </div>
                 </div>
                 </div>
               </div>
              </div>
  	 	  </div>
  	 	)
  
 }