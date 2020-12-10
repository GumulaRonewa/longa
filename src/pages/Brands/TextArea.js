import React from "react";
import styled from "styled-components";

const TextArea = ({ placeholder, onChange, value, name }) => {
  return (
    <Container>
      <StyledArea
        placeholder={placeholder && placeholder}
        cols="10"
        onChange={onChange}
        value={value}
        multiline
        type="text"
        name={name}
      />
    </Container>
  );
};

export default TextArea;
const StyledArea = styled.textarea`
  width: 100%;
  max-width: 350px;
  min-width: 280px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;
  font-family: "Raleway", sans-serif;
  color: #808080;
  font-weight: 600;
  font-size: 0.75rem;
  &:hover {
    transform: translateY(-3px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
