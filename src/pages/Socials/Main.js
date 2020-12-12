import React from "react";
import styled from "styled-components";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";

export default class Main  extends React.Component {
     constructor(props) {
    super(props);

    this.state = {
      img:"R"
    };
  }
   componentWillMount() {
                var data={userID:localStorage.getItem("userId")}

     axios({
         method: 'POST',
         url: `https://longa-money.herokuapp.com/api/u`, // First page at 0
           data:data,

       headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      
      },
    }).then(res =>{
        var profile=res.data;
        var tweet=JSON.stringify(profile.twitter);
          var youTube=JSON.stringify(profile.youtube); 
           tweet=tweet.split(",")[5]; 
           if(tweet.length>10){
            tweet=tweet.slice(7,-1);
           tweet=tweet.slice(0,-1);
            this.setState({img:tweet})
          console.log(tweet.slice(0,-1))
           }
           
          
    }).catch((e) => {
        console.log(e);
      });
  }
  render() {
    const tprofile=this.state.img;
  return (
    <Container>
      <h1>Linked Accounts</h1>
      {tprofile.length>10 &&
       <Avatar style={{height:50,width:50}} src={tprofile} alt="" />
      }
    </Container>
  );
};
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 45px;
    font-weight: 500;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

