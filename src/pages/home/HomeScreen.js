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
     var window=props.window;
       window=window.location;
      var href=window.href;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
  const classes = useStyles();
  const [selectedPromo, setPromo] = React.useState(null);
  const [selectedPromoId, setPromoId] = React.useState(null);
  var { SocialIcon } = require('react-social-icons');
    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen2 = Boolean(anchorEl2);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleShareMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleBankMenuOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };

   const handlePayment = (event) => {
     setPayment(!payment)
  };
  const menuId = 'share-menu';
   const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
     const handleBid = () => {
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
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Bank Name*:</p>
         <TextField  variant="outlined" style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}> Account Number*:</p>
         <TextField  variant="outlined" style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Account Type*:</p>
         <TextField  variant="outlined" style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 3 }}>Branch Code*:</p>
         <TextField  variant="outlined" style={{left:10,right:10,width:280}}/>
         <StyledButton onClick={handleBid} style={{top:10,bottom:10}} >
           Submit
         </StyledButton >
         <h3 style={{color:"transparent"}}>function dfffffff</h3>
         </div>
         }
     </div>
    </Menu>
  );
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
          WhatsApp
     </WhatsappShareButton>
     </MenuItem>
     <MenuItem>
      <TwitterShareButton url={`${href}/${selectedPromo}`}>
        <SocialIcon network="twitter" />
        Twitter
      </TwitterShareButton>
      </MenuItem>
      <MenuItem>
      <FacebookShareButton url={`${href}/${selectedPromo}`}>
        <SocialIcon network="facebook" />
        Facebook
      </FacebookShareButton>
      </MenuItem>
      <MenuItem>
      <RedditShareButton url={`${href}/${selectedPromo}`}>
        <SocialIcon network="reddit" />
        Reddit
      </RedditShareButton>
      </MenuItem>
    </Menu>
  );
  const handleExpandButtonClick = (key) => () =>{
    setPromo(key.campaignID);
    setPromoId(key._id)
    setExpanded(!expanded);
  };
     return(
        <div className={'home'}>
           <div className={'thebox'}>
             <div className={'round'}>
                <p className={'headertext'}>Campaigns</p>
             </div>
             <div className={'roundsmall'} />

              
              <List>
                      {props.Campaigns.map((item)=> (

                <ListItem>
                  <div className={selectedPromo === item.campaignID && expanded ?'homelistdivexplore':'homelistdiv'}>
                  <div className={'rowe'}>
                  <div>
                   <Avatar                            
                       style={{ height: 60, width: 60, left: 20,top:10 }}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} 
                    />
                    </div> 
                   {selectedPromo === item.campaignID && expanded &&
                    <div className={'rowe'}>
                      <div className={'expromo'}>
                        {item.campaignName}
                      </div>
                      <div className={'hidebutton'}>
                       <button className="buttonsexpandblue" onClick={handleShareMenuOpen}>
                                         <img src={share} className='iconex' alt="b"/>
                                         Share

                        </button>
                        <button onClick={handleBankMenuOpen} className="buttonsexpandred">
                        <GavelIcon  className='iconex' />
                         <div style={{marginLeft:6}}> Bid</div>
                        </button>
                                    {renderBankingMenu}
                                    {renderMenu}

                        </div>
                         <IconButton onClick={handleExpandButtonClick(item)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
                    <ArrowForwardIosIcon  color={'primary'} style={{ height: 30, width: 30,marginTop:5,position:"abosolute"}} />
                  </IconButton>
                      </div>
                   }
                  </div>
                   <ListItemText
                            style={{ marginLeft: 50,maxHeight:50 }}
                            secondary={expanded ? "":`${item.description}`}
                            primary={expanded ? "":`${item.campaignName}`}

                        />
                {selectedPromo === item.campaignID && expanded &&
                 <div>
                   <div  className={'ctextc'} style={{marginLeft:30}}>
                     {item.description}
                   </div>
                   <div className={'line'}>
                   </div >
                   <div className={'bottomdiv'}>
                        <div className={'moneyside'}>
                          <MonetizationOnIcon  color={'primary'} style={{ height: 30, width: 30,marginLeft:20}} />
                          <div className={'textmon'}>
                           R {item.budget}
                          </div>
                         </div>
                          <div className={'groupside'}>
                          <PeopleIcon  color={'primary'} style={{ marginLeft:20,height: 40, width: 30}} />
                           <div className={'textmon'}>
                            {item.bids}
                          </div>
                         </div>
                   </div>
                    <div className={'hidebutton2'}>
                       <button onClick={handleShareMenuOpen} className="buttonsexpandblue">
                                         <img src={share} className='iconex' alt="b"/>
                                         Share

                        </button>
                        <button onClick={handleBankMenuOpen} className="buttonsexpandred">
                        <GavelIcon  className='iconex' />
                         <div style={{marginLeft:6}}> Bid</div>
                        </button>
                        </div>
                   </div>
                 }
                 {!expanded &&
                  <IconButton onClick={handleExpandButtonClick(item)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
                    <ArrowForwardIosIcon  color={'primary'} style={{ height: 30, width: 30,marginTop:5,position:"abosolute"}} />
                  </IconButton>
                  }

                  </div>

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
      Campaigns:[]
    };
  }
  componentDidMount() {
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

        <HomeScreenfunct window={window} Campaigns={this.state.Campaigns} />
      )
  }
 }