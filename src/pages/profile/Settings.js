import React, { Component } from "react";
import './profile.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import { GoogleLogin } from 'react-google-login';

const StyledButton = withStyles({
  root: {
    background: "#0F81C7",
    borderRadius: 6,
    border: 0,
    color: "white",
    top:5,
    height: 40,
    width:'100%',
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
const options=[{ value: 'Male', label: 'Male' },{ value: 'Female', label: 'Female' }];
const optionsType=[{ value: 'Savings', label: 'Savings' },{ value: 'Cheque', label: 'Cheque' }];
const animatedComponents = makeAnimated();

export default function Settings(argument) {
  const [payment, setPayment] = React.useState(false);
  const [card, setCard] = React.useState(false);
  const [momo, setMomo] = React.useState(false);
  const [insta, setInsta] = React.useState(false);
  const [tube, setTube] = React.useState(false);
  const [twett, setTwitter] = React.useState(false);
  const [edit, setedit] = React.useState(false);
 const handlePayment = (event) => {
     setPayment(!payment);
     setCard(!card);
  };
  const handleInsta= (event) => {
     setedit(!edit);
     setInsta(!insta);
  };  
   const handletube= (event) => {
     setedit(!edit);
     setTube(!insta);
  };
   const handletwit= (event) => {
     setedit(!edit);
     setTwitter(!twett);
  };
   const handleMomo= (event) => {
     setPayment(!payment);
     setMomo(!momo);
  };  
   
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>Settings</p>
                 </div>
                <div className={'pbox'}>
               
                 <div className={'nameset'}>
                  <div className={'ident'}>Full Names</div>
                  <input type='text' name="nameAndSurname" variant='outlined' className="setedit" placeholder="Name & Surname" />
                   <div className={'ident'}>Email</div>
                    <input type='text' variant='outlined' name="email" className="setedit" placeholder="Email Address" />
                    <div className={'ident'}>Phone Number</div>
                    <input type='number' name="contactNumber" variant='outlined' className="setedit" placeholder="Contact Number" />
                    <div className={'ident'}>Date of birth</div>
                    <input type='date' name="campaignName" variant='outlined' className="setedit" placeholder="Name of Campaign" />
                    <div className={'ident'}>Gender</div>
                    <Select
                      name="Has your brand used Innfluencer Marketing before?"
                      label="Has your brand used Influencer Marketing before?"
                      closeMenuOnSelect={true}
                      defaultValue={{ label: 'Select', value: 'default-value' }}
                       components={animatedComponents}
                      options={options}
                       />
                     <div className={'ident'}>Country</div>
                     <input type='text' variant='outlined' name="email" className="setedit" placeholder="Country" />
                     <StyledButton >
                      Save
                     </StyledButton>

                 </div>
                 <div className={'nameset'}>
                         { !payment && 
                          <div>
                             <StyledButton onClick={handlePayment} >
                               Add/Edit Bank Card
                             </StyledButton >
                             <StyledButton onClick={handleMomo} style={{top:10}} >
                               Add/Edit MoMo Wallet
                             </StyledButton >
                             </div>
                           }
                             {payment && card &&
                              <div>
                             <div className={'ident'}>Bank Name*:</div>
                             <input  className="setedit" variant="outlined" />
                             <div className={'ident'}>Account Number*:</div>
                             <input className="setedit" variant="outlined" />
                             <div className={'ident'}>Account Type*:</div>
                             <Select
                                  name="Has your brand used Innfluencer Marketing before?"
                                 label="Has your brand used Influencer Marketing before?"
                                   closeMenuOnSelect={true}
                                defaultValue={{ label: 'Select', value: 'default-value' }}
                                  components={animatedComponents}
                                 options={optionsType}
                               />
                             <div className={'ident'}>Branch Code*:</div>
                             <input fullWidth className="setedit" variant="outlined" />
                             <StyledButton style={{top:10,bottom:10}} >
                               Submit
                             </StyledButton >
                              <p style={{color:"transparent"}}>function dfffffff</p>
                             <StyledButton onClick={handlePayment}  >
                               Close
                             </StyledButton  >
                             </div>
                             }
                              {payment && momo &&
                              <div>
                             <div className={'ident'}>MoMo Number*:</div>
                             <input type="number" className="setedit" placeholder={'+27 83X XXX XXX'} variant="outlined" />
                            
                             <StyledButton style={{top:10,bottom:10}} >
                               Submit
                             </StyledButton >
                              <p style={{color:"transparent"}}>function dfffffff</p>
                             <StyledButton onClick={handleMomo}  >
                               Close
                             </StyledButton  >
                             </div>
                             }
                 </div>
                 <div className={'nameset'}>
                          { !edit && 
                             <div>
                              <StyledButton onClick={handleInsta} >
                               Add/Update Instagram 
                             </StyledButton >
                             <StyledButton onClick={handletwit}  style={{top:10}} >
                               Add/Update Twitter 
                             </StyledButton >
                             <StyledButton onClick={handletube} style={{top:20}} >
                               Add/Update Youtube 
                             </StyledButton >
                             </div>
                           }
                            {edit && tube &&
                              <div>
                             <div className={'ident'}>Youtube Channel Name:</div>
                             <input type="text"  value={"WatchMe"} className="setedit" placeholder={'+27 83X XXX XXX'} variant="outlined" />
                            
                             <StyledButton style={{top:10,bottom:10}} >
                               Submit
                             </StyledButton >
                              <p style={{color:"transparent"}}>function dfffffff</p>
                             <StyledButton onClick={handletube}  >
                               Close
                             </StyledButton  >
                             </div>
                             }
                             {edit && insta &&
                              <div>
                             <div className={'ident'}>Instagram handle:</div>
                             <input type="text"  value={"@WatchMe"} className="setedit" placeholder={'+27 83X XXX XXX'} variant="outlined" />
                            
                             <StyledButton style={{top:10,bottom:10}} >
                               Submit
                             </StyledButton >
                              <p style={{color:"transparent"}}>function dfffffff</p>
                             <StyledButton onClick={handleInsta}  >
                               Close
                             </StyledButton  >
                             </div>
                             }
                             {edit && twett &&
                              <div>
                             <div className={'ident'}>Twitter handle:</div>
                             <input type="text"  value={"@WatchMe1"} className="setedit" placeholder={'+27 83X XXX XXX'} variant="outlined" />
                            
                             <StyledButton style={{top:10,bottom:10}} >
                               Submit
                             </StyledButton >
                              <p style={{color:"transparent"}}>function dfffffff</p>
                             <StyledButton onClick={handletwit}  >
                               Close
                             </StyledButton  >
                             </div>
                             }
                             

                 </div>
               </div>
              </div>
  	 	  </div>
  	 	)
  
 }