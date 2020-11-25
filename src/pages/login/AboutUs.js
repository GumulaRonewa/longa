import React, { Component } from "react";
import Slider from "react-animated-slider";
import "./about.css";
import Divider from "@material-ui/core/Divider";
import notag from '../../images/notag.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import minilogo from '../../images/minilogo.png'
import IconButton from '@material-ui/core/IconButton';
import { red, pink, blue } from '@material-ui/core/colors';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from "react-router-dom";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
const WhoAndWhat =() =>{
  return(
  <div className={'slider'} style={{ background: `url(https://i.imgur.com/DCdBXcq.jpg) no-repeat center center`,overflow:'hidden',width:"110%" }}>
     
  <div className="slide-right"  >
  <div className="toplogo">
                 <img src={minilogo} alt="L"  style={{height:170,width:170}} className="topSec"/>
              </div>
      <div>
      <h1>Who we are. </h1>
      <p>Longa Money (LM) is a platform that makes it easier to identify influencers through a very 
      targeted search function, and we boast a variety of influencers to choose from. This sheer
      number of influencers allows brands from niches of every size and type to find influencers 
      to collaborate with to promote their products. 

       </p>

           <h1>What we do. </h1>
           <p>➢ We assist with relationship management with a platform that makes it simple and easy for clients to keep track of the influencers they are working with.</p>
           <p>➢ We help brands build and maintain relationships with influencers and provide measurable information to track the effectiveness of each influencer marketing campaign.</p>
           <p>➢ We boast the highest level of analytics in the influencer marketing space. </p>
           <p>➢ We work with clients to build a custom strategy that - in turn - allows us to match our clients with the right influencers.</p>
    </div>
    </div>
    </div>
    )
}
class Apart extends React.Component{
  onclick(){
    console.log(window)
    window.open("https://twitter.com/@Longa_Money")
  }
  render(){
  return(
  <div className={'slider'} style={{ background: `url(https://i.imgur.com/DCdBXcq.jpg) no-repeat center center`,overflow:'hidden',width:"100vw" }}>>

  <div className="slide-left" >
      <h1>What sets us apart. </h1>
       <p>a. We report back to brands:</p>
       <p>• Impressions • Engagements • Engagement rate</p>
       <p> • Clicks • Link & pixel tracking • Promo code and/or hashtag tracking.</p>
       <p>b. Influencer propriety fraud detection for followers and engagement. </p>
       <p>c. We provide a wide spectrum of influence: Nano, Micro, Mid-Tier, Macro and Mega influencers.</p>
       <p>d. Influencer relationship management contracted per influencer campaign via LM.</p>
       <p>e. Influencer Content Rights.</p>
       <p>f. Influencer Incentive Flexibility: Payment or Product.</p>
       <p>g. Social Channels: discover and activate influencers across Instagram, Facebook, Twitter, YouTube, Blogs etc. </p>
       <p>h. Influencer search & discovery: multiple criteria for discovering & filtering influencers, including comparing of influencers, audience demographics and content performance. </p>
        <div style={{paddingBottom:20}}>
                    <IconButton edge="end" onClick={()=>{
                         window.open("https://api.whatsapp.com/send?phone=27655734589")   }}    aria-label="Instagram">
                      <WhatsAppIcon style={{ color: '#25D366', height:40,width:40 }} />
                    </IconButton>
                         - +27 65 573 4589 <br/>
                        <IconButton edge="end" onClick={()=>{
                         window.open("https://www.instagram.com/Longa_Money")   }} aria-label="Instagram">
                      <InstagramIcon style={{ color: pink[300], height:40,width:40 }} />
                    </IconButton>
                           - Longa_Money <br/>
                          <IconButton edge="end" onClick={()=>{
                         window.open("https://twitter.com/@Longa_Money")   }} aria-label="Twitter">
                      <TwitterIcon style={{ color: blue[500], height:40,width:40}}/>
                    </IconButton>
                          - @Longa_Money<br/>
                           <IconButton edge="end"  onClick={()=>{
                         window.open("https://www.facebook.com/LongaMoney")   }} aria-label="YouTubeIcon">
                      <FacebookIcon style={{ color: blue[300], height:40,width:40 }} />
                    </IconButton>- Longa Money
                        </div>
     </div>

     </div>
     )}
}

export default function AboutUs(argument) {
  // body...
  return(
  <AwesomeSlider animation="cubeAnimation" mobileTouch={true} cssModule={AwesomeSliderStyles} fillParent ={true}>
    <div>
     <WhoAndWhat />
    </div>
    <div>
         <Apart />

    </div>
  </AwesomeSlider>
      )
}
const pages=[{page:"WhoAndWhat",image:'https://i.imgur.com/DCdBXcq.jpg'

},{page:"Apart",image: "https://i.imgur.com/DCdBXcq.jpg"}];

const slider = (
  <div>
  <AwesomeSlider animation="cubeAnimation">
    <div  style={{ background: `url(https://i.imgur.com/DCdBXcq.jpg) no-repeat center center`,overflow:'hidden',width:"100vw" }}/>
    <div  style={{ background: `url(https://i.imgur.com/DCdBXcq.jpg) no-repeat center center`,overflow:'hidden',width:"100vw" }} />
    <div  style={{ background: `url(https://i.imgur.com/DCdBXcq.jpg) no-repeat center center`,overflow:'hidden',width:"100vw" }} />
  </AwesomeSlider>
  </div>
)
const App = () => (
    <slider />
);