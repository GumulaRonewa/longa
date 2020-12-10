import React from "react";
import styled from "styled-components";

const Check = ({ onChange, checked, name }) => {
  return (
    <CheckWrapper>
      <Label>
        Has your brand used <br />
        Influencer Marketing before?
      </Label>
      <Box
        type="checkbox"
        onChange={onChange ? onChange : ""}
        checked={checked}
        name={name}
      />
    </CheckWrapper>
  );
};

const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.h5`
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #808080;
  font-size: 0.9rem;
`;
const Box = styled.input`
  margin: auto 10px;
`;

export default Check;
