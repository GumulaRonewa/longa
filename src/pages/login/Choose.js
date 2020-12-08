import React, { Component } from "react";
import "./App.css";
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import notag from '../../images/notag.png'
import AwesomeSlider from 'react-awesome-slider';
import minilogo from '../../images/minilogo.png'

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
      <div>
      <div className={'desktop'}>
      <div className="authBox">
        <div className="leftBoxChoose">
          
          <div className="imageChooseLeft">

  
           <div className='hue' >
                                 <a href={'/aboutus'} style={{marginTop:"-78%",marginLeft:"-82%",fontSize:26,color:"white"}}>About Us</a>
          
            </div>

          </div>
        </div>
        <div className="rightBoxChoose">
         <div className="imageChooseRight">
          <div className='hue2' >
                  <img src={notag} style={{height:190,width:250,marginTop:-90,marginLeft:"-100%"}} alt={'L'} />
           <div style={{marginLeft:"-100%",display:'flex',flexDirection:"row"}}>
            <div className="brandtext"  style={{marginLeft:"-30%"}}>
              Brands
            </div>
            <div className="brandtext" style={{marginLeft:"65%"}}>
              Influencers
            </div>
            </div>
            
            <div style={{marginLeft:"-100%",display:'flex',flexDirection:"row"}}>
            <div>
            <button onClick={this.handleBrands} style={{marginLeft:"-100%"}} className="brandbttn">
             Start 
            </button>
            </div>
            <div>
            <button onClick={this.handleInfluencer} style={{marginLeft:"200%"}}className="brandbttnwhite">
             Start
            </button>
            </div>
            </div>
            </div>
          </div>
          </div>
      </div>
      </div>
       <div className={'smalldev'}>
         <Mobile />
       </div>
      </div>
    );
  }
}
function Brands(props) {
  var window=props.window;
const   handleBrand = () => {
  window.open("registerbrands", "_self");             
  }
  // body...
  return(
     <div className="authBox">
        <div className="leftBoxChoose">
          
          <div className="imageChooseLeft">

  
           <div className='hue' >
                                 <a href={'/aboutus'} style={{marginTop:"-18%",marginLeft:"-75%",fontSize:18,color:"white"}}>About Us</a>

            <div className="brandtext" style={{marginTop:-100}}>
              Brands
            </div>
            <button onClick={handleBrand} style={{marginTop:20}} className="brandbttn">
             Start 
            </button>
            </div>

          </div>
        </div>
        </div>
    )
}
function Influencers(props) {
  var window=props.window;
const   handleInfluencer = () => {
  window.open("login", "_self");             
  }
  return(
       <div className="authBox">

   <div className="rightBoxChoose">
         <div className="imageChooseRight">
          <div className='hue2' >
                  <img src={minilogo} style={{height:150,width:150,marginTop:-90,marginLeft:"60%"}} alt={'L'} />

            <div className="brandtext"   style={{marginTop:-230,marginLeft:10}}>
              Influencers
            </div>
            <button onClick={handleInfluencer} style={{marginTop:-60}}className="brandbttnwhite">
             Start
            </button>
            </div>
          </div>
          </div>
      </div>
  )
}
class Mobile extends React.Component{
  render(){
    return(
  <AwesomeSlider animation="cubeAnimation" mobileTouch={true} cssModule={AwesomeSliderStyles} fillParent ={true}>
    <div>
     <Influencers window={window} />

    </div>
    <div>
             <Brands window={window} />

    </div>
  </AwesomeSlider>
      )
  }
}
export default Choose;
