import React, { Component } from 'react'
import Avatar from './Avatar'
import { connect } from 'react-redux'

class QuestionTeaser extends Component {
  // const {question } = this.props

  render() {
    return (
      <div className="temp">
        QuestionTeaser
        <div className="question-teaser-header">user asks:</div>
        <div className="question-teaser-body">
          <Avatar />
          <div className="temp">
            <h5>Would you rather...</h5>
            <div className="teaser-text">teaser text</div>
            <button>View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionTeaser
