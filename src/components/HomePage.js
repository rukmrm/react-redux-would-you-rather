import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionTeaser from './QuestionTeaser'

class HomePage extends Component {
  state = { show: 'UNANSWERED' }

  handleClick = e => {
    this.setState({ show: e.target.value })
  }

  render() {
    const { authedUser, questions, users } = this.props

    let qValues = Object.values(questions).sort((a, b) => {
      return b.timestamp - a.timestamp
    })
    qValues = qValues.filter(x => {
      if (this.state.show === 'ANSWERED') {
        return users[authedUser].answers[x.id] !== undefined
      } else {
        return users[authedUser].answers[x.id] === undefined
      }
    })

    const buttons = ['UNANSWERED', 'ANSWERED']

    return (
      <Fragment>
        <div className="center">
          <div className="btn-wrapper">
            {buttons.map(x => {
              return (
                <button
                  key={x}
                  className={this.state.show === x ? 'active btn' : 'btn'}
                  value={x}
                  onClick={this.handleClick}
                >
                  {x} Questions
                </button>
              )
            })}
          </div>
          <ul className="questions-list">
            {qValues.map(q => (
              <li key={q.id}>
                <QuestionTeaser id={q.id} />
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
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

export default connect(mapStateToProps)(HomePage)
