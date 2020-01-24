import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionTeaser from './QuestionTeaser'

class HomePage extends Component {
  render() {
    return (
      <div className="temp">
        <div className="btn-wrapper">
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <ul className="questions-list">
          {console.log('homepage ul', this.props)}
          {this.props.questions.map(id => (
            <li key={id}>
              <QuestionTeaser id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect()(HomePage)
