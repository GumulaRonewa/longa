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
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Switch, Route, Link } from "react-router-dom";
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { red, pink, blue } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import circle from '../../images/circle.svg'
import GroupIcon from '@material-ui/icons/Group';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {
  FacebookShareButton,
  
  TwitterShareButton,
  WhatsappShareButton,
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
  const [MoMo, setMomo] = React.useState(false);
   const [name, setName] = React.useState('');
         const [type, setType] = React.useState('');
         const [number, setNumber] = React.useState('');
         const [branch, setBranch] = React.useState('');
         const [phone, setPhone] = React.useState('');
         const [bids, setBids] = React.useState([]);
     var window=props.window;
       window=window.location;
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
   const handleMomoadd=()=>{
          var data={momo:phone,userID:sessionStorage.getItem("userId")}
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/momo`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       
                     handleBid();

    })
  }
 
   const handleBank=()=>{
          var data={bankName:name,branchCode:branch,accountNumber:number,accountType:type,userID:sessionStorage.getItem("userId")}
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/banking`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
              handleBid();


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
   const handleSkip = (event) => {
            handleBid();
                 setAnchorEl2(null);
     

  };
   const handleMomo1 = (event) => {
     setMomo(!MoMo)
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
      setBids(old =>[...old,selectedPromo]);
      console.log(bids)
      var databid={userID:sessionStorage.getItem("userId"),id:selectedPromoId}
      console.log(databid)
       axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/bid`, // First page at 0
     data:databid,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
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
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'bank'}
      keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}

      open={isMenuOpen2}
      onClose={handleMenuBClose}
    >
     <div style={{height:400,width:320, background: 'rgba(250,250,250,.5)'}} className="overlay">
     { !payment && !MoMo &&
      <div>
         <StyledButton onClick={handlePayment} >
           Add Bank Card
         </StyledButton >
         <StyledButton  onClick={handleMomo1} style={{top:10}} >
           Add MoMo Wallet
         </StyledButton >
         <StyledButton onClick={handleSkip} style={{top:90}} >
           Skip
         </StyledButton >
         </div>
       }
         {payment  &&
          <div>
          <div style={{fontSize:20,paddingLeft:10,paddingRight:10}}>
             Longa Money will use the bank account information below to ensure you receive payment for Campaings you participate in. Make sure the details below are correct and up to date. These details are stored securely in our system and will never be shared with third parties.
            </div>
         <p style={{ "font-size": "18px", paddingLeft: 10 }}>Bank Name*:</p>
         <TextField  onChange={handleChange} variant="outlined" name={'Bn'} style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 10 }}> Account Number*:</p>
         <TextField onChange={handleChange} variant="outlined" name="accn" style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft:  10}}>Account Type*:</p>
         <TextField onChange={handleChange} variant="outlined"  name="aty"style={{left:10,right:10,width:280}}/>
         <p style={{ "font-size": "18px", paddingLeft: 10 }}>Branch Code*:</p>
         <TextField onChange={handleChange} variant="outlined"  name="bc"style={{left:10,right:10,width:280}}/>
         <StyledButton onClick={handleBank} style={{top:10,bottom:10}} >
           Submit
         </StyledButton >
         <h3 style={{color:"transparent"}}>function dfffffff</h3>
         </div>
         }
         { MoMo &&
            <div>
            <p style={{ "font-size": "18px", paddingLeft: 10 }}>Momo Number*:</p>
            <TextField  onChange={handleChange} variant="outlined" name={'contactNumber'} style={{left:10,right:10,width:280}}/>
             <StyledButton onClick={handleMomoadd} style={{top:10,bottom:10}} >
           Submit
         </StyledButton >
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
    <div className={"rowsz"}>
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
     </div>
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
           
    
              <List>
            {camps.map((item)=> (
                
                <ListItem>
                {selectedPromo==='all'&&
                  <div className={'homelistdivexplore'}>
                    <div  className={'cardsxe'}>

                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'L'} alt={'L'}/>
                                            <div style={{marginLeft:10,fontSize:22}}>{item.campaignName}</div>
                      <ListItemText style={{marginLeft:6}} primary={''} />
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,1)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                    </div>
                    <div className={'rowx'}>
                    <div  className={'cardsx'}>
                      <div className={'cardtext'}>Followers </div>
                      <div> <GroupIcon style={{height:70,width:70}} /></div>
                                            <div className={'cardtext'}>8 </div>

                    </div>
                    <div className={'cardsxc'}>
                      <div className={'cardtext'}> Influencers </div>
                      <div> <img src={circle} alt='' style={{height:70,width:70}}/> </div>
                                            <div className={'cardtext'}>{item.numberOfInfluencers}</div>

                    </div>
                     <div className={'cardsxc'}>
                      <div className={'cardtext'}> Tasks </div>
                                                 < div className={'rowsz'}>

                      <div className={'colic'} style={{marginLeft:-2}}>
                            <FacebookIcon style={{ color: blue[400] ,width:30,height:30}} /> {item.task.facebook}
                            </div>
                            <div className={'colic'}>
                            <InstagramIcon style={{ color: pink[300] ,width:30,height:30 }} />  {item.task.instagram}
                            </div>
                            </div>
                                                 < div className={'rowsz'}>

                                      <div className={'colic'}>
                            <YouTubeIcon style={{ color: red[500],width:30,height:30}} />  {item.task.youtube}</div>
                            <div className={'colic'}>
                            <TwitterIcon style={{ color: blue[500] }}/>  {item.task.twitter}
                            </div>
                            </div>
                            </div>

                    </div>

                  </div>
                }
                  {selectedPromo===item.campaignID&&
                  <div className={'homelistdivexplore'}>
                                       <div className={'cardsxe'}>

                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'L'} alt={'L'} />
                                            <div style={{marginLeft:10,fontSize:22}}>{item.campaignName}</div>

                      <div className={'large'} >
                      <ListItemIcon style={{marginLeft:-20}}>
                         <button onClick={handleShareMenuOpen} className="buttonsexpandblue"  >
                           Share
                         </button>
                      </ListItemIcon>
                      <ListItemIcon>
                        <button onClick={handleBankMenuOpen} className={item.bidders.includes(sessionStorage.getItem("userId")) || bids.includes(selectedPromo)?'buttonsexpandgreen':"buttonsexpandred"}>
                         Bid
                        </button>
                      </ListItemIcon>
                      </div>
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,2)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:-15,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                             {renderBankingMenu}
                                    {renderMenu}
                      <div className={'smallwidth'}>
                       <button onClick={handleShareMenuOpen} className="buttonsexpandblue"  >
                           Share
                         </button>
                         <button onClick={handleBankMenuOpen} className={item.bidders.includes(sessionStorage.getItem("userId")) || bids.includes(selectedPromo)?'buttonsexpandgreen':"buttonsexpandred"}>
                         Bid
                        </button>
                      </div>
                    </div>
                     <div className='table'>
                       <div className={'rowx'}>
                    <div  className={'cardsx'}>
                      <div className={'cardtext'}>Followers </div>
                      <div> <GroupIcon style={{height:70,width:70}} /></div>
                                            <div className={'cardtext'}>{item.bids}</div>

                    </div>
                    <div className={'cardsxc'}>
                      <div className={'cardtext'}> Influencers </div>
                      <div> <img src={circle} alt='' style={{height:70,width:70}}/> </div>
                                            <div className={'cardtext'}>{item.numberOfInfluencers}</div>

                    </div>
                     <div className={'cardsxc'}>
                      <div className={'cardtext'}> Tasks </div>
                                                 < div className={'rowx'}>

                      <div className={'colic'} style={{marginLeft:-2}}>
                            <FacebookIcon style={{ color: blue[400] ,width:30,height:30}} /> {item.task.facebook}
                            </div>
                            <div className={'colic'}>
                            <InstagramIcon style={{ color: pink[300] ,width:30,height:30 }} />  {item.task.instagram}
                            </div>
                            </div>
                                                 < div className={'rowx'}>

                                      <div className={'colic'}>
                            <YouTubeIcon style={{ color: red[500],width:30,height:30}} />  {item.task.youtube}</div>
                            <div className={'colic'}>
                            <TwitterIcon style={{ color: blue[500] }}/>  {item.task.twitter}
                            </div>
                            </div>
                            </div>

                    </div>
                          <div className={'rowx'}>
                    <div  className={'cardsx'}>
                      <div className={'cardtext'}>Ends in </div>
                      <div> <ScheduleIcon style={{height:70,width:70}} /></div>
                                            <div className={'cardtext'}>{getDays(item.endDate)}</div>

                    </div>
                    <div className={'cardsxc'}>
                      <div className={'cardtext'}> Payment Time </div>
                      <div> <ScheduleIcon style={{height:70,width:70}}/> </div>
                                            <div className={'cardtext'}></div>

                    </div>
                     <div className={'cardsxc'}>
                      <div className={'cardtext'}> Payment </div>
                                               <div> <MonetizationOnIcon style={{height:70,width:70}}/> </div>
                                            <div className={'cardtext'}>R {item.earnings}</div>

                            </div>

                    </div>
                    <div className={'rowx'}>
                    <div  className={'cardsxd'}>
                      <div className={'cardtext'}>Do's </div>
                                            <div className={'cardtextb'}>{item.dos}</div>

                    </div>
                    <div className={'cardsxd'}>
                      <div className={'cardtext'}> Dont's </div>
                                            <div className={'cardtextb'}>{item.donts}</div>

                    </div>
                     
                    </div>
                     <div className={'cardsxe'}>
                      <div className={'cardtext'}> Description</div>
                                            <div className={'cardtextb'}>{item.description}</div>

                    </div>
                     
                    
                  
                     </div>
                      

                  </div>
                }

                </ListItem>
                    ))}

              
             </List>
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
     console.log(window)
        var  id= this.props.location.pathname;
        id =id.substring(6,id.length);
              this.setState({id:id})

     axios({
      method: 'GET',
     url: `https://longa-money.herokuapp.com/api/campaigns`, // First page at 0
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res.data)
       var data=res.data;
               this.setState({Campaigns:data})
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