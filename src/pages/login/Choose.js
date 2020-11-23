import React, { Component } from "react";
import "./App.css";

import notag from '../../images/notag.png'


class Choose extends Component {
     
     handleBrands = (e) => {
    window.open("registerbrands", "_self");

         
    
  };
  handleInfluencer = (e) => {
  window.open("login", "_self");
         
    
  };
    componentWillMount() {
      console.log(window)
}
  render() {
    return (
      <div className="authBox">
        <div className="leftBoxChoose">
          
          <div className="imageChooseLeft">


           <div className='hue' >
                                 <a href={'/aboutus'} style={{marginTop:"-18%",marginLeft:"-85%",fontSize:18,color:"white"}}>About Us</a>

            <div className="brandtext" style={{marginTop:-100}}>
              Brands
            </div>
            <button onClick={this.handleBrands} style={{marginTop:20}} className="brandbttn">
             Start
            </button>
            </div>
          </div>
        </div>
        <div className="rightBoxChoose">
         <div className="imageChooseRight">
          <div className='hue2' >
                  <img src={notag} style={{height:190,width:250,marginTop:-90,marginLeft:"-100%"}} alt={'L'} />

            <div className="brandtext"   style={{marginTop:-230}}>
              Influencers
            </div>
            <button onClick={this.handleInfluencer} style={{marginTop:-60}}className="brandbttnwhite">
             Start
            </button>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
export default Choose;
