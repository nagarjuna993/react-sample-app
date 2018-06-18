import React from 'react'

import Button from '../components/Button'

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          {/* <Button name="Increment" onButtonClick={this.increment}></Button> */}
          <Button name="Decrement" onButtonClick={this.decrement}></Button>
        </div>
      </div>
    );
  }
};

export default Counter;