import React, { Component } from 'react'
import Avatar from './Avatar'
import PollResult from './PollResult'
import PollQuestion from './PollQuestion'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class QuestionPage extends Component {
  state = { authedUserHasAnswered: this.props.authedUserHasAnswered }

  render() {
    const { authedUser, questions, users } = this.props
    const id = this.props.match.params.id
    const question = questions[id]

    return (
      <div>
        <Avatar author={users[question.author]} />
        <div className="question-teaser-header">
          {users[question.author].name} asks:
        </div>

        <h5>Would you rather...</h5>

        {users[authedUser].answers[id] ? (
          <PollResult {...this.props} />
        ) : (
          <PollQuestion {...this.props} />
        )}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const qid = match.params.id
  console.log(match)
  console.log(qid)

  const authedUserHasAnswered = users[authedUser].answers[qid] ? true : false

  return {
    authedUser,
    questions,
    users,
    authedUserHasAnswered,
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))
