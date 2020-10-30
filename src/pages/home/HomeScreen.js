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
    {id:"2e",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2d",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2x",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"23",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2a",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"21",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},
    {id:"2b",phase:"Phase 2",plan:"Automation",duration:"12 Weeks",image:"https://cdn.iconscout.com/icon/premium/png-512-thumb/setting-167-243672.png"},

]
export default function HomeScreen(props) {
const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const [selectedPromo, setPromo] = React.useState(null);
  const handleExpandButtonClick = (key) => () =>{
    setPromo(key)
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
                      {phases.map(({id,phase,plan,duration,image})=> (

                <ListItem>
                  <div className={selectedPromo === id && expanded ?'homelistdivexplore':'homelistdiv'}>
                  <div className={'rowe'}>
                  <div>
                   <Avatar                            
                       style={{ height: 60, width: 60, left: 20,top:10 }}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} 
                    />
                    </div> 
                   {selectedPromo === id && expanded &&
                    <div className={'rowe'}>
                      <div className={'expromo'}>
                         MTN YELLO
                      </div>
                      <div className={'hidebutton'}>
                       <button className="buttonsexpandblue">
                                         <img src={share} className='iconex' alt="b"/>
                                         Share

                        </button>
                        <button className="buttonsexpandred">
                        <GavelIcon className='iconex' />
                         <div style={{marginLeft:6}}> Bid</div>
                        </button>
                        </div>
                         <IconButton onClick={handleExpandButtonClick(id)}  className={selectedPromo === id ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
                    <ArrowForwardIosIcon  color={'primary'} style={{ height: 30, width: 30,marginTop:5,position:"abosolute"}} />
                  </IconButton>
                      </div>
                   }
                  </div>
                   <ListItemText
                            style={{ marginLeft: 50,maxHeight:50 }}
                            primary={expanded ? "":"MTN YELLO"}
                            secondary={expanded ? "":"Lorem ipsum dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa dolor sit amet, consetetur sa"}

                        />
                {selectedPromo === id && expanded &&
                 <div>
                   <div  className={'ctextc'} style={{marginLeft:30}}>
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
                    <div className={'hidebutton2'}>
                       <button className="buttonsexpandblue">
                                         <img src={share} className='iconex' alt="b"/>
                                         Share

                        </button>
                        <button className="buttonsexpandred">
                        <GavelIcon className='iconex' />
                         <div style={{marginLeft:6}}> Bid</div>
                        </button>
                        </div>
                   </div>
                 }
                 {!expanded &&
                  <IconButton onClick={handleExpandButtonClick(id)}  className={selectedPromo === id ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
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