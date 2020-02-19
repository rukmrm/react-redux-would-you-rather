import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardUserCard from './LeaderBoardUserCard'

class LeaderBoardPage extends Component {
  render() {
    const { users } = this.props
    let usersArray = []

    if (users && Object.values(users)) {
      usersArray = Object.values(users)
      if (usersArray.length > 0) {
        usersArray.sort((a, b) => {
          const aAnswers = Object.keys(a.answers).length
          const bAnswers = Object.keys(b.answers).length
          const aQuestions = a.questions.length
          const bQuestions = b.questions.length
          const aScore = aAnswers + aQuestions
          const bScore = bAnswers + bQuestions
          return bScore - aScore
        })
      }
    }

    return (
      <div className="temp">
        <ul>
          {/* this.props.userIds.map(user => ( */
          usersArray.map(user => (
            <li key={user.id}>
              <LeaderBoardUserCard id={user.id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users,
    userIds: Object.keys(users),
  }
}

export default connect(mapStateToProps)(LeaderBoardPage)
