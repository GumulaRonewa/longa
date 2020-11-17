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
  	 return(
  	 	  <div className={'jobhome'}>
           <div className={'jobbox'}>
                        <div className={'jobroundsmall'} />

             <div className={'jobround'}>
                <p className={'jobheadertext'}>My Jobs</p>
             </div>
                      <List>
             {job.map((item)=> (

               <ListItem>
                {selectedPromo==='all'&&
                  <div className={'homelistdiv'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                                             <div style={{marginLeft:10,fontSize:24}}>{item.campaignName}</div>
                                             <div style={{marginLeft:20,fontSize:20}}>Stage : {item.stage}</div>
                      <ListItemText style={{marginLeft:10,fontSize:20}} primary={''} />

                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,1)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                    
                  </div>
                }
                  {selectedPromo===item.campaignID&&
                  <div className={'homelistdivexplore'}>
                      <ListItem>
                       <Avatar style={{ height: 80, width: 80, left: 4,top:4}}
                       src={'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png'} />
                     <div style={{marginLeft:10,fontSize:22}}>{item.campaignName}</div>
                                             <div style={{marginLeft:20,fontSize:20}}>Stage : {item.stage}</div>
                      <ListItemText style={{marginLeft:10,fontSize:20}} primary={''} />
                      <ListItemIcon>
                         <IconButton onClick={handleExpandButtonClick(item,2)}  className={selectedPromo === item.campaignID ? clsx(classes.expand, {[classes.expandOpen]: expanded,}):'empty'}  >
                        <ArrowForwardIosIcon  style={{ marginLeft:5,height: 40, width: 30}}/>
                         </IconButton>
                      </ListItemIcon>
                      </ListItem>
                             
                     <div className='table'>
                        <div className={'inputedit'}>
                           <div className={'identi'}>ID</div>
                            <input type='text' name="nameAndSurname" value={item.campaignID} variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Task</div>
                            <input type='text' variant='outlined' value={item.task}  name="email" className="setedit" />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Minimum Followers</div>
                            <input type='text' name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                       <div className={'inputedit'}>
                           <div className={'identi'}>Number of Imfluencers</div>
                            <input type='text' value={item.numberOfInfluencers} name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Ends in</div>
                            <input type='text' value={getDays(item.endDate)} variant='outlined' name="email" className="setedit"  />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Payment Time</div>
                            <input type='text' name="nameAndSurname" variant='outlined' className="setedit" />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Description</div>
                            <input type='text' variant='outlined'value={item.description} name="email" className="setedit"  />
                      </div>
                        <div className={'inputedit'}>
                           <div className={'identi'}>Do's</div>
                            <input type='text' multilines rows={2} value={item.dos} name="nameAndSurname" variant='outlined' className="setedit"  />
                      </div>
                      <div className={'inputedit'}>
                            <div className={'identi'}>Dont's</div>
                            <input type='text' rows={2} value={item.donts} variant='outlined' name="email" className="setedit" />
                      </div>
                  
                     </div>
                              <div className={'line'} style={{width:'94%'}}/>
                               <div className={'bottomdiv'} style={{width:'90%'}}>
                        <div className={'moneyside'}>
                          <MonetizationOnIcon  color={'primary'} style={{ height: 30, width: 30,marginLeft:20}} />
                          <div className={'textmon'}>
                           R {item.earnings}
                          </div>
                         </div>
                          <div className={'groupside'}>
                          <PeopleIcon  color={'primary'} style={{ marginLeft:20,height: 40, width: 30}} />
                           <div className={'textmon'}>
                            {item.bids}
                          </div>
                         </div>
                   </div>

                  </div>
                }

                </ListItem>
              
                ))}

             </List>
          </div>
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
          var databit={userID:localStorage.getItem("userId")}

     axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/u/jobs`, // First page at 0
       data:databit,
       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
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