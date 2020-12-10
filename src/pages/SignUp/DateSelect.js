import React, { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";

import styled from "styled-components";
import "./DateSelector.css";

function DateSelect(props) {
  const [value, onChange] = useState(new Date());
  const handle =(e)=>{
  	props.state.setState({dob:e})
  	onChange(e)
  }
  return (
    <DateWrapper>
      <DatePicker onChange={handle} value={value} />
    </DateWrapper>
  );
}

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DateSelect;
