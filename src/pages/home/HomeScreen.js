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
import axios from "axios";

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
 function HomeScreenfunct(props) {
const [expanded, setExpanded] = React.useState(false);
         console.log(props.Campaigns)
         console.log(typeof phases)

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
                        {item.name}
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
                         <IconButton onClick={handleExpandButtonClick(item.campaignID)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
                    <ArrowForwardIosIcon  color={'primary'} style={{ height: 30, width: 30,marginTop:5,position:"abosolute"}} />
                  </IconButton>
                      </div>
                   }
                  </div>
                   <ListItemText
                            style={{ marginLeft: 50,maxHeight:50 }}
                            secondary={expanded ? "":`${item.description}`}
                            primary={expanded ? "":`${item.name}`}

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
                  <IconButton onClick={handleExpandButtonClick(item.campaignID)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'} >
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
        this.setState({Campaigns:res.data})
    })
  }


  render(){
     return(

        <HomeScreenfunct Campaigns={this.state.Campaigns} />
      )
  }
 }