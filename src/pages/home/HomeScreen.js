import React from "react";
import './home.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import share from '../../images/share.svg'
import GavelIcon from '@material-ui/icons/Gavel';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Switch, Route, Link } from "react-router-dom";

import CreditCardIcon from '@material-ui/icons/CreditCard';
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
const useStyles = makeStyles((theme) => ({

   expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(90deg)',
  }
}));
const StyledButton = withStyles({
  root: {
    background: "white",
    borderRadius: 6,
    border: 0,
    color: "#0F81C7",
    height: 48,
    width:280,
    left:10,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #0F81C7",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);


function HomeScreenfunct(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [payment, setPayment] = React.useState(false);
   const [name, setName] = React.useState('');
         const [type, setType] = React.useState('');
         const [number, setNumber] = React.useState('');
         const [branch, setBranch] = React.useState('');
         const [phone, setPhone] = React.useState('');
     var window=props.window;
       window=window.location;
      console.log(props);
      var href=window.href;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
  const classes = useStyles();
  var [selectedPromo, setPromo] = React.useState('all');
  const [selectedPromoId, setPromoId] = React.useState(null);
  var { SocialIcon } = require('react-social-icons');
    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen2 = Boolean(anchorEl2);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
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
              handleBid();

       console.log(res)

    })
  }
  var camps=props.Campaigns;
  if(props.id !=="all"){
      selectedPromo=props.id;
    }
  const handleShareMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleBankMenuOpen = (event) => {
    if(sessionStorage.getItem("bankings")==="true"){
          setAnchorEl2(event.currentTarget);

    }
    else{
       handleBid();
    }
  };

   const handlePayment = (event) => {
     setPayment(!payment)
  };
  const getDays=(day)=>{
    var msDiff =  new Date(day).getTime()-new Date().getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24))+ " days";
         return days;
  }
  const menuId = 'share-menu';
   const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
     const handleBid = () => {
      sessionStorage.setItem("bankings",false)
      var databid={userID:localStorage.getItem("userId"),id:selectedPromoId}
      console.log(databid)
       axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/bid`, // First page at 0
     data:databid,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)
           setAnchorEl2(null);

    })
  };
   const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
    const handleMenuBClose = () => {
    setAnchorEl2(null);
    handleMobileMenuClose();
  };
    const renderBankingMenu = (

    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      id={'bank'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isMenuOpen2}
      onClose={handleMenuBClose}
    >
     <div style={{height:400,width:300}}>
     { !payment && 
      <div>
         <StyledButton onClick={handlePayment} >
           Add Bank Card
         </StyledButton >
         <StyledButton style={{top:10}} >
           Add MoMo Wallet
         </StyledButton >
         </div>
       }
         {payment &&
          <div>
          <div style={{fontSize:20}}>
             Longa Money will use the bank account information Above to ensure you receive payment for campains you participated in. Make sure the details Above are correct and up to date. These details are stored securely in our system and will never be shared with third parties.
            </div>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Bank Name*:</p>
         <TextField  onChange={handleChange} variant="outlined" name={'Bn'} style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}> Account Number*:</p>
         <TextField onChange={handleChange} variant="outlined" name="accn" style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Account Type*:</p>
         <TextField onChange={handleChange} variant="outlined"  name="aty"style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Branch Code*:</p>
         <TextField onChange={handleChange} variant="outlined"  name="bc"style={{left:10,right:10,width:280}}/>
         <StyledButton onClick={handleBid} style={{top:10,bottom:10}} >
           Submit
         </StyledButton >
         <h3 style={{color:"transparent"}}>function dfffffff</h3>
         </div>
         }
     </div>
    </Menu>
  );
   var word="dfhj";
    const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
              <MenuItem>
     <WhatsappShareButton url={`${href}/${selectedPromo}`}>
          <SocialIcon network="whatsapp" />
          
     </WhatsappShareButton>
     </MenuItem>
     <MenuItem>
      <TwitterShareButton url={`${href}/${selectedPromo}`}>
        <SocialIcon network="twitter" />
      </TwitterShareButton>
      </MenuItem>
      <MenuItem>
      <FacebookShareButton url={`${href}/${selectedPromo}`}>
        <SocialIcon network="facebook" />
      </FacebookShareButton>
      </MenuItem>
     
    </Menu>
  );
  const handleExpandButtonClick = (key,location) => () =>{
    setExpanded(!expanded);
    if(location===1){
    var temp=camps.find(({ _id }) => _id === key._id);
    var arr=[temp];
    camps=arr;
    console.log(camps);
    setPromo(key.campaignID);

    setPromoId(key._id)
    }
    else{
      setPromo("all");

    }
  };
     return(
        <div className={'home'}>
           <div className={'thebox'}>
             <div className={'round'}>
                <p className={'headertext'}>Campaigns</p>
             </div>
             <div className={'roundsmall'} />

              
              <List>
            {camps.map((item)=> (
                
                <ListItem>
                {selectedPromo==='all'&&
                  <div className={'homelistdiv'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                                            <div style={{marginLeft:10,fontSize:22}}>{item.campaignName}</div>

                      <ListItemText style={{marginLeft:6}} primary={''} />
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,1)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                    
                  </div>
                }
                  {selectedPromo===item.campaignID&&
                  <div className={'homelistdivexplore'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                                            <div style={{marginLeft:10,fontSize:22}}>{item.campaignName}</div>

                      <ListItemText style={{marginLeft:6}} primary={''} />
                      <div className={'large'} >
                      <ListItemIcon>
                         <button onClick={handleShareMenuOpen} className="buttonsexpandblue"  >
                           Share
                         </button>
                      </ListItemIcon>
                      <ListItemIcon>
                        <button onClick={handleBankMenuOpen} className="buttonsexpandred">
                         Bid
                        </button>
                      </ListItemIcon>
                      </div>
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,2)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                             {renderBankingMenu}
                                    {renderMenu}
                      <div className={'smallwidth'}>
                       <button onClick={handleShareMenuOpen} className="buttonsexpandblue"  >
                           Share
                         </button>
                         <button onClick={handleBankMenuOpen} className="buttonsexpandred">
                         Bid
                        </button>
                      </div>
                     <div className='table'>
                        <div className={'inputedit'}>
                           <div className={'identi'}>ID</div>
                            <input type='text' name="nameAndSurname" value={item.campaignID} variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Task</div>
                            <input type='text' variant='outlined' value={item.task}  name="email" className="setedit" />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Minimum Followers</div>
                            <input type='text' name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                       <div className={'inputedit'}>
                           <div className={'identi'}>Number of Imfluencers</div>
                            <input type='text' value={item.numberOfInfluencers} name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Ends in</div>
                            <input type='text' value={getDays(item.endDate)} variant='outlined' name="email" className="setedit"  />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Payment Time</div>
                            <input type='text' name="nameAndSurname" variant='outlined' className="setedit" />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Description</div>
                            <input type='text' variant='outlined'value={item.description} name="email" className="setedit"  />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Do's</div>
                            <input type='text' multilines rows={2} value={item.dos} name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Dont's</div>
                            <input type='text' rows={2} value={item.donts} variant='outlined' name="email" className="setedit" />
                      </div>
                  
                     </div>
                              <div className={'line'} style={{width:'94%'}}/>
                               <div className={'bottomdiv'} style={{width:'90%'}}>
                        <div className={'moneyside'}>
                          <MonetizationOnIcon  color={'primary'} style={{ height: 30, width: 30,marginLeft:20}} />
                          <div className={'textmon'}>
                           R {item.earnings}
                          </div>
                         </div>
                          <div className={'groupside'}>
                          <PeopleIcon  color={'primary'} style={{ marginLeft:20,height: 40, width: 30}} />
                           <div className={'textmon'}>
                            {item.bids}
                          </div>
                         </div>
                   </div>

                  </div>
                }

                </ListItem>
                    ))}

              
             </List>
          </div>
        </div>
      )
   }

 export default class HomeScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      Campaigns:[],
      id:null,
    };
  }
  componentWillMount() {
        var  id= this.props.location.pathname;
        id =id.substring(6,id.length);
              this.setState({id:id})

     axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/campaigns`, // First page at 0
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res.data)

        this.setState({Campaigns:res.data})
    })
  }


  render(){
     return(
        <Switch>
              <Route
                exact
                path="/home"
                render={(props) => (
                  <HomeScreenfunct window={window} id={'all'} Campaigns={this.state.Campaigns}/>
                )}
              />
              <Route
                exact
                path="/home/:id"
                render={(props) => (
                  <HomeScreenfunct window={window} id={this.state.id} Campaigns={this.state.Campaigns}/>
                )}
              />
         </Switch>
      )
  }
 }