import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardUserCard extends Component {
  render() {
    const { user } = this.props
    const countA = Object.keys(user.answers).length
    const countQ = user.questions.length
    const score = countA + countQ

    return (
      <div className="list-item-content">
        <div>
          <div className="circle-medium">
            <img className="cropped" src="https://placekitten.com/100/100" />
          </div>

          <div className="temp">
            <h5>{user.name}</h5>
            <div className="handle">{user.id}</div>
            <div>Answered questions {countA}</div>
            <div>Asked questions {countQ}</div>
            <div>Score {score}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  console.log(users)
  console.log(id)
  const user = users[id]

  return {
    user: user ? user : null,
  }
}

export default connect(mapStateToProps)(LeaderBoardUserCard)
