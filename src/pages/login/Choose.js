import React, { Component } from "react";
import "./App.css";

import notag from '../../images/notag.png'


class Choose extends Component {
     
     handleBrands = (e) => {
  
                       this.props.history.push("/registerbrands");
         
    
  };
  handleInfluencer = (e) => {
  window.open("login", "_self");
         
    
  };
  render() {
    return (
      <div className="authBox">
        <div className="leftBoxChoose">
          
          <div className="imageChooseLeft">
           <div className='hue' >
            <div className="brandtext">
              Brands
            </div>
            <button onClick={this.handleBrands} className="brandbttn">
             Start
            </button>
            </div>
          </div>
        </div>
        <div className="rightBoxChoose">
         <div className="imageChooseRight">
          <div className='hue2' >
            <div className="brandtext">
              Influencer
            </div>
            <button onClick={this.handleInfluencer} className="brandbttnwhite">
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
