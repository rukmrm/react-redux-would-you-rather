import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResult extends Component {
  state = {
    authedUserAnswer: this.props.users,
  }

  render() {
    const { authedUser, questions, users } = this.props
    const qid = this.props.match.params.id
    const question = questions[qid]

    // test if logged in user has answered this question already
    let authedUserAnswer = null
    if (users[authedUser].answers[qid]) {
      authedUserAnswer = users[authedUser].answers[qid]
    }

    const oneVoteCount = question.optionOne.votes.length
    const twoVoteCount = question.optionTwo.votes.length
    const totalVotes = oneVoteCount + twoVoteCount

    return (
      <div className="temp">
        <div>Results</div>
        <div>{question.optionOne.text}: </div>
        <div>
          {oneVoteCount} of {totalVotes} (
          {Math.round((100 * oneVoteCount) / totalVotes)}%)
          {authedUserAnswer === 'optionOne' && '⟵ Your answer'}
        </div>
        <div>{question.optionTwo.text}: </div>
        <div>
          {twoVoteCount} of {totalVotes} (
          {Math.round((100 * twoVoteCount) / totalVotes)}%)
          {authedUserAnswer === 'optionTwo' && '⟵ Your answer'}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(PollResult)
