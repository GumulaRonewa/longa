import React, { useState } from "react";

import DatePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";

import styled from "styled-components";
import "./DateRange.css";

const DateRange = ({ change, val,name }) => {
  const [value, onChange] = useState([new Date(), new Date()]);
  val = value;
  const handle =(e)=>{
      var msDiff =  new Date(e[1]).getTime()-new Date(e[0]).getTime() ;    //Future date - current date
         var days= Math.floor(msDiff / (1000 * 60 * 60 * 24))+ " days";
               console.log(change);
               onChange(e)
          sessionStorage.setItem('duration',days);

    /*props.state.setState({dob:e})
    onChange(e)*/
  }
/*  ;*/
  return (
    <DateWrapper>
      <DatePicker onChange={handle} name={name} value={val} />
    </DateWrapper>
  );
};

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DateRange;
