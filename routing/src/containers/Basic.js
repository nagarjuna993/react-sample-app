import React from 'react';

class Basic extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "Team"
    }
  }
  render() {
    return (
      <div>
        <p>Welcome, {this.state.msg}</p>
      </div>
    );
  }
}

export default Basic;