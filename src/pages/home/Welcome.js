import React, { Component } from "react";
import './home.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
import youtube from '../../images/youtube.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import IconButton from "@material-ui/core/IconButton";

export default class Welcome extends Component {
   constructor(props) {
    super(props);

    this.state = {
      email: null,

      password: null,
      error: false,
    };
  }
  handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.history.push("/links");

    ;
  };

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
                <div className="welcometext"> Welcome {localStorage.getItem("name")}</div>
                <div style={{color:"transparent"}}>gr</div>
                <div className="linktext">Please link one or more social media accounts to proceed</div>
                <div className="accountsrow">
                  <IconButton name={"instagram"} onClick={this.handleLogin} style={{marginTop:-10}}>
                   <img src={instagram} style={{marginLeft:2}} className='accounticon' alt="b"/>
                  </IconButton>
                   <IconButton name={"twitter"} onClick={this.handleLogin} style={{marginTop:-10}}>
                   <img src={twitter} style={{marginLeft:2}} className='accounticon' alt="b"/>
                   </IconButton>
                    <IconButton onClick={this.handleLogin} style={{marginTop:-10}}>
                   <img src={youtube} style={{marginLeft:2}} className='accounticon' alt="b"/>
                   </IconButton>
                                      
                </div>
               </div>
          </div>
        </div>
      </div>
  	 	)
  }
 }