import React, { Component } from "react";
import './profile.css';
import Divider from "@material-ui/core/Divider";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import interfaceIcon from '../../images/interfaceIcon.svg'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { red, pink, blue } from '@material-ui/core/colors';

import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

const options=[{ value: 'Male', label: 'Male' },{ value: 'Female', label: 'Female' }];
const animatedComponents = makeAnimated();

const StyledButton = withStyles({
  root: {
    background: "#0F81C7",
    borderRadius: 6,
    border: 0,
    color: "white",
    top:5,
    height: 40,
    width:100,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

  function Settingsmain(props) {

     const [edit, setEdit] = React.useState(false);
     var window=props.window;
     var path=window.location;
           var href=path.pathname;

  /*  if(){
          setEdit(true);

    }*/
  const handleEdit = () => {
    setEdit(!edit);
  };
  const EditDet =() =>{
    return (
         <div className={'divs'}>
            <div className ={'settingheader'}> Edit Details </div>
            <Divider />
            <div className={'inputedit'}>
                 <div className={'identi'}>Full Names</div>
                  <input type='text' name="nameAndSurname" variant='outlined' className="setedit" placeholder="Name & Surname" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Email</div>
                  <input type='text' variant='outlined' name="email" className="setedit" placeholder="Email Address" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Phone Number</div>
                  <input type='number' name="contactNumber" variant='outlined' className="setedit" placeholder="Contact Number" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Date of birth</div>
                  <input type='date' name="campaignName" variant='outlined' style={{width:'100%'}} className="setedit" placeholder="Name of Campaign" />
            </div>
            <div className={'inputedit'}>
                   <div className={'identi'}>Gender</div>
                     <input type='text' variant='outlined' name="email" className="setedit" placeholder="Gender" />
            </div>
            <div className={'inputedit'}>
                    <div className={'identi'}>Country</div>
                     <input type='text' variant='outlined' name="email" className="setedit" placeholder="Country" />
            </div>
            <div className={'placebtn'}>
               <StyledButton >
                      Save
                </StyledButton>
            </div>


         </div>

      )
  }
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
               <div className={href.length>9?'settingshid':'settings'}>
                  <div className={'settingheader'}>Settings</div>
                   <Divider/>
                     <ListItem button onClick={handleEdit} component={Link} to={"/settings/editdetais"}>
                       <PersonOutlineIcon style={{ marginLeft:5,height: 40, width: 30}}/>
                      <ListItemText style={{marginLeft:6}} primary={'Edit Details'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button component={Link} to={"/settings/payment"}>
                      <CreditCardIcon style={{ marginLeft:5,height: 40, width: 30}} />
                      <ListItemText style={{marginLeft:6}} primary={'Payment Method'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button component={Link} to={"/settings/socials"}>
                      <img src={interfaceIcon} alt={'alt'} style={{ marginLeft:5,marginTop:5,height: 23, width: 27,transform: 'rotate(-44deg)'}} />
                      <ListItemText style={{marginLeft:6}} primary={'Social Accounts'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button>
                      <HelpOutlineIcon style={{ marginLeft:5,height: 40, width: 30}} />
                      <ListItemText  style={{marginLeft:6}} primary={'Help'} />

                      </ListItem>
                      <Divider/>
                </div>
                  <div className={href.length>9?'none':'none'}>
                <Switch>
                  <Route
                    exact
                       path='/settings/editdetais'
                          render={(props) => (
                            <EditDetail />
                            )}
                         />
                    <Route
                    exact
                       path='/settings/payment'
                          render={(props) => (
                            <EditPayments />
                            )}
                         />
                      <Route
                    exact
                       path='/settings/socials'
                          render={(props) => (
                            <EditSocials />
                            )}
                         />
                </Switch>
              </div>
            </div>
              
  	 	  </div>
  	 	)
  
 }
  function EditPayments(argument) {
         const [edit, setEdit] = React.useState(false);
         const [editmomo, setEditMomo] = React.useState(false);
         const handleEdit = () => {
          setEdit(!edit);
          setEditMomo(false);
       };
       const handleEditMoMo = () => {
          setEdit(false);
          setEditMomo(!editmomo);
       };
      return (
         <div className={'divs'}>
            <div className ={'settingheader'}> Edit Payment </div>
                <Divider />
                {!editmomo &&
               <ListItem button onClick={handleEdit}>
                      <ListItemText  style={{marginLeft:6}} primary={'Add/Edit Card details'} /> 
                      <ListItemIcon>
                    <IconButton edge="end" aria-label="delete">
                      <CreateIcon />
                    </IconButton>
                  </ListItemIcon>
               </ListItem> 
             }
               <Divider />
                
               {!edit &&
                <div>
               <ListItem button onClick={handleEditMoMo}>
                      <ListItemText  style={{marginLeft:6}} primary={'Add/Edit MoMo'} /> 
                      <ListItemIcon>
                    <IconButton edge="end" aria-label="delete">
                      <CreateIcon />
                    </IconButton>
                  </ListItemIcon>
               </ListItem> 
                 <Divider /> 
                </div>         

             }
              {edit &&
                 <div c>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Bank Name</div>
                  <input type='text' name="Bn" variant='outlined' className="setedit" placeholder="Bank Name" />
                 </div>
                 <div className={'inputedit'}>
                  <div className={'identi'}>Account Number</div>
                  <input type='number' variant='accn' name="email" className="setedit" placeholder="Account Number" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Account Type</div>
                  <input type='text' name="aty" variant='outlined' className="setedit" placeholder="Account Type" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Branch Code</div>
                  <input type='text' name="bc" variant='outlined' style={{width:'100%'}} className="setedit" placeholder="Branch Code" />
            </div>
            <div className={'placebtn'}>
             <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton >
                      Save
                </StyledButton>
                 </ListItemIcon>
              </ListItem>

            </div>
            </div>
              }
              {editmomo &&
                 <div>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Phone/MoMo Number</div>
                  <input type='number' name="Bn" variant='outlined' className="setedit" placeholder="+27 83X XXX XXX" />
                 </div>
              
            <div className={'placebtn'}>
                  <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton >
                      Save
                </StyledButton>
                 </ListItemIcon>
              </ListItem>
            </div>
            </div>
              }
             
              
           </div> 
            )
}
 function EditDetail(argument) {
   // body...
     return (
         <div className={'divs'}>
            <div className ={'settingheader'}> Edit Details </div>
            <Divider />
            <div className={'inputedit'}>
                 <div className={'identi'}>Full Names</div>
                  <input type='text' name="nameAndSurname" variant='outlined' className="setedit" placeholder="Name & Surname" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Email</div>
                  <input type='text' variant='outlined' name="email" className="setedit" placeholder="Email Address" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Phone Number</div>
                  <input type='number' name="contactNumber" variant='outlined' className="setedit" placeholder="Contact Number" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Date of birth</div>
                  <input type='date' name="campaignName" variant='outlined' style={{width:'100%'}} className="setedit" placeholder="Name of Campaign" />
            </div>
            <div className={'inputedit'}>
                   <div className={'identi'}>Gender</div>
                     <input type='text' variant='outlined' name="email" className="setedit" placeholder="Gender" />
            </div>
            <div className={'inputedit'}>
                    <div className={'identi'}>Country</div>
                     <input type='text' variant='outlined' name="email" className="setedit" placeholder="Country" />
            </div>
            <div className={'placebtn'}>
               <StyledButton >
                      Save
                </StyledButton>
            </div>


         </div>

      )
 }
   function EditSocials(argument) {
         const [editInsta, setEditInsta] = React.useState(false);
         const [editTwitter, setEditTwitter] = React.useState(false);
         const [editYoutube, setEditYoutube] = React.useState(false);
        const handleInsta = () => {
          setEditInsta(!editInsta);
          setEditTwitter(false);
          setEditYoutube(false);
       };
       const handleTwitter = () => {
          setEditTwitter(!editTwitter);
          setEditYoutube(false);
          setEditInsta(false);
          
       };
       const handleYoutube = () => {
          setEditTwitter(false);
          setEditYoutube(!editYoutube);
          setEditInsta(false);
          
       };
      return (
         <div className={'divs'}>
            <div className ={'settingheader'}> Edit Social Media Accounts  </div>
                <Divider />
                {!editTwitter && !editInsta &&
               <div> 
               <ListItem button onClick={handleYoutube}>
                      <IconButton edge="end" aria-label="YouTubeIcon">
                      <YouTubeIcon style={{ color: red[500] }} />
                    </IconButton>
                      <ListItemText  style={{marginLeft:6}} primary={'Add/Edit Youtube Channel'} /> 
                      <ListItemIcon>
                    <IconButton edge="end" aria-label="youtu">
                      <CreateIcon />
                    </IconButton>
                  </ListItemIcon>
               </ListItem> 
                <Divider />
                </div>
                }
                {!editTwitter && !editYoutube &&
               <div>
               <ListItem button onClick={handleInsta}>
                     <IconButton edge="end" aria-label="Instagram">
                      <InstagramIcon style={{ color: pink[300] }} />
                    </IconButton>
                      <ListItemText  style={{marginLeft:6}} primary={'Add/Edit Instagram Account'} /> 
                      <ListItemIcon>
                    <IconButton edge="end" aria-label="delete">
                      <CreateIcon />
                    </IconButton>
                  </ListItemIcon>
               </ListItem> 
                 <Divider /> 
                </div>
              }
               {!editInsta && !editYoutube &&
                <div>
                 <ListItem button onClick={handleTwitter}>
                     <IconButton edge="end" aria-label="Twitter">
                      <TwitterIcon style={{ color: blue[500] }}/>
                    </IconButton>
                      <ListItemText  style={{marginLeft:6}} primary={'Add/Edit Twitter Account'} /> 
                      <ListItemIcon>
                    <IconButton edge="end" aria-label="delete">
                      <CreateIcon />
                    </IconButton>
                  </ListItemIcon>
               </ListItem> 
                 <Divider />
              </div>
            }
            {editYoutube &&
               <div>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Youtube Channel</div>
                  <input type='text' name="Bn" variant='outlined' className="setedit" placeholder="Youtube Channel" />
                 </div>
              
            <div className={'placebtn'}>
                  <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton >
                      Link
                </StyledButton>
                 </ListItemIcon>
              </ListItem>
            </div>
            </div>
            }
            {editTwitter &&
               <div>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Twitter Account</div>
                  <input type='text' name="Bn" variant='outlined' className="setedit" placeholder="Twitter Account" />
                 </div>
              
            <div className={'placebtn'}>
                  <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton >
                      Link
                </StyledButton>
                 </ListItemIcon>
              </ListItem>
            </div>
            </div>
            }
            {editInsta &&
               <div>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Instagram Account</div>
                  <input type='text' name="Bn" variant='outlined' className="setedit" placeholder="Instagram Account" />
                 </div>
              
            <div className={'placebtn'}>
                  <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton >
                      Link
                </StyledButton>
                 </ListItemIcon>
              </ListItem>
            </div>
            </div>
            }
              
           </div> 
            
 )
}
 export default class Settings extends React.Component {
  componentWillMount(){
    console.log(window)
  }
  
  render() {
    return <Settingsmain window={window}/>;
  }
}
 