import React from 'react'
import Button from '../components/Button'

class Condition extends React.Component {
  constructor() {
    super()

    this.state = {
      loggedState: false
    }
  }

  render() {
    const loggedStateBtn = this.state.loggedState ?
                            (<Button name="Logout"></Button>) :
                            (<Button name="Login"></Button>)
    return (
      <div>
        {loggedStateBtn}
      </div>
    )
  }
}

export default Condition