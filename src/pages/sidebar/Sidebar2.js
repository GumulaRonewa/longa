import React from "react";
import {
  
  FaHome,
 FaBriefcase,
FaAt, 
 FaRegEnvelope,
 FaWallet,
} from "react-icons/fa";
import './side.css'
const Sidebar2 = () => {
  const [value, setValue] = React.useState(parseInt(sessionStorage.getItem('value')));
  const clicked =(e)=>{
     sessionStorage.setItem('value',e.target.name)
  }
  return (
    <div style={{overflow:"hiden"}}>
        <div className="sidebar2">
      <ul>
       
        <li style={{background: value===0?'#d3eff8':""}}>
          <a onClick={clicked} name='0' href="/home">
            <FaHome className="icons" />
            <p className={'hide'}>
            Home
            </p>
          </a>
        </li>
        <li style={{background: value===1?'#d3eff8':""}} >
          <a onClick={clicked} name='1' href="/feed" >
            <FaAt className="icons" /> <p className={'hide'}> Feed</p>
          </a>
        </li>
     
        <li style={{background: value===2?'#d3eff8':""}}>
          <a onClick={clicked} name='2' href="/chat">
            <FaRegEnvelope className="icons" /> <p className={'hide'}>Message</p>
          </a>
        </li>
        <li style={{background: value===3?'#d3eff8':""}}>
          <a onClick={clicked} name='3' href="/wallet">
            <FaWallet className="icons" /> <p className={'hide'}> Wallet </p>
          </a>
        </li>
         <li style={{background: value===4?'#d3eff8':""}}>
          <a onClick={clicked} name='4' href="/myjobs">
            <FaBriefcase className="icons" /> <p className={'hide'}> My Jobs </p>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar2;