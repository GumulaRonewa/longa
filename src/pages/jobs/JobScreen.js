import React from "react";
import './job.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import clsx from 'clsx';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
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

const phases=[
    {id:"1",phase:"Phase 1",plan:"Business plan",duration:"6 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},

]

export default function JobScreen(props) {
   const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  console.log(props);
  const [selectedPromo, setPromo] = React.useState(null);
  const handleExpandButtonClick = (key) => () =>{
    setPromo(key)
    setExpanded(!expanded);
  };
  	 return(
  	 	  <div className={'jobhome'}>
           <div className={'jobbox'}>
                        <div className={'jobroundsmall'} />

             <div className={'jobround'}>
                <p className={'jobheadertext'}>My Jobs</p>
             </div>
                      <List>
             {phases.map(({id,phase,plan,duration,image})=> (

                <ListItem>
                  <div className={selectedPromo === id && expanded ?'joblistdivexplore':'joblistdiv'}>
                  <div className={'rowe'}>
                   <Avatar                            
                   style={{ height: 60, width: 60, left: 20,top:10 }}
                  src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                  <div className={'promojname'}>MTN Yello </div>
                  <div className={'promojname'}>Stage: Bid  </div>
                   <IconButton onClick={handleExpandButtonClick(id)}  className={selectedPromo === id ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
                    <ArrowForwardIosIcon  color={'primary'} style={{ height: 30, width: 30,marginTop:-3,position:"abosolute"}} />
                  </IconButton>
                      </div>
                {selectedPromo === id && expanded &&
                 <div>
                   <div  className={'ctextc'} style={{marginLeft:30,marginTop:25}}>
                    Lorem ipsum dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa
                   </div>
                   <div className={'line'}>
                   </div >
                   <div className={'bottomdiv'}>
                        <div className={'moneyside'}>
                          <MonetizationOnIcon  color={'primary'} style={{ height: 30, width: 30,marginLeft:20}} />
                          <div className={'textmon'}>
                           R 4000
                          </div>
                         </div>
                          <div className={'groupside'}>
                          <PeopleIcon  color={'primary'} style={{ marginLeft:20,height: 40, width: 30}} />
                           <div className={'textmon'}>
                            4000
                          </div>
                         </div>
                   </div>
                   </div>
                 }
                  </div>

                </ListItem>
              
                ))}

             </List>
          </div>
  	 	  </div>
  	 	)
  
 }