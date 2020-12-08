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
                   <button onClick={()=>{
                    window.open("/","_self")
                   }} style={{backgroundColor:"transparent",width:24,marginLeft:20,height:240}}>
                    <img style={{height:230,width:230,marginLeft:20}} src={profile_picture_without_slogan} alt="l" />
                    </button>

          </div>

        </div>
        <div className="WelcomerightBox">
           <div className="bgWhite">
              <div>
                <div className="welcometext">Thank you for your submission, we will be in touch with you soon. </div>
               </div>
               <div style={{marginLeft:"60%",marginTop:"5%"}}>
                 <a className="welcometext2"  href={'/registerbrands'}>
                 Add another Campaign.
                 </a>
               </div>

          </div>
        </div>
      </div>
  	 	)
  }
 }