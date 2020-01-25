import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardUserCard from './LeaderBoardUserCard'

class LeaderBoardPage extends Component {
  render() {
    return (
      <div className="temp">
        <ul>
          {this.props.userIds.map(user => (
            <li key={user}>
              <LeaderBoardUserCard id={user} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
  }
}

export default connect(mapStateToProps)(LeaderBoardPage)
