// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {fName: false, sName: false}

  firstName = () => {
    this.setState(prevState => ({fName: !prevState.fName}))
  }

  secondName = () => {
    this.setState(prevState => ({sName: !prevState.sName}))
  }

  render() {
    const {fName, sName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="sub-cont">
          <div className="cont">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {fName && <p>Joe</p>}
          </div>
          <div className="cont">
            <button type="button" className="button" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            {sName && <p>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
