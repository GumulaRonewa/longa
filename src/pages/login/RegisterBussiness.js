import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'
import axios from "axios";

import SendIcon from '@material-ui/icons/Send';


class RegisterBussiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
       nameOfBrand:null,
       contactNumber:null,
       email:null,
       campaignName:null,
       description:null,
       duration:null,
       influencers:null,
       nameAndSurname:null,
       dos:null,
       donts:null,

    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit= (e) => {
    console.log(this.state)
axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/brand/new`,
      data: this.state,
      }).then((res) => {     this.props.history.push("/wb");
  }
      )
    }
  render() {
    return (
      <div className="authBox">
        <div className="leftBoxBusiness">
          <div className="bgGreen">
          </div>
          <div className="imageBusinessAuth">
          </div>
        </div>
        <div className="rightBoxBusiness">
           <div className="bgRed"> 
                 <div className="regplaceBusiness">
                Contact Us
              </div>
              <div>
              <div className="RegBoxBusiness">
                 <div className="logininput">
                    <input type='text' name="nameOfBrand"  onChange={this.handleChange}className="inputbox" placeholder=" Name of Brand" />
                    <input type='text'  className="inputRegibox" placeholder="Has your brand used Influencer Marketing before?" /> 
                    <input type='text' name="nameAndSurname" onChange={this.handleChange} className="inputRegibox" placeholder="Name & Surname" />
                    <input type='text' name="email" onChange={this.handleChange}className="inputRegibox" placeholder="Email Address" />
                    <input type='text' name="contactNumber" onChange={this.handleChange} className="inputRegibox" placeholder="Contact Number" />
                    <input type='text' name="campaignName" onChange={this.handleChange} className="inputRegibox" placeholder="Name of Campaign" />
                    <textarea  type='text' name="description" onChange={this.handleChange} style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Description of Campaign" />
                     <input type='text' name="duration" onChange={this.handleChange} className="inputboxhidden" placeholder="Duration of campaign" />
                    <input type='text' name="influencers" onChange={this.handleChange} className="inputRegiboxhidden" placeholder="Number of influencers needed" /> 
                    <textarea  type='text' name="dos" onChange={this.handleChange} style={{height:120,fontSize: 14}} multiline className="inputRegiboxhidden" placeholder="Do's for influencers" />
                    <textarea  type='text' name="donts" onChange={this.handleChange} style={{height:120,fontSize: 14}} multiline className="inputRegiboxhidden" placeholder="Dont's for influencers" />
                      <button onClick={this.handleSubmit} className="buttonshidden">
                  <SendIcon className='iconSign' />
                   <p style={{color:'transparent'}}> e</p>
                     Submit
                 </button> 
                 </div> 

              </div>

              <div className="RegBoxBusinessRight">
                 <div className="logininput">
                    <input type='text' name="duration" onChange={this.handleChange} className="inputbox" placeholder="Duration of campaign" />
                    <input type='text' name="influencers" onChange={this.handleChange} className="inputRegibox" placeholder="Number of influencers needed" /> 
                    <textarea  type='text'  name="dos" onChange={this.handleChange} style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Do's for influencers" />
                    <textarea  type='text' name="donts" onChange={this.handleChange} style={{height:120,fontSize: 14}} multiline className="inputRegibox" placeholder="Dont's for influencers" />
                 </div>
                 <div className='regbuttondiv'>
                 <button onClick={this.handleSubmit}className="buttons">
                  <SendIcon className='iconSign' />
                   <p style={{color:'transparent'}}> e</p>
                     Submit
                 </button>
                 </div>
                 
                 
              </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterBussiness;
