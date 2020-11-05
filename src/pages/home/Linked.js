import React, { Component } from "react";
import './home.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
import facebookblack from '../../images/facebookblack.svg'
import instagram from '../../images/instagram.svg'


export default class Linked extends Component {
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

        <div className="WelcomeBox">
        <div className="WelcomeleftBox">
          <div className="bgBlue">
                    <img style={{height:230,width:230,marginLeft:20}} src={profile_picture_without_slogan} alt="l" />

          </div>

        </div>
        <div className="WelcomerightBox">
           <div className="bgWhite">
              <div>
                <div className="accountsrow">
                   <img src={instagram} style={{marginTop:-50,marginLeft:10}} className='accounticon' alt="b"/>
                </div>
                   <input type='text' className="inputLinked" style={{width:300}}placeholder=" Username" />
                   <button className={"linkbutton"} style={{marginTop:30,marginLeft:85}}>
                    <p style={{color:"transparent"}}>hjik</p>
                   Link </button>
               </div>
          </div>
        </div>
      </div>
  	 	)
  }
 }