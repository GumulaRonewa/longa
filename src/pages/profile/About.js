import React, { Component } from "react";
import './new.css'
import Rating from "@material-ui/lab/Rating";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import { red, pink, blue } from '@material-ui/core/colors';
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
import Avatar from "@material-ui/core/Avatar";
import CreateIcon from '@material-ui/icons/Create';
import Divider from "@material-ui/core/Divider";
import FacebookIcon from '@material-ui/icons/Facebook';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  roots: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "80%",
    height: 450,
  },
   input: {
    color: "black"
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
    height: 38,
    width:150,
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
          const [edit2, setEdit2] = React.useState(false);
          const [changed, setchanged] = React.useState(false);
          const [buttons, setbutton] = React.useState('Edit');
          const [bio, setBio] = React.useState('');
              var outliner = edit ? "outlined" : "standard";
              var profile=props.profile;
          const [file, setfile] = React.useState(null);
          const [image, setimage] = React.useState(profile.image);
          console.log(profile.image)
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
       console.log(res);
                   setEdit(!edit)



    })
          }
               const onUpload=()=>{
                                const form= new FormData();

                form.append("userID",localStorage.getItem("userId"));
      form.append("image",file);
          
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/profile-pic`, // First page at 0
     data:form,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res);
                   setEdit2(!edit2)



    })
          }
            const classes = useStyles();
          const onEdit2 =()=>{
                        setEdit2(!edit2)

          }

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
   var dob='';
               var isNule = typeof profile.dateOfBirth=== 'undefined';
        if(!isNule){

        }
            console.log(profile.dateOfBirth)
     return(
          <div>
             <div className="wrapper">

  
  <div className="profile-card js-profile-card" style={{marginTop:10}}>
  
    <div className="imgages">
      <Avatar style={{width:200,height:200}} src={profile.image} alt="profile card" />
        {edit2 &&
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
         <div className="profile-card__name">{profile.name +" " +profile.surname}</div>
                             <Rating style={{marginLeft:10,marginTop:5}} readOnly value={2} />


    </div>

    <div className="profile-card__cnt js-profile-cnt">
     
 <div className="imgages">
        <div className={"rowing"} >
      
        <div style={{marginLeft:10}}>

                  <div className={'reach'}>
                        Reach~
                      </div>
          </div>
      </div>
</div>
      <div className="profile-card-social">
       
    <div className="imgages">
        <div className={"rowing"} >
        <a href="https://twitter.com/" className="profile-card-social__item twitter" target="_blank">
          <span >
          </span>
        </a>

        <a href="https://www.instagram.com/" className="profile-card-social__item instagram" target="_blank">
          <span className="icon-font">
           <InstagramIcon style={{ color: pink[300],width:36,height:36}}/>

          </span>
        </a>
       <a href="https://www.instagram.com/" className="profile-card-social__item instagram" target="_blank">
          <span className="icon-font">
                     <TwitterIcon style={{width:36,height:36,color: blue[500] }}/>

          </span>
        </a>
 
      


        <a href="https://codepen.io/JavaScriptJunkie" className="profile-card-social__item codepen" target="_blank">
          <span className="icon-font">
          <YouTubeIcon style={{width:36,height:36,color: red[500] }} />
            
          </span>
        </a>

        <a href="https://Facebook.com.tr/" className="profile-card-social__item link" target="_blank">
          <span className="icon-font">
          <FacebookIcon style={{ color: blue[300],width:36,height:36}} />
          </span>
        </a>

      </div>
      </div>
      </div>

      
    </div>

    

  </div>
 <div className="profile-card2 js-profile-card" style={{marginTop:10}}>
    
                           <ListItem >
<ListItemText  style={{marginLeft:6}} primary={'Bio'} /> 
                    
               </ListItem> 
                      <Divider/>
           <TextField
                                id="role"
                                name="role"
                                fullWidth
                                variant={outliner}
                                multiline

                                style={{Color:'black',marginLeft:10,marginRight:10}}
                                defaultValue={profile.bio}
                                onChange={onBio}
                                variant={edit?"outlined":"standard"}
                                rows={4}
                                InputProps={{
                                  className: classes.input,
                                  readOnly: !edit,
                                  disableUnderline: true,
                                }}
                               />
                    

      
 </div>

  <div className="profile-card js-profile-card" style={{marginTop:10}}>
    
                           <ListItem >
<ListItemText  style={{marginLeft:6}} primary={'Featured Post'} /> 
                      
               </ListItem> 
                      <Divider/>
                     <TitlebarGridList />
      
 </div>  



</div>

        </div>
      )
  
 }
 const tileData = [
 
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
              title="Engagement rate~"
             
            />
          </GridListTile>
        ))}
        <GridListTile>
        
        </GridListTile>
        
      </GridList>
      {renderBankingMenu}
    </div>
  );
}



 export default class About extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      details:[]
    };
  }
  componentWillMount() {
                var data={userID:this.props.match.params.id}
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