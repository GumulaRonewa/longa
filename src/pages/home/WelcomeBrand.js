import React, { Component } from "react";
import './home.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'


export default class WelcomeBrand extends Component {
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
                <div className="welcometext">Campaign Created Successfully </div>
               </div>
          </div>
        </div>
      </div>
  	 	)
  }
 }