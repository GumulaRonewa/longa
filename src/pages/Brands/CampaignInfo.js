import React from "react";
import styled from "styled-components";
import logo from "../../assets/color-logo.svg";
import Input from "../SignUp/Input";
import Check from "./Check";
import DateRange from "./DateRange";
import TextArea from "./TextArea";

const CampaignInfo = ({ formData, setForm, navigation }) => {
  const {
    campaignName,
    campaignBudget,
    description,
    dates,
    duration,
    influencers,
    dos,donts
  } = formData;
  
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
      </LogoWrapper>
      <Form>
        <h3>Campaign Information</h3>

        <Input
          placeholder="Campaign Name"
          onChange={setForm}
          value={campaignName}
          name="campaignName"
        />
        <Input
          placeholder="Campaign Budget (in ZAR)"
          type="number"
          min="0"
          onChange={setForm}
          value={campaignBudget}
          name="campaignBudget"
        />
        <Input
          placeholder="Number of Influencers needed"
          min="1"
          type="number"
          onChange={setForm}
          value={influencers}
          name="influencers"
        />
        <TextArea
          placeholder="Description of Campaign"
          onChange={setForm}
          value={description}
          name="description"
        />
        <TextArea
          placeholder="Campaign Do's"
          onChange={setForm}
          value={dos}
          name="dos"
        />
        <TextArea
          placeholder="Campaign Dont's"
          onChange={setForm}
          value={donts}
          name="donts"
        />
        <Duration>Duration</Duration>
        <DateRange change={setForm} formData={formData} name={"duration"} val={dates} />

        <ButtonWrapper>
          <button className="back" onClick={() => navigation.previous()}>
            Back
          </button>
          <button className="continue" onClick={() => navigation.next()}>
            Continue
          </button>
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

const Duration = styled.h6`
  color: #808080;
  margin-right: 200px;
  margin-top: 6px;
  font-size: 0.8rem;
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

  button.continue {
    width: 40%;
     display:grid;
    place-items:center;
    max-width: 450px;
    min-width: 100px;
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

    max-width: 350px;
    display:grid;
    place-items:center;
    min-width: 100px;
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

export default CampaignInfo;
