import React, { Component } from "react";
import './profile.css';

export default function ProfileScreen(argument) {
  
   
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>Profile</p>
                 </div>
                <div className={'pbox'}>
               
                 <div className={'profimg'}>
                  <div className={"img"}>
                   <img src={'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-boondocks-riley.jpg'} alt={"R"} className={'img'} />
                  </div>
                 </div>
               </div>
              </div>
  	 	  </div>
  	 	)
  
 }