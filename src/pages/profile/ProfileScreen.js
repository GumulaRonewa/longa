import React, { Component } from "react";
import './profile.css'
import Rating from "@material-ui/lab/Rating";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import { red, pink, blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import {Tab,Tabs} from 'react-bootstrap';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import axios from "axios";
import Loading from "../loading/loading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const StyledButton = withStyles({
  root: {
    background: "#0F81C7",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    width:280,
    left:10,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
const StyledButton2 = withStyles({
  root: {
    background: "#0F81C7",
    borderRadius: 6,
    border: 0,
    color: "white",
    height: 48,
    width:80,
    left:80,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
  function ProfileScreenmain(props) {
          const [edit, setEdit] = React.useState(false);
          const [bio, setBio] = React.useState('');
              var outliner = edit ? "outlined" : "standard";
              var profile=props.profile;
          const [file, setfile] = React.useState('https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png');
          const onSub=()=>{
            var data={bio:bio,userID:localStorage.getItem("userId")}
          console.log(data)
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/bio`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res)

    })
          }
          const onEdit =()=>{
            setEdit(!edit)
          }
          const onBio =(e)=>{
            setBio(e.target.value)
          }
 const handleFile = (e)=> {
      setfile(URL.createObjectURL(e.target.files[0]));
    
   } 
   var dob='';
               var isNule = typeof profile.dateOfBirth=== 'undefined';
        if(!isNule){

        }
            console.log(profile.dateOfBirth)
  	 return(
  	 	    <div className={'profhome'}>
           <div className={'profilebox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>Profile</p>

                 </div>
                 {isNule &&
                   <Loading loading={false} />

                 }
                {isNule !==true &&
                 <div className={'pbox'}>
                    <div className={'biop'}>
                       <img src={file} className='imge' alt='' />
                       {edit &&
                       <input
          type="file"
           accept="image/x-png,image/gif,image/jpeg"
           onChange={handleFile}
          style={{width:'100%'}}                
          id="customFile"
         /> }
                       <Rating style={{marginLeft:80,marginTop:5}} value={5} />
                       <div style={{marginTop:5,marginLeft:-20}} >
                       <TextField
                            id="role"
                            name="role"
                            fullWidth
                            variant={outliner}
                            multiline
                            defaultValue={profile.bio}
                            onChange={onBio}
                            variant="outlined"
                            rows={10}
                            InputProps={{
                              readOnly: !edit,
                              disableUnderline: true,
                            }}
                          />
                      {edit &&
                      <StyledButton  onClick={onSub} style={{top:10,bottom:10}} >
                             Save
                      </StyledButton >
                    }
                    </div>
         
                    </div>
                    <div className={'tab'}>
                      <ListItem style={{width:"90%"}}>
                         <ListItemText primary={' '} secondary={''} />
                         <ListItemIcon>
                            <StyledButton2 onClick={onEdit}>
                             Edit
                            </StyledButton2>
                         </ListItemIcon>
                      </ListItem>
                      <div className={'username'}>{profile.name} {profile.surname}</div>
                      <div className={'accountsbox'}>
                        <div className={'lntext'} >Social Accounts </div>
                        <div className={'rowx'}>
                          <button className={'iconbt'}>
                         <div className={'iconpl'} >
                          <InstagramIcon  style={{ color: pink[300]  }} size="large" />
                          <div>4.6m</div>
                          </div>
                           </button>
                           <button className={'iconbt'}>
                          <div className={'iconpl'} >
                          <YouTubeIcon style={{ color: red[500] }} size="large" />
                          <div>460K</div>
                          </div>
                           </button>
                           <button className={'iconbt'}>
                          <div className={'iconpl'} >
                          <TwitterIcon style={{ color: blue[500] }} size="large" />
                           <div>4678</div>
                          </div>
                           </button>
                           <div className={'reach'}>Reach ~ 5.12m</div>
                        </div>
                 </div>
                      <div className={'columnx'} >
                     <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
                      <Tab eventKey="Profile" title="About">
                               <div className={'divs'} style={{width:'90%'}}>
                  <div className={'inputedit'}>
                       <div className={'identi'}>Full Names</div>
                        <input type='text'value={profile.name+' '+profile.surname} name="nameAndSurname" variant='outlined' className="setedit" placeholder="Name & Surname" />
                  </div>
                  <div className={'inputedit'}>
                        <div className={'identi'}>Email</div>
                        <input type='text' value={profile.email} variant='outlined' name="email" className="setedit" placeholder="Email Address" />
                  </div>
                  <div className={'inputedit'}>
                        <div className={'identi'}>Phone Number</div>
                        <input type='number' name="contactNumber" variant='outlined' className="setedit" placeholder="Contact Number" />
                  </div>
                <div className={'inputedit'}>
                      <div className={'identi'}>Date of birth</div>
                      <input type='date'value={profile.dateOfBirth.substring(0,10)} name="campaignName" variant='outlined' style={{width:'100%'}} className="setedit" placeholder="Name of Campaign" />
                </div>
                <div className={'inputedit'}>
                       <div className={'identi'}>Gender</div>
                         <input type='text' variant='outlined' value={profile.gender} name="email" className="setedit" placeholder="Gender" />
                </div>
                <div className={'inputedit'}>
                        <div className={'identi'}>Country</div>
                         <input type='text' variant='outlined' value={profile.country} name="email" className="setedit" placeholder="Country" />
                </div>
                


             </div>
                          </Tab>
                      <Tab eventKey="posts" title="Social Media Post">
                        <TitlebarGridList edit={edit} />
                      </Tab>
                      
                    </Tabs>
                    </div>
                    </div>
                 </div>
               }
              </div>
        </div>
  	 	)
  
 }


const tileData = [
   {
      img: 'https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg',
      title: 'Image',
      author: 'Twitter',
    },
     {
      img: 'https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg',
      title: 'Image',
      author: 'Instagram',
    },
     {
      img: 'https://pm1.narvii.com/6424/71de2b7b9611f0522cc2d88a04609cfdc0bc5936_00.jpg',
      title: 'Image',
      author: 'Instagram',
    },
]


function TitlebarGridList(props) {
  const classes = useStyles();
      const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleMenuBClose = () => {
    setAnchorEl2(null);
  }
    const handleBankMenuOpen = (event) => {
          setAnchorEl2(event.currentTarget);
    
  };
      const isMenuOpen2 = Boolean(anchorEl2);

  const renderBankingMenu = (

    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      id={'bank'}
      keepMounted
      transformOrigin={{ vertical: 'center', horizontal: 'center' }}
      open={isMenuOpen2}
      onClose={handleMenuBClose}
    >
     <div style={{height:200,width:300}}>
  
          <div>
                   <h3 style={{color:"transparent"}}>function dfffffff</h3>

         <TextField placeholder={'Media url'} style={{left:10,right:10,width:280}}/>
         
         <StyledButton  style={{top:10,bottom:10}} >
           Save
         </StyledButton >
         <h3 style={{color:"transparent"}}>function dfffffff</h3>
         </div>
         
     </div>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>From: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
        <GridListTile>
        { props.edit &&
        <button onClick={handleBankMenuOpen} className={'buttns'}>+</button>
      }
        </GridListTile>
        
      </GridList>
      {renderBankingMenu}
    </div>
  );
}
 export default class ProfileScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      details:[]
    };
  }
  componentWillMount() {
                var data={userID:localStorage.getItem("userId")}
        console.log(data);

     axios({
         method: 'POST',
         url: `https://longa-money.herokuapp.com/api/u`, // First page at 0
           data:data,

       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
      console.log(res.data)
        this.setState({details:res.data})
    }).catch((e) => {
        console.log(e);
      });
  }


  render(){
     return(

        <ProfileScreenmain window={window} profile={this.state.details} />
      )
  }
}
