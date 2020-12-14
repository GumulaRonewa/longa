import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "../SignUp/Input";
import Check from "./Check";
import DateRange from "./DateRange";
import Loading from "../loading/loading";
import axios from "axios";

function Influencer({ formData, setForm, navigation }){
  const { instagram, facebook, twitter, youtube } = formData;

            const [load, setLoad] = React.useState(false);
/*
const defaultData = {
  nameOfBrand: "",
  nameAndSurname: "",
  email: "",
  range:"Duration of campaign",
  contactNumber: "",
  influencers: "",
  campaignName: "",
       

  campaignBudget: "",
  description: "",
  dos:"",
  donts:"",
  followers:"",
  instagram: "",
  facebook: "",
  twitter: "",
  youtube: "",
  usedBefore: "checked",
  duration: "",
};*/
 const handle= (e)=>{
  var details = {
       nameOfBrand:formData.nameOfBrand,
       contactNumber:formData.contactNumber,
       email:formData.email,
       campaignName:formData.campaignName,
       description:formData.description,
       duration:formData.duration,
       influencers:formData.influencers,
       nameAndSurname:formData.nameAndSurname,
       followers:formData.influencers,
       budget:formData.budget,
       facebook:formData.facebook,
       twitter:formData.twitter,
       youtube:formData.youtube,
       instagram:formData.instagram,
       endDate:formData.endDate,
       dos:formData.dos,
       donts:formData.donts,
       options:[{ value: 'Yes', label: 'Yes' },{ value: 'No', label: 'No' }],
       part:1,
       open:false,
       range:formData.dates,

    };
  e.preventDefault();
  setLoad(true);
  console.log(details)
  
  axios({
      method: "POST",
      url: `https://longa-money.herokuapp.com/api/brand/new`,
      data: details,
      }).then((res) => {     window.open("/wb","_self");
  }
      ).catch((e) => {
                 console.log(e);
                     setLoad(false);

      });

 }
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Campaign Information</h3>

        <Input
          placeholder="Number of Instagram posts"
          min="0"
          type="number"
          onChange={setForm}
          value={instagram}
          name="instagram"
        />
        <Input
          placeholder="Number of Twitter posts"
          min="0"
          type="number"
          onChange={setForm}
          value={twitter}
          name="twitter"
        />
        <Input
          placeholder="Number of Youtube posts"
          min="0"
          type="number"
          onChange={setForm}
          value={youtube}
          name="youtube"
        />
        <Input
          placeholder="Number of Facebook posts"
          min="0"
          type="number"
          onChange={setForm}
          value={facebook}
          name="facebook"
        />
        {load &&(
            <Loading style={{position:'absolute',zIndex:2}} loading={false} />
          )}
        <ButtonWrapper>
          <button className="back" onClick={() => navigation.previous()}>
            Back
          </button>
          <button className="send" onClick={handle}>Submit</button>
        </ButtonWrapper>
      </Form>
      <div>
        <h4>
          Not a brand? <span onClick={() =>window.open("/","_self")}>Home</span>
        </h4>
      </div>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
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

  button.send {
 width: 30%;
     display:grid;
    place-items:center;
    max-width: 350px;
    min-width: 150px;
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
  button.back {
    width: 20%;
     display:grid;
    place-items:center;
    max-width: 350px;
    min-width: 100px;
    height: 40px;
    border: none;
    margin: 0.6rem 0;
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

export default Influencer;
