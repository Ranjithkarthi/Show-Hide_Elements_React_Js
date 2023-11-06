// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  toggleFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  toggleLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="two-container">
          <div className="name-container">
            <div>
              <button
                className="btn"
                onClick={this.toggleFirstName}
                type="button"
              >
                Show/Hide Firstname
              </button>

              {firstName && (
                <div className="toggle-name">
                  <p className="font-style">Joe</p>
                </div>
              )}
            </div>
          </div>

          <div className="name-container">
            <div>
              <button
                className="btn"
                onClick={this.toggleLastName}
                type="button"
              >
                Show/Hide Lastname
              </button>

              {lastName && (
                <div className="toggle-name">
                  <p className="font-style">Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
