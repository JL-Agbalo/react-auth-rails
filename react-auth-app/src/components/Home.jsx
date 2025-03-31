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
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Registration />
        </div>
      </div>
    );
  }
}

export default Home;
