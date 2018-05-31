import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "This is from the component state"
    }
  }
  render() {
    return (
      <div>
        <h2>Contact Page</h2>
        <p>{this.state.msg}</p>
      </div>
    )
  }
};

export default Contact;