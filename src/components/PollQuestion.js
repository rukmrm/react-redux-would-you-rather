import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSaveResponseToQuestionsAndUsers } from '../actions/questionsActions'

class PollQuestion extends Component {
  state = { value: '', authedUserAnswer: null }

  onRadioChanged = e => {
    this.setState({
      value: e.currentTarget.value,
    })
  }

  handleComponentPollSubmit = (e, id) => {
    e.preventDefault()

    const { dispatch, authedUser } = this.props

    let qid = id
    let answer = this.state.value

    this.setState({ authedUserAnswer: this.state.value })
    dispatch(handleSaveResponseToQuestionsAndUsers({ authedUser, qid, answer }))
  }

  render() {
    console.log(this.props)

    const { questions } = this.props
    const qid = this.props.match.params.id
    const question = questions[qid]

    return (
      <div className="list-item-content">
        <form>
          <div>
            <label>
              <input
                type="radio"
                name="poll-options"
                value="optionOne"
                checked={this.state.value === 'optionOne'}
                onChange={this.onRadioChanged}
              />
              {question.optionOne.text}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="poll-options"
                value="optionTwo"
                checked={this.state.value === 'optionTwo'}
                onChange={this.onRadioChanged}
              />
              {question.optionTwo.text}
            </label>
          </div>
          <button
            disabled={this.state.authedUserAnswer != null && true}
            onClick={e => this.handleComponentPollSubmit(e, question.id)}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

// function mapStateToProps({ authedUser, questions, users }, { id }) {
function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(PollQuestion))
