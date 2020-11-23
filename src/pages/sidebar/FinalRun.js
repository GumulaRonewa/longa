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
import WelcomeBrand from '../home/WelcomeBrand'

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


function FinalRun1(){
	 return (
    <div>
      <BrowserRouter>
     <Switch>
     <Route exact path="/login" component={Login} />
         <Route exact path="/" component={Choose} />
                        <Route exact path={"/wb"} component={WelcomeBrand} />

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
export default class FinalRun extends React.Component {
   componentWillMount() {
    if (
      window.location.pathname !== "/wb" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/aboutus" &&
      window.location.pathname !== "/feed" &&
      window.location.pathname !== "/validreg" &&
      window.location.pathname !== "/links" &&

      window.location.pathname !== "/welcome" &&
      window.location.pathname !== "/registerbrands"
    ) {
                 

      if (sessionStorage.getItem("token") === null) {
              var href=window.location.origin+"/login";
        window.open(href, "_self");
      }
      else{
                       
      }
  }
}
  render() {
    return <FinalRun1 />;
  }
}