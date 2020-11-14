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
                  <img src={notag} style={{height:120,width:155,marginTop:-50,marginLeft:"-100%"}} alt={'L'} />

            <div className="brandtext">
              Influencers
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
