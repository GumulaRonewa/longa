import React from "react";
import {
  
  FaHome,
 FaBriefcase,
FaAt, 
 FaRegEnvelope,
 FaWallet,
} from "react-icons/fa";
import './side.css'
const Sidebar = () => {
    const [value, setValue] = React.useState(parseInt(sessionStorage.getItem('value')));

  const clicked =()=>{
    console.log('clicked');
    // sessionStorage.setItem('value',val)
  }
  return (
    <div style={{overflow:"hiden"}}>
        <div className="sidebar">
      <ul>
       
        <li style={{background: value===0?'#d3eff8':""}}>
          <a onClick={clicked} href="/home">
            <FaHome className="icons" />
            <p className={'hide'}>
            Home
            </p>
          </a>
        </li>
        <li style={{background: value===1?'#d3eff8':""}} >
          <a onClick={clicked} href="/feed">
            <FaAt className="icons" /> <p className={'hide'}> Feed</p>
          </a>
        </li>
     
        <li style={{background: value===2?'#d3eff8':""}}>
          <a onClick={clicked} href="/Home">
            <FaRegEnvelope className="icons" /> <p className={'hide'}>Message</p>
          </a>
        </li>
        <li style={{background: value===3?'#d3eff8':""}}>
          <a onClick={clicked} href="/wallet">
            <FaWallet className="icons" /> <p className={'hide'}> Wallet </p>
          </a>
        </li>
         <li style={{background: value===4?'#d3eff8':""}}>
          <a onClick={clicked} href="/myjobs">
            <FaBriefcase className="icons" /> <p className={'hide'}> My Jobs </p>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;