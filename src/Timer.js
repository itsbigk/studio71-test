import React from 'react'

class Timer extends React.Component {
  state = {
    count: 0
  }

  timer = null

  updateTimer = () => {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount = () => {
    this.timer = setInterval(this.updateTimer, 1000)
  }

  render() {
    return (
      <div>
        <h2>Seconds so Far:</h2>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
 export default Timer
