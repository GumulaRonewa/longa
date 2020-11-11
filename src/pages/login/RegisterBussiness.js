import React, { Component } from "react";
import "./App.css";
import minilogo from '../../images/minilogo.png'
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SendIcon from '@material-ui/icons/Send';
import { DateRangePicker } from "materialui-daterange-picker";
import Checkbox from '@material-ui/core/Checkbox';

const animatedComponents = makeAnimated();

class RegisterBussiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
       nameOfBrand:null,
       contactNumber:null,
       email:null,
       campaignName:null,
       description:null,
       duration:1,
       influencers:null,
       nameAndSurname:null,
       Budget:null,
       dos:null,
       donts:null,
       options:[{ value: 'Yes', label: 'Yes' },{ value: 'No', label: 'No' }],
       part:1,
       open:false,
       range:"Duration of campaign",

    };
  }
  handleSelect =(e) =>{
        var msDiff =  new Date(e.endDate).getTime()-new Date(e.startDate).getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24))+ " days";
             this.setState({ range: days });
    this.setState({ open: !this.state.open });

     // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
    toggle= (e) => {
    this.setState({ open: !this.state.open });
  };
  handleContinue =(e) =>{
        this.setState({ part: 2 });

  }
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
            <div className="toplogo">
                 <img src={minilogo} alt="L" className="topSec"/>
              </div>

             <div className="regplaceBusiness">

                Contact Us
              </div>
               <div>
               <div className="RegBox">
                { this.state.part===1 &&

                <div className="logininput2">

                 <input type='text' name="nameOfBrand"  onChange={this.handleChange}className="inputbox" placeholder=" Name of Brand" />
                    <div className='inputRegibox'>
                    <Select
                      name="Has your brand used Innfluencer Marketing before?"
                      label="Has your brand used Influencer Marketing before?"
                      closeMenuOnSelect={true}
                      defaultValue={{ label: 'Has your brand used Influencer Marketing before?', value: 'default-value' }}
                       components={animatedComponents}
                      options={this.state.options}
                       />
                    </div>
                    <input type='text' name="nameAndSurname" onChange={this.handleChange} className="inputRegibox" placeholder="Name & Surname" />
                    <input type='text' name="email" onChange={this.handleChange}className="inputRegibox" placeholder="Email Address" />
                    <input type='Number' name="contactNumber" onChange={this.handleChange} className="inputRegibox" placeholder="Contact Number" />
                    <input type='text' name="campaignName" onChange={this.handleChange} className="inputRegibox" placeholder="Name of Campaign" />
                    <input type='Number' name="Budget" onChange={this.handleChange} className="inputRegibox" placeholder="Campaign Budget" />
                      <button onClick={this.handleContinue} className="buttons">
                  <SendIcon className='iconSign' />
                     Continue
                 </button> 
               
                </div>
               }
                { this.state.part===2 &&

                <div className="logininput2">
                <input type='text' name="duration" onFocus={this.toggle} className="inputbox"  placeholder={this.state.range} />
                   <DateRangePicker
                       open={this.state.open}
                       toggle={this.toggle}
                       onChange={(range) => this.handleSelect(range)}
                    />
                    <textarea  type='text' name="description" onChange={this.handleChange} style={{heiht:110,fontSize: 14}} multiline className="inputRegibox" placeholder="Description of Campaign" />
                    <input onFocus={this.handleSelect} type='Number' name="influencers" onChange={this.handleChange} className="inputRegibox" placeholder="Number of influencers needed" /> 
                     <textarea  type='text' name="dos" onChange={this.handleChange} style={{height:110,fontSize: 14}} multiline className="inputRegibox" placeholder="Do's for influencers" />
                    <textarea  type='text' name="donts" onChange={this.handleChange} style={{height:110,fontSize: 14}} multiline className="inputRegibox" placeholder="Dont's for influencers" />
                      <div className='tc'>
                      
                    </div>
                      <button onClick={this.handleSubmit} className="buttons">
                  <SendIcon className='iconSign' />
                     Submit
                 </button> 
               
                </div>
               }
              </div>
              </div>
                
           </div> 
        </div>
      </div>
    );
  }
}
export default RegisterBussiness;

              
                   
