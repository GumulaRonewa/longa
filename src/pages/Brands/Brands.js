import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import styled from "styled-components";
import bgImg from "../../assets/bg.jpg";
import Sidebar from "./Sidebar";
import Main from "./Main";
import CampaignInfo from "./CampaignInfo";
import Influencer from "./Influencer";

const defaultData = {
  nameOfBrand: "",
  nameAndSurname: "",
  email: "",
  contactNumber: "",
  influencers: "",
  campaignName: "",
  campaignBudget: "",
  descriptionofCampaign: "",
  instagram: "",
  facebook: "",
  twitter: "",
  youtube: "",
  usedBefore: "checked",
  duration: "",
};
// console.log(defaultData);

const steps = [{ id: "contact" }, { id: "campaign" }, { id: "influencers" }];

const Brands = () => {
  // const [nameOfBrand, setNameofBrand] = useState("");
  // const [nameAndSurname, setNameAndSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  // const [influencers, setInfluencers] = useState("");
  // const [campaignName, setCampaignName] = useState("");
  // const [campaignBudget, setCampaignBudget] = useState("");
  // const [descriptionofCampaign, setDescriptionofCampaign] = useState("");
  // const [instagram, setInstagram] = useState("");
  // const [facebook, setFacebook] = useState("");
  // const [twitter, setTwitter] = useState("");
  // const [youtube, setYoutube] = useState("");
  // const [usedBefore, setUsedBefore] = useState("");
  // const [duration, setDuration] = useState("");

  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation };
  switch (step.id) {
    case "contact":
      return (
        <Container>
          <Wrapper>
            <Sidebar {...props} />
            <Main />
          </Wrapper>
        </Container>
      );
    case "campaign":
      return (
        <Container>
          <Wrapper>
            <CampaignInfo {...props} />
            <Main />
          </Wrapper>
        </Container>
      );
    case "influencers":
      return (
        <Container>
          <Wrapper>
            <Influencer {...props} />
            <Main />
          </Wrapper>
        </Container>
      );
  }
  return <Container></Container>;
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default Brands;
