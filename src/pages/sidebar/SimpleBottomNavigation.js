import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link, } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import {useHistory} from 'react-router-dom' ;
import {
  
  FaHome,
 FaBriefcase,
FaAt, 
 FaRegEnvelope,
 FaWallet,
} from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:70,
    position:'fixed'
  
  },
    root2: {
    width: '100%',
    marginTop:0,
    position:'fixed'
  
  },
});

function SimpleBottomNavigation1(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(parseInt(sessionStorage.getItem('value')));
  const [classNa, setClass] = React.useState(classes.root2);
          console.log(typeof sessionStorage.getItem('value'))
    const history = useHistory();
  var window=props.window;
  window.onscroll =function() {
                    if(window.pageYOffset>0){
                      setClass(classes.root);

                    }
                    else{
                          setClass(classes.root2);
                    }

        }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        switch(newValue) {
        case 0:
        window.open("home", "_self")
        sessionStorage.setItem('value',0)
          break;
        case 1:
           window.open("feed", "_self");
           sessionStorage.setItem('value',1)
           break;
        case 2:
           window.open('/myjobs',"_self")
           sessionStorage.setItem('value',2)
           break;
          case 3:
           window.open('/wallet',"_self")
           sessionStorage.setItem('value',3)
           break;
           case 4:
           window.open('/myjobs',"_self")
           sessionStorage.setItem('value',4)
           break;
        default:
           window.open('/home',"_self");
           break
    }
     
      }}
      showLabels
      className={classNa}
    >

      <BottomNavigationAction label="Home" name={'home'}  button component={Link} to={"/home"} icon={<FaHome style={{height:24,width:23}} />} />
      <BottomNavigationAction label="Feed" button component={Link} to={"/home"}    icon={<FaAt style={{height:24,width:23}}/>} />
      <BottomNavigationAction label="Messages"  button component={Link} to={"/home"}  icon={<FaRegEnvelope  style={{height:24,width:23}} />} />
      <BottomNavigationAction label="Wallet"  icon={<FaWallet style={{height:24,width:23}} />} />
      <BottomNavigationAction label="Jobs"   icon={<FaBriefcase style={{height:24,width:23}} />} />
    </BottomNavigation>
  );
}

 export default class SimpleBottomNavigation extends React.Component {



  render(){
     return(

        <SimpleBottomNavigation1 window={window}/>
      )
  }
 }