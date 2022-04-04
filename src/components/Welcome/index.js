// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  Subscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getbuttonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getbuttonText()
    return (
      <div className="welcome-container">
        <h1 className="heading"> Welcome</h1>
        <p className="paragraph"> Thank you! Happy Learning </p>
        <button className="button" onClick={this.Subscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
