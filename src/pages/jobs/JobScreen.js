import React from "react";
import './job.css';
import '../home/home.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import clsx from 'clsx';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import axios from "axios";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { red, pink, blue } from '@material-ui/core/colors';
import TimeLine from './TimeLine'
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

function JobScreenfunct(props) {
   const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  console.log(props);
  var job=props.Jobs;
  const [selectedPromo, setPromo] = React.useState('all');
  const getDays=(day)=>{
    var msDiff =  new Date(day).getTime()-new Date().getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24))+ " days";
         return days;
  }
  const handleExpandButtonClick = (key,location) => () =>{
        if(location===1){

    setPromo(key.campaignID)
  }
  else{
    setPromo('all')
  }
      setExpanded(!expanded);

  };
   console.log("fh")
  	 return(
  	 	  <div className={'jobhome'}>
         
                      <List>
             {job.map((item)=> (

               <ListItem>
                {selectedPromo==='all'&&
                  <div className={'homelistdivexplore'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                                             <div style={{marginLeft:10,fontSize:24}}>{item.campaign.campaignName}</div>
                      <ListItemText style={{marginLeft:10,fontSize:20}} primary={''} />

                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,1)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                         <TimeLine time={item.status}/>

                  </div>
                }
                  {selectedPromo===item.campaignID&&
                  <div className={'homelistdivexplore'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                     <div style={{marginLeft:10,fontSize:22}}>{item.campaign.campaignName}</div>
                      <ListItemText style={{marginLeft:10,fontSize:20}} primary={''} />
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,2)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                                                                                          <TimeLine time={item.status}/>
    
                     <div className='table'>
                       <div className={'inputedit'}>
                           <div className={'identih'}>ID</div>
                            <div className={'identih2'}  >{item.campaign.campaignID}</div>
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identih'}>Task</div>
                            <div className={'identih2'}> 
                            <div className={'colic'}>
                            <FacebookIcon style={{ color: blue[400] }} /> {item.campaign.task.facebook} 
                            </div> 
                            <div className={'colic'}>
                            <InstagramIcon style={{ color: pink[300] }} /> {item.campaign.task.instagram}
                            </div>
                              <div className={'colic'}>
                            <TwitterIcon style={{ color: blue[500] }}/> {item.campaign.task.instagram}
                            </div>
                            <div className={'colic'}>
                            <YouTubeIcon style={{ color: red[500] }} /> {item.campaign.task.youtube}</div>
                            </div>
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identih'}>Minimum Followers</div>
                            <div className={'identihw'}  ></div>
                      </div>
                       <div className={'inputedit'}>
                           <div className={'identih'}>Number of Influencers</div>
                           <div className={'identih2'}  >{item.campaign.numberOfInfluencers}</div>
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identih'}>Ends in</div>
                            <div className={'identih2'}  >{getDays(item.campaign.endDate)}</div>
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identih'}>Payment Time</div>
                            <div className={'identih2'}  ></div>
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identih'}>Description</div>
                            <div className={'identih2'}  >{item.campaign.description}</div>
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identih'}>Do's</div>
                           <div className={'identih2'}  >{item.campaign.dos}</div>
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identih'}>Dont's</div>
                            <div className={'identih2'}  >{item.campaign.donts}</div>
                      </div>
                  
                     </div>
                              <div className={'line'} style={{width:'94%'}}/>
                               <div className={'bottomdiv'} style={{width:'90%'}}>
                        <div className={'moneyside'}>
                          <MonetizationOnIcon  color={'primary'} style={{ height: 30, width: 30,marginLeft:20}} />
                          <div className={'textmon'}>
                           R {item.campaign.earnings}
                          </div>
                         </div>
                          <div className={'groupside'}>
                          <PeopleIcon  color={'primary'} style={{ marginLeft:20,height: 40, width: 30}} />
                           <div className={'textmon'}>
                            {item.campaign.bids}
                          </div>
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
 export default class JobScreen extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      Jobs:[]
    };
  }
  componentDidMount() {
          var databit={userID:sessionStorage.getItem("userId")}

     axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/jobs`, // First page at 0
       data:databit,
       headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      
      },
    }).then(res =>{
       console.log(res.data)
        this.setState({Jobs:res.data})
    })
  }


  render(){
     return(

        <JobScreenfunct window={window} Jobs={this.state.Jobs} />
      )
  }
 }