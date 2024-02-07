import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {condition: false}

  onClickButton = () => {
    this.setState(prevState => ({condition: !prevState.condition}))
  }

  render() {
    const {condition} = this.state
    const buttonText = condition ? 'Dark Mode' : 'Light Mode'
    const displayBackground = condition ? 'Light-container' : 'dark-container'
    const displayHeading = condition ? 'dark-color' : 'Light-color'

    return (
      <div className="bg-container">
        <div className={`${displayBackground} container`}>
          <h1 className={displayHeading}>Click To Change Mode</h1>
          <button
            className="style-button"
            type="button"
            onClick={this.onClickButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
