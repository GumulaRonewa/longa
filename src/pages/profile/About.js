import React, { Component } from "react";
import './profile.css';


export default function About(argument) {
  
   
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>About Us</p>
                 </div>
                <div className={'pbox'}>
                  <div className={'nameset'}>
                      <div className={'aboutsec'} >About Us</div>
                      <div className={'biotext2'}>
                      Founded in South Africa, Longa Money is a digital platform that connects social media influencers and brands for the purpose of creating high-impact content campaigns together.
                       </div>
                  </div>
                   <div className={'nameset'}>
                        <div className={'aboutsec'} >Contact Us </div>
                        <div className={'biotext2'}>
                        WhatsApp - +27 65 573 4589 <br/>
                          Instagram - Longa_Money <br/>
                          Twitter - @Longa_Money<br/>
                          Facebook - Longa Money
                        </div>
                  </div>
                  <div className={'nameset'}>
                                     <div className={'aboutsec'} >Terms & Condions  </div>
                  </div>
               </div>
              </div>
  	 	  </div>
  	 	)
  
 }