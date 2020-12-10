import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "./Input";
import DateSelect from "./DateSelect";
import axios from "axios";
import Loading from "../loading/loading";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
var formValid = (formErrors, rest) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Sidebar extends React.Component {

constructor(props) {
    super(props);

    this.state = {
      email: null,
      name:null,
      surname:null,
      dob:null,
      password: null,
       load:false,
      cpassword:null,
      check: false,
      submit: false,
       formErrors: {
        email: "",
        name: "",
        form:"",
        cpassword: "",
        surname: "",
        dob: "",
        password: "",
      },
    };
  }
  componentWillMount() {
      this.setState({date:new Date()})
}
   handleDate =(e) =>{
          this.setState({check:!this.state.check})
                 this.setState({submit:true})


   }
   handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(typeof value);
        let formErrors = this.state.formErrors;

        switch (name) {
     
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";

        break;

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 8 characaters required" : "";

        break;

      case "cpassword":
        formErrors.cpassword =
          this.state.password === value ? "" : "Password doesn't match";

        break;
       case "dob":
         var msDiff =  new Date().getTime()-new Date(value).getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24));
         var years=days/364;

         console.log(years)
        formErrors.cpassword =
          years >= 13 ? "" : "minimum age for this platform is 13";

        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();

        const user = { email: this.state.email,name:this.state.name,surname:this.state.surname,dateOfBirth:this.state.dob,password: this.state.password };
          let formErrors = this.state.formErrors;
                           console.log(user);

    if (formValid(this.state.formErrors, user)) {
                            this.setState({load:true})

         axios({
            method: "POST",
            url: `https://longa-money.herokuapp.com/api/user/register`,
             data: user,
             }).then((res) => {
              localStorage.setItem('name',user.name);

                       console.log(res.data);
                       window.open("https://longamoney.groundrabbit.co.za","_self");
         
            }).catch((res) => {
                  console.log(res)
                    this.setState({load: false });

      })
    } else {
       console.log(formErrors);
                 this.setState({load:false})

          this.setState({submit:true})


       }
        
  };

  render(){
    return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input name={'name'}  placeholder="Name" onChange={this.handleChange} />
        <Input name={'surname'} placeholder="Surname" onChange={this.handleChange} />
        <Input name={'email'} type="email" placeholder="Email" onChange={this.handleChange}/>
        <Input name={'password'} type="password" placeholder="Password" onChange={this.handleChange}/>
        <Input name={'cpassword'} type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
        <DoB>Date of Birth*</DoB>
        <DateSelect name={'dob'} state={this}/>
        {this.state.load &&(
            <Loading style={{position:'absolute',zIndex:2}} loading={false} />
          )}
        <label
          htmlFor="terms"
          style={{ fontSize: "0.8rem", textAlign: "center" }}
        >
          By signing up, I agree to the <a href="#">Privacy Policy</a> <br />{" "}
          and <a href="#">User Agreement</a>
        </label>
        <button onClick={this.handleLogin} className="signup-btn">Sign Up</button>
      </Form>
      <div>
        <h4>
          Already have an account? 
          <a style={{'text-decoration':"none"}} href={'/login'}>
          <span>Sign In</span>
          </a>
        </h4>
      </div>
    </Container>
  );
  }
};

const DoB = styled.h6`
  font-size: 0.9rem;
  color: #808080;
  margin-right: 160px;
  margin-top: 6px;
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button.signup-btn {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #0f81c7;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 8rem;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
