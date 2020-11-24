import React from 'react'
import './fgtstyl.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'
/*
function Forgot1(props){
     const [email, setemail] = React.useState("");
    const handleCh =(e)=>{
        console.log(e)
        setemail(e.target.value)
    }
    const handle =()=>{
       var data={email:email}
              console.log(data)
              axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/user/password-reset`, // First page at 0
     data:data,
    
    }).then(res =>{
      props.window.open('https://longamoney.groundrabbit.co.za/password-link.html',"_self")

    });
  }
	return(
          <div className={'forgotpass'}>

            <img src={profile_picture_without_slogan} className={"logoim"} alt={'L'}/>	          
            <div className={'holder'}>
            <div className={'forgotext'}>
              Forgot Password?
            </div>
            <div className={"prompt"}>
            Please enter your email address and a reset link will be sent to you.
            </div>
            <input type="text" onChange={handleCh} className={'field'} placeholder={'Email Adress'}/>
             <button className={'btfg'} onClick={handle} >
             Send
             </button>
            </div>


          </div>
		)
}
export default class Forgot extends React.Component {
  render(){
    return(
       <Forgot1 window={window} />
    )
  }
}
*/
import "./App.css";
import whitelogo from '../../images/whitelogo.png'
import login from '../../images/login.svg'
import facebook from '../../images/facebook.svg'
import google from '../../images/google.svg'
import loading from '../../images/loading.svg'
import axios from "axios";
import notag from '../../images/notag.png'

class Forgot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      img:login,
      password: null,
      error: false,
    };
  }
  componentWillMount(){
    localStorage.clear();
    sessionStorage.clear();
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
   handleLogin = (e) => {
    e.preventDefault();
            this.setState({img: loading });
            const user = { email: this.state.email};
        axios({
      method: 'POST',
     url: `https://longa-money.herokuapp.com/api/user/password-reset`, // First page at 0
     data:user,
    
    }).then((res) => {
      
      window.open("'https://longamoney.groundrabbit.co.za/password-link.html'", "_self");
         
      }).catch((e) => {
                    this.setState({img: login });

      });

       };
  render() {
    return (
      <div className="authBox">
        <div className="leftBox">
          <div className="bgGreen">
          </div>
          <div className="imageAuth">
          </div>
        </div>
        <div className="rightBox">
           <div className="bgRed">
              <div className="logoplace">
                 <img src={notag} alt="L" style={{height:200,width:300}}className="image"/>
              </div>
              
              <div className="loginBox">
                 <div className="logininput">
                    <input type='text' name={'email'} onChange={this.handleChange} className="inputbox" placeholder="Email Address" />
                    <input type='password'name={'password'} onChange={this.handleChange} className="inputPasswordbox" placeholder="Password" />
                 </div>
                 <button onClick={this.handleLogin
                 } className="buttons">
                  <img src={this.state.img} className='iconSign' alt="b"/>
                      Login
                 </button>
                 <button className="facebookbutton">
                  <img src={facebook} className='icon' alt="b"/>
                  Facebook
                 </button>
                 <button className="Gmailbutton">
                  <img src={google} className='icon' alt="b"/>
                   Google
                 </button>
              </div>
               <div className='registerbutton'>
                 <a href={"register"} style={{ color: "white" }}>
                   Register
                 </a>
               </div>
               <div className='forgotbutton'>
                 <a href={"/forgot"} style={{ color: "white" }}>Forgot Password?</a>
               </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Forgot;

