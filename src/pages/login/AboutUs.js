import React, { Component } from "react";
import Slider from "react-animated-slider";
import "./about.css";
import Divider from "@material-ui/core/Divider";
import notag from '../../images/notag.png'
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
const WhoAndWhat =() =>{
	return(
	<div className="slide-right">
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
    )
}
const Apart =() =>{
	return(
  <div className="slide-left">
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
     </div>
     )
}
const AppDesk = () => (
	<div className={'slider'} >
     <WhoAndWhat />
    <Divider />
     <Apart />
   

</div>
  
       
);
export default function AboutUs(argument) {
	// body...
	return(
         <App />
		)
}
const pages=[{page:"WhoAndWhat",image:'https://i.imgur.com/ZXBtVw7.jpg'

},{page:"Apart",image: "https://i.imgur.com/DCdBXcq.jpg"}];


const App = () => (
  <div>
  
    <Slider className="slider-wrapper" touchDisabled='true' infinite='true' >
      {pages.map((item, index) => (
        <div
          key={index}
          style={{ background: `url('${item.image}') no-repeat center center`,overflow:'hidden',width:"100vw" }}
        >
        <div className={'desk'}>
           <WhoAndWhat />
           <Apart/>
        </div>
        <div className={'mob'}>
        {item.page ==="WhoAndWhat" &&
        <WhoAndWhat />
   
        }
                {item.page ==="Apart" &&

        <Apart/>
    }
        </div>
        </div>
      ))}
    </Slider>
  </div>
);