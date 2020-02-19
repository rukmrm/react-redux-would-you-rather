import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PROD_OR_DEV } from '../utils/constants.js'

class StateDashboard extends Component {
  render() {
    if (PROD_OR_DEV === 'PROD') {
      return <></>
    }

    const uValues = Object.values(this.props.users).sort((a, b) => {
      const aScore = Object.keys(a.answers).length + a.questions.length
      const bScore = Object.keys(b.answers).length + b.questions.length
      return bScore - aScore
    })

    const qValues = Object.values(this.props.questions).sort((a, b) => {
      return b.timestamp - a.timestamp
    })

    return (
      <div id="state-dashboard">
        <div id="state-authedUser">
          authedUser: {JSON.stringify(this.props.authedUser)}
        </div>
        <div id="state-users">
          <div>Users:</div>
          <ol>
            {uValues.map(u => (
              <div key={u.id}>
                {u.id}:{' '}
                <span className="user-score">
                  {u.questions.length + Object.keys(u.answers).length}
                </span>{' '}
                ({u.questions.length} Q, {Object.keys(u.answers).length} A)
              </div>
            ))}
          </ol>
        </div>
        <div id="state-questions">
          <div>Questions:</div>
          <ol>
            {qValues.map(q => (
              <div key={q.id}>
                {JSON.stringify(q.optionOne.votes)} {q.optionOne.text} OR{' '}
                {q.optionTwo.text} {JSON.stringify(q.optionTwo.votes)}
              </div>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(StateDashboard)
