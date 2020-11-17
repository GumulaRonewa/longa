import React, { Component } from "react";
import Loading from "./loading";

import axios from "axios";
class loadingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
    };
  }


 
  render() {
    return (
      <div className="loading">
        <Loading loading={this.state.load} />
        <h3>Setting up your account </h3>
      </div>
    );
  }
}
export default loadingPage;
