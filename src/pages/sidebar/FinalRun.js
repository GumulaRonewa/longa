import React from "react";
import "./side.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Login from '../login/Login';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import SimpleBottomNavigation from "./SimpleBottomNavigation"
import Choose from '../login/Choose'
import Register from '../login/Register'
import AboutUs from '../login/AboutUs'
import RegisterBussiness from '../login/RegisterBussiness'
import Conformation from '../home/Conformation'
import HomeScreen from '../home/HomeScreen';
import JobScreen from '../jobs/JobScreen';
import WalletScreen from '../wallet/WalletScreen';
import FeedScreen from '../feed/FeedScreen';
import Settings from '../profile/Settings';
import ProfileScreen from '../profile/ProfileScreen';
function Run() {
  return (
    <div className={'top'}>
    <div className={'topbar'}>
        <PrimarySearchAppBar style={{position:"fixed"}}/>
      </div>  
    <div className="twitter">
    
      <Sidebar />
      <Main/>
    </div>
      
    </div>
  );
}


export default function FinalRun(){
	 return (
    <div>
      <BrowserRouter>
     <Switch>
     <Route exact path="/login" component={Login} />
         <Route exact path="/" component={Choose} />
         <Route path="/registerbrands" component={RegisterBussiness} />
         <Route exact path="/register" component={Register} />
          <Route exact path="/aboutus" component={AboutUs} />
        <Route path={"/validreg"} component={Conformation} />
          <Route  path="/" component={Run} />
        

  </Switch>
  </BrowserRouter>

    </div>
  )
}