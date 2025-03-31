import React, { Component } from "react";
import Registration from "./auth/Registration";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state here if needed
    };
  }

  render() {
    return (
      <div>
        <Registration />
      </div>
    );
  }
}

export default Home;
