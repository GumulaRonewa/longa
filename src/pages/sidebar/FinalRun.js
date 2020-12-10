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
import Reset from '../login/Reset'
import Forgot from '../login/Forgot'
import AboutUs from '../login/AboutUs'
import Privacy from '../login/Privacy'
import Agreement from '../login/Agreement'
import RegisterBussiness from '../login/RegisterBussiness';
import Navbar from "../Navbar";
import Hero from "../Hero";
import Conformation from '../home/Conformation'
import WelcomeBrand from '../home/WelcomeBrand'
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Brands from "../Brands/Brands";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero /> 
    </div>
  );
};
function Branding() {
  return(
  <div className={'trends'}>
    <div className={'imagediv'}>
      <img src={profile_picture_without_slogan} style={{height:150,width:150,marginTop:40}} />
      </div>
  </div>
   )
}
function Run() {
  return (
    <div className={'top'}>
    <div className={'topbar'}>
        <PrimarySearchAppBar style={{position:"fixed"}}/>
      </div>  
    <div className="twitter">
    
      <Sidebar />
                   <Branding />

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
     <Route exact path="/login" component={SignIn} />
         <Route exact path="/" component={Landing} />
                        <Route exact path={"/wb"} component={WelcomeBrand} />

         <Route path="/registerbrands" component={Brands} />
         <Route exact path="/register" component={SignUp} />
         <Route exact path="/privacy" component={Privacy} />
         <Route exact path="/useragreement" component={Agreement} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/Reset" component={Reset} />
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
      window.location.pathname !== "/forgot" &&
      window.location.pathname !== "/aboutus" &&
      window.location.pathname !== "/privacy" &&
      window.location.pathname !== "/useragreement" &&
      window.location.pathname !== "/reset" &&
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