import React from 'react'
import './fgtstyl.css';
import profile_picture_without_slogan from '../../images/profile_picture_without_slogan.png'

export default class Reset extends React.Component{
   constructor(props) {
    super(props);

    this.state = {
         password: null,
      cpassword:null,
     
       formErrors: {
       
        cpassword: "",
        password: "",
      },
    };
  }
     handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(typeof value);
        let formErrors = this.state.formErrors;

        switch (name) {
     
    

      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 8 characaters required" : "";

        break;

      case "cpassword":
        formErrors.cpassword =
          this.state.password === value ? "" : "Password doesn't match";

        break;
      
      default:
        break;
    }

    this.setState({ [name]: value });
  };
  render(){
            const { formErrors } = this.state;

	return(
          <div className={'forgotpass'}>
            
            <img src={profile_picture_without_slogan} className={"logoim"} alt={'L'}/>	          
            <div className={'holder'}>
            <div className={'forgotext'} style={{marginTop:50}}>
              Password Reset
            </div>
            <div className={"prompt"}>
             Please enter a new password then repeat it again
            </div>
            <input type="password"  name={'password'}  onChange={this.handleChange} className={'field'} placeholder={'Password'}/>
            <input type="password" name={'cpassword'}  onChange={this.handleChange}  className={'field'} placeholder={'Confirm Password'}/>
              {formErrors.cpassword.length >= 0 && (
                         <span className="errorMessage"> {formErrors.cpassword}</span>
                       )}
             <button className={'btfg'}>
             Send
             </button>

            </div>

          
          </div>
		)
  }
}
