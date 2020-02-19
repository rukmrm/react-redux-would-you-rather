import React, { Component } from 'react'
import Avatar from './Avatar'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class QuestionTeaser extends Component {
  toPoll = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { question, users } = this.props

    return (
      <div className="list-item-content center">
        <div
          className={`question-indicator-bar answered-${this.props.authedUserHasAnswered}`}
        ></div>
        <div className="question-teaser-header">
          <div>{formatDate(question.timestamp)}</div>
          <div> {users[question.author].name} asks:</div>
          <Avatar author={users[question.author]} />
        </div>
        <div className="question-teaser-body center width100">
          <h5>Would you rather...</h5>
          <div className="teaser-text">{question.optionOne.text}</div>
          <div className="teaser-text">{question.optionTwo.text}</div>
          <Link to={`/pollQuestion/${question.id}`}>
            <button onClick={e => this.toPoll(e, question.id)}>
              View Poll
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  const authedUserInfo = users[authedUser]
  const authedUserHasAnswered = authedUserInfo.answers[id] ? true : false

  return {
    question: question ? question : null,
    users,
    authedUserHasAnswered,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionTeaser))
