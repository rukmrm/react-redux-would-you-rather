import React, { Component } from 'react'
import Avatar from './Avatar'
import { formatQuestion2 } from '../utils/helpers'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { question } = this.props
    console.log(question)

    return (
      <div className="temp">
        QuestionTeaser
        <div className="question-teaser-header">user asks:</div>
        <div className="question-teaser-body">
          <Avatar />
          <div className="temp">
            <h5>Would you rather...</h5>
            <div className="teaser-text">{question.optionOne.text}</div>
            <div className="teaser-text">{question.optionTwo.text}</div>
            <button>View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  console.log('mapStateToProps', users)
  console.log('mapStateToProps', questions)
  console.log('mapStateToProps', id)
  console.log('mapStateToProps', question)

  return {
    // question: question ? formatQuestion2(question) : null,
    question: question ? question : null,
  }
}

export default connect(mapStateToProps)(Question)
