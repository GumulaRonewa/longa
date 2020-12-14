import React from "react";
import styled from "styled-components";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";

export default class Main  extends React.Component {
     constructor(props) {
    super(props);

    this.state ={
      timg:"R",
      yimg:"R"
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

          youTube=youTube.split(",")[3];
           if(youTube.length>10){
            youTube=youTube.slice(7,-1);
           youTube=youTube.slice(0,-1);
            this.setState({yimg:youTube})
           }
                  // youTube=youTube.split(":")[1];
          
           tweet=tweet.split(",")[5]; 
           if(tweet.length>10){
            tweet=tweet.slice(7,-1);
           tweet=tweet.slice(0,-1);
            this.setState({timg:tweet})
           }
           
          
    }).catch((e) => {
        console.log(e);
      });
  }
  render() {
    const tprofile=this.state.timg;
  return (
    <Container>
      <h1>Linked Accounts</h1>
        <div className='rowsz' >
              {tprofile.length>10 &&

       <Avatar style={{height:50,width:50}} src={tprofile} alt="" />
     }
           {this.state.yimg.length>10 &&

       <Avatar style={{height:50,width:50,marginLeft:10}} src={this.state.yimg} alt="" />
     }
       </div>
      
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

