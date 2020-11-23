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
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
     var host=window.location.host;
  /*  if(){
          setEdit(true);

    }*/
 
  var Settings=props.settings;

 


  const EditDet =(props) =>{
       const [first, setfirst] = React.useState("");
  const [last, setlast] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [date, setDate] = React.useState("");
  const [email, setemail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [country, setCountry] = React.useState('');
  console.log(props)
  const onSubmit =()=>{
   
                  var data={userID:localStorage.getItem("userId"),name:first,surname:last,country:country,email:email,phone:phone,gender:gender,dateOfBirth:date}
  console.log(data);
   axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/update`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
  }
     const handleChanges = (event) => {
    console.log(event.target.name)
    switch (event.target.name) {
      case "first":
        setfirst(event.target.value);
        break;
      case "last":
        setlast(event.target.value);
        break;
      case "country":
        setCountry(event.target.value);
        break;
      case "date":
        setDate(event.target.value);
        break;
      case "contactNumber":
        setPhone(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "email":
        setemail(event.target.value);
        break;
      default:
        break;
    }
  };

    return (
         <div style={{width:"90%"}} className={'divs'}>
            <div className={'rows'}>
            <IconButton component={Link} onClick={props.handle} to={'/settings'}>
            		<ArrowBackIcon />
            </IconButton>
            <div className ={'settingheader'}> Edit Details </div>
            </div>
            <Divider style={{marginTop:6}}/>
            <div className={'inputedit'}>
                 <div className={'identi'}>Full Names</div>
                  <input  type='text' name="first" onChange={handleChanges} variant='outlined' defaultValue={Settings.name} className="setedit"  />
            </div>
              <div className={'inputedit'}>
                 <div className={'identi'}>Last Names</div>
                  <input type='text' defaultValue={Settings.surname} name="last"onChange={handleChanges} variant='outlined' className="setedit" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Email</div>
                  <input type='text' variant='outlined' defaultValue={Settings.email} name="email" onChange={handleChanges} className="setedit" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Phone Number</div>
                  <input  type='number' name="contactNumber"  onChange={handleChanges} defaultValue={Settings.phone} variant='outlined' className="setedit" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Date of birth</div>
                  <input  type='date' value={ typeof Settings.dob==='undefined'?'':Settings.dob.substring(0,10)} name="date" onChange={handleChanges} variant='outlined' style={{width:'100%'}} className="setedit" />
            </div>
            <div className={'inputedit'}>
                   <div className={'identi'}>Gender</div>
                     <input  type='text' variant='outlined' defaultValue={Settings.gender} name="gender" onChange={handleChanges} className="setedit"  />
            </div>
            <div className={'inputedit'}>
                    <div className={'identi'}>Country</div>
                     <input type='text' variant='outlined' defaultValue={Settings.country} name="country" onChange={handleChanges} className="setedit" />
            </div>
            <div className={'placebtn'}>
               <StyledButton onClick={onSubmit}>
                      Save
                </StyledButton>
            </div>


         </div>

      )
  }

    const [classn, setcln] = React.useState('settingshid');
 const handleEdit = () => {
    setEdit(!edit);
    setcln("settingshid2")
  };
  const handleEditOut = () => {
    setEdit(!edit);
    setcln("settingshid")
  };
  	 return(
  	 	  <div className={'profhome'}>
               <div className={`${classn}`}>
                  <div className={'settingheader'}>Settings</div>
                   <Divider/>
                     <ListItem button onClick={handleEdit} component={Link} to={"/settings/editdetails"}>
                       <PersonOutlineIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                      <ListItemText style={{marginLeft:6}} primary={'Edit Details'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button onClick={handleEdit} component={Link} to={"/settings/payment"}>
                      <CreditCardIcon style={{ marginLeft:5,height: 40, width: 30}} />
                      <ListItemText style={{marginLeft:6}} primary={'Payment Method'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button onClick={handleEdit} component={Link} to={"/settings/socials"}>
                      <img src={interfaceIcon} alt={'alt'} style={{ marginLeft:5,marginTop:5,height: 23, width: 27,transform: 'rotate(-44deg)'}} />
                      <ListItemText style={{marginLeft:6}} primary={'Social Accounts'} />
                      </ListItem>
                      <Divider/>
                      <ListItem button onClick={handleEdit} component={Link} to={"/settings/help"}>
                      <HelpOutlineIcon style={{ marginLeft:5,height: 40, width: 30}} />
                      <ListItemText  style={{marginLeft:6}} primary={'Help'} />

                      </ListItem>
                      <Divider/>
                </div>
                  <div className={'settingshid'}>
                <Switch>
                  <Route
                    exact
                       path='/settings/editdetails'
                          render={(props) => (
                            <EditDet handle={handleEditOut} />
                            )}
                         />
                    <Route
                    exact
                       path='/settings/payment'
                          render={(props) => (
                            <EditPayments handle={handleEditOut} settings={Settings} />
                            )}
                         />
                      <Route
                    exact
                       path='/settings/socials'
                          render={(props) => (
                            <EditSocials handle={handleEditOut} />
                            )}
                         />
                        <Route
                    exact
                       path='/settings/help'
                          render={(props) => (
                            <EditAccount handle={handleEditOut} />
                            )}
                         />
                </Switch>
              </div>
              
  	 	  </div>
  	 	)
  
 }
  function EditPayments(props) {
         const [edit, setEdit] = React.useState(false);
         const [editmomo, setEditMomo] = React.useState(false);
         const [name, setName] = React.useState('');
         const [type, setType] = React.useState('');
         const [number, setNumber] = React.useState('');
         const [branch, setBranch] = React.useState('');
         const [phone, setPhone] = React.useState('');
           var Settings=props.settings;
           Settings= Settings.bankingDetails;
         const handleBank=()=>{
         	var data={bankName:name,branchCode:branch,accountNumber:number,accountType:type,userID:localStorage.getItem("userId")}
         	console.log(data)
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/banking`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
         }
           const handleMomo=()=>{
         	var data={momo:phone,userID:localStorage.getItem("userId")}
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/momo`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
         }
         const handleBack =()=>{
         	console.log(window)
         }
         const handleEdit = () => {
          setEdit(!edit);
          setEditMomo(false);
       };
       const handleEditMoMo = () => {
          setEdit(false);
          setEditMomo(!editmomo);
       };
       const handleChange = (event) => {
    switch (event.target.name) {
      case "Bn":
        setName(event.target.value);
        break;
      case "accn":
        setNumber(event.target.value);
        break;
      case "aty":
        setType(event.target.value);
        break;
      case "bc":
        setBranch(event.target.value);
        break;
      case "contactNumber":
        setPhone(event.target.value);
        break;
     
      default:
        break;
    }
  };
  var sett=props.settings['settings'];
   
      return (
         <div className={'divs'}>
         <div className={'rows'}>
            <IconButton component={Link} onClick={props.handle} to={'/settings'}>
            		<ArrowBackIcon />
            </IconButton>
            <div className ={'settingheader'}> Edit Payment </div>
            </div>
                <Divider style={{marginTop:6}} />
                {!editmomo &&
               <ListItem button style={{width:"85%"}} onClick={handleEdit}>
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
               <ListItem button style={{width:"85%"}} onClick={handleEditMoMo}>
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
                 <div style={{width:"80%"}} >
                    <div style={{fontSize:20}}>
             Longa Money will use the bank account information Above to ensure you receive payment for campains you participated in. Make sure the details Above are correct and up to date. These details are stored securely in our system and will never be shared with third parties.
            </div>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Bank Name</div>
                  <input onChange={handleChange} type='text' defaultValue={Settings.bankName} name="Bn" variant='outlined' className="setedit" placeholder="Bank Name" />
                 </div>
                 <div className={'inputedit'}>
                  <div className={'identi'}>Account Number</div>
                  <input onChange={handleChange} type='number' defaultValue={Settings.accountNumber} variant='accn' name="accn" className="setedit" placeholder="Account Number" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Account Type</div>
                  <input onChange={handleChange} type='text' name="aty" defaultValue={Settings.accountType} variant='outlined' className="setedit" placeholder="Account Type" />
            </div>
            <div className={'inputedit'}>
                  <div className={'identi'}>Branch Code</div>
                  <input onChange={handleChange} type='number' name="bc" defaultValue={Settings.branchCode} variant='outlined' style={{width:'100%'}} className="setedit" placeholder="Branch Code" />
            </div>
            <div className={'placebtn'}>
             <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton onClick={handleBank}>
                      Save
                </StyledButton>
                 </ListItemIcon>
              </ListItem>
          
            </div>
         
            </div>
              }
              {editmomo &&
                 <div style={{width:"80%"}}>
                 <div className={'inputedit'}>
                 <div className={'identi'}>Phone/MoMo Number</div>
                  <input type='number' onChange={handleChange} name='contactNumber'  variant='outlined' className="setedit" placeholder="+27 83X XXX XXX" />
                 </div>
              
            <div className={'placebtn'}>
                  <ListItem>
               <ListItemText primary={""} />
               <ListItemIcon>
               <StyledButton onClick={handleMomo}>
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

   function EditSocials(props) {
         const [editInsta, setEditInsta] = React.useState(false);
         const [editTwitter, setEditTwitter] = React.useState(false);
         const [editYoutube, setEditYoutube] = React.useState(false);
         const [youtube, setYoutube] = React.useState("");
         const [instagram, setInsta] = React.useState("");
         const [twitter, setTwitter] = React.useState("");
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
         const handleChange = (event) => {
    switch (event.target.name) {
      case "twitter":
        setTwitter(event.target.value);
        break;
      case "tube":
        setYoutube(event.target.value);
        break;
      case "insta":
        setInsta(event.target.value);
        break;
     
      default:
        break;
    }
  };
      return (
         <div className={'divs'}>
         <div className={'rows'}>
            <IconButton component={Link} onClick={props.handle} to={'/settings'}>
            		<ArrowBackIcon />
            </IconButton>
            <div className ={'settingheader'}> Edit Social Media Accounts  </div>
            </div>
                <Divider  style={{marginTop:6}}/>
                {!editTwitter && !editInsta &&
               <div> 
               <ListItem button style={{width:"85%"}} onClick={handleYoutube}>
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
               <ListItem button style={{width:"85%"}} onClick={handleInsta}>
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
                 <ListItem button style={{width:"85%"}} onClick={handleTwitter}>
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
                  <input type='text' onChange={handleChange} name="tube" variant='outlined' className="setedit" placeholder="Youtube Channel" />
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
                  <input type='text' onChange={handleChange} name="twitter" variant='outlined' className="setedit" placeholder="Twitter Account" />
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
                  <input type='text' onChange={handleChange} name="insta" variant='outlined' className="setedit" placeholder="Instagram Account" />
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
function EditAccount(props) {
         const [editInsta, setEditInsta] = React.useState(false);
         const [editTwitter, setEditTwitter] = React.useState(false);
         const [editYoutube, setEditYoutube] = React.useState(false);
         const [valid, setValid] = React.useState(false);
         const [password, setPassword] = React.useState("");
         const [newP, setNew] = React.useState("");
         const [newC, setNewC] = React.useState("");
         const [del, setDel] = React.useState("");
        const handleInsta = () => {
          setEditInsta(!editInsta);
          setEditTwitter(false);
          setEditYoutube(false);
       };
        const handleUpdate=()=>{
         	var data={oldPassword:password,newPassword:newP,userID:localStorage.getItem("userId")}
          if (!valid) {
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/change-password`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
  }
         }
         const handleDelete=()=>{
         	var data={userID:localStorage.getItem("userId")}
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
         }
      var error="Password don't match"
         const handleChange = (event) => {
    switch (event.target.name) {
      case "password":
        setPassword(event.target.value);
        break;
       case "delpassword":
        setDel(event.target.value);
        break;
      case "new":
        setNew(event.target.value);
        break;
      case "newC":
        setValid(newP !==(event.target.value));
            console.log(valid)

        setNewC(event.target.value);
        break;
     
      default:
        break;
    }
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
            <div className={'rows'}>
            <IconButton component={Link} onClick={props.handle} to={'/settings'}>
            		<ArrowBackIcon />
            </IconButton>
            <div className ={'settingheader'}> help  </div>
            </div>
                <Divider style={{marginTop:6}} />
                {!editTwitter && !editInsta &&
               <div> 
               <ListItem button onClick={handleYoutube}>
                      
                      <ListItemText  style={{marginLeft:6}} primary={'Change Password'} /> 
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
                    
                      <ListItemText  style={{marginLeft:6}} primary={ 'Delete Account'} /> 
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
               <div className={'columnx'}>
                 <div className={'columnx'}>
                   <div className={'inputedit'}>
                 <div className={'identi'}>Current Password</div>
                  <input type='password' onChange={handleChange} name='password' variant='outlined' className="setedit" placeholder="Current Password" />
                </div>
                <div className={'inputedit'}>
                  <div className={'identi'}>New Password</div>
                  <input type='password' onChange={handleChange} variant='outlined' name="new" className="setedit" placeholder="New Password" />
                  </div>
                  <div className={'inputedit'}>
                        <div className={'identi'}>Confirm Password</div>
                        <input type='password' onChange={handleChange} name="newC" variant='outlined' className="setedit" placeholder="Confirm Password" />
                  </div>
                  
                 </div>
                 <div className={'placebtn'}>
                                    {valid &&
                                      <div style={{color:'red'}}>{error}</div>
                                    }

               <StyledButton onClick={handleUpdate} >
                      Save
                </StyledButton>
            </div>
            
            </div>
            }
            {editInsta &&
               <div className={'columnx'}>
                 <div className={'columnx'}>
                   <div className={'inputedit'}>
                 <div className={'identi'}> Password</div>
                  <input type='password' name='delpassword' variant='outlined' className="setedit" placeholder=" Password" />
                </div>
               
                  
                 </div>
                 <div className={'placebtn'}>
               <StyledButton onClick={handleDelete} >
                      Delete
                </StyledButton>
            </div>
            
            </div>
            }
           
           </div> 
            
 )
}
 export default class Settings extends React.Component {
 	 constructor(props) {
    super(props);

    this.state = {
      settings:[],
    };
  }
  componentWillMount(){

  	         	var data={userID:localStorage.getItem("userId")}
            console.log(data)
			    axios({
			      method: 'POST',
			      url: `https://longa-money.herokuapp.com/api/u/settings`, // First page at 0
			      data:data,
			       headers: {
			      "Authorization": `Bearer ${localStorage.getItem("token")}`,
			      
			      },
			    }).then(res =>{
			    	        this.setState({settings:res.data})

			       console.log(res.data)

			    })
  }
  
  render() {
    return <Settingsmain settings={this.state.settings} window={window}/>;
  }
}
 