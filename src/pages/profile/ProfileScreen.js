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
    backgroundColor:"#535353",
  },
  gridList: {
    width: "70%",
    height: 450,
  },
   input: {
    color: "white"
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
          const [changed, setchanged] = React.useState(false);
          const [buttons, setbutton] = React.useState('Edit');
          const [bio, setBio] = React.useState('');
              var outliner = edit ? "outlined" : "standard";
              var profile=props.profile;
          const [file, setfile] = React.useState(null);
          const [image, setimage] = React.useState(profile.image);
          console.log(profile.image)
          const onSub=()=>{
            var data={bio:bio,userID:sessionStorage.getItem("userId")}
          console.log(data)
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/settings/bio`, // First page at 0
     data:data,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res);
                   setEdit(!edit)



    })
          }
               const onUpload=()=>{
                                const form= new FormData();

                form.append("userID",sessionStorage.getItem("userId"));
      form.append("image",file);
          
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/profile-pic`, // First page at 0
     data:form,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res);
                   setEdit(!edit)



    })
          }
            const classes = useStyles();

          const onEdit =()=>{
            if(!edit){
              setbutton('Cancel')
            }
            else{
              setbutton('Edit')
            
            }
            setEdit(!edit)
          }
          const onBio =(e)=>{
            setBio(e.target.value)
          }
 const handleFile = (e)=> {
      setfile(e.target.files[0]);
      setimage(URL.createObjectURL(e.target.files[0]));
      setchanged(true);
    
   } 
   var dob='';
               var isNule = typeof profile.dateOfBirth=== 'undefined';
        if(!isNule){

        }
            console.log(profile.dateOfBirth)
  	 return(
  	 	    <div className={'proscreen'}>
             
                 {isNule &&
                   <Loading loading={false} />

                 }
                {isNule !==true &&
                 <div className={'probox'}>
                   <div className={'toppro'}>
                    <ListItem style={{width:"70%"}}>
                         <ListItemText primary={' '} secondary={''} />
                         <ListItemIcon>
                            <StyledButton2 onClick={onEdit}>
                             {buttons}
                            </StyledButton2>
                         </ListItemIcon>
                      </ListItem>
                     <img src={!changed?profile.image:image} className='imge' alt={image} />
                             {edit &&
                        <div className={'rowsz'}>
                       <input
                         type="file"
                         accept="image/x-png,image/gif,image/jpeg"
                         onChange={handleFile}
                         id="customFile"

                        />
                               <StyledButton2 onClick={onUpload}>
                              upload
                            </StyledButton2>                 </div>

                         }
                    <Rating style={{marginLeft:30,marginTop:5}} readOnly value={profile.rating} />
                      <div className={'reach'}>
                        Reach~
                      </div>
                         <div style={{marginTop:5,width:"70%",color:'white'}} >
                             <TextField
                                id="role"
                                name="role"
                                fullWidth
                                variant={outliner}
                                multiline

                                style={{Color:'white'}}
                                defaultValue={profile.bio}
                                onChange={onBio}
                                variant={edit?"outlined":"standard"}
                                rows={5}
                                InputProps={{
                                  className: classes.input,
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
                       <div className={'columnx'} >
                     <Tabs defaultActiveKey="posts" id="uncontrolled-tab-example">
                     <Tab eventKey="posts" title="Featured Post">
                        <TitlebarGridList  style={{backgroundColor:"#535353"}} edit={edit} />
                      </Tab>
                      <Tab  eventKey="Profile" title="About">
                               <div   className={'tabs'}>
                  <div  className={'inputedits'}>
                       <div style={{color:'white'}} className={'identi'}>Full Names:</div>
                       <div style={{color:'white'}} className={'identi'}>{profile.name +" " +profile.surname}</div>
                  </div>
                  <div className={'inputedits'}>
                        <div style={{color:'white'}} className={'identi'}>Email</div>
                        <div style={{color:'white'}} className={'identi'}>{profile.email}</div>
                  </div>
                  <div style={{width:"100%"}}  className={'inputedits'}>
                        <div style={{color:'white'}} className={'identi'}>Phone Number</div>
                        <div style={{color:'white'}} className={'identi'}>{profile.phone}</div>
                  </div>
                <div s className={'inputedits'}>
                      <div style={{color:'white'}} className={'identi'}>Date of birth</div>
                    <div style={{color:'white'}} className={'identi'}>{profile.dateOfBirth.substring(0,10)}</div>
                </div>
                <div style={{width:"80%"}}  className={'inputedits'}>
                       <div style={{color:'white'}} className={'identi'}>Gender</div>
                         <div style={{color:'white'}} className={'identi'}>{profile.gender}</div>
                </div>
                <div style={{width:"80%",marginBottom:6}}  className={'inputedits'}>
                        <div style={{color:'white'}} className={'identi'}>Country</div>
                           <div style={{color:'white'}} className={'identi'}>{profile.country} </div>

                </div>
                


             </div>
                          </Tab>
                      
                      
                    </Tabs>
                    </div>
                   </div>

                 </div>
               }
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
           <GridListTile>
        <button style={{width:250}} onClick={handleBankMenuOpen} className={'buttns'}>+</button>

        </GridListTile>
          </GridListTile>
        ))}
        <GridListTile>
        <button onClick={handleBankMenuOpen} className={'buttns'}>+</button>
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
                var data={userID:sessionStorage.getItem("userId")}
        console.log(data);

     axios({
         method: 'POST',
         url: `https://longa-money.herokuapp.com/api/u`, // First page at 0
           data:data,

       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
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