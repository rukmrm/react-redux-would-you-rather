import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUserActions'
import Avatar from './Avatar'
// import StateDashboard from './StateDashboard'

class Nav extends Component {
  logout = e => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  getNavLinkClass = path => {
    return this.props.location.pathname === path
      ? 'nav-item active'
      : 'nav-item'
  }

  render() {
    const { authedUser, users } = this.props

    return (
      <Fragment>
        <nav className="nav">
          <ul>
            <li className={this.getNavLinkClass('/')}>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className={this.getNavLinkClass('/add')}>
              <NavLink to="/add" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li className={this.getNavLinkClass('/LeaderBoard')}>
              <NavLink to="/LeaderBoard" activeClassName="active">
                Leader Board
              </NavLink>
            </li>

            <li className="spread"></li>

            {/* If there's a logged in user, say Hello and show Logout button. */}
            {/* Else show Login button */}

            {authedUser && users[authedUser] && users[authedUser].name ? (
              <>
                <li>
                  Hello, {users[authedUser].name}
                  <Avatar author={users[authedUser]} />
                </li>
                <li>
                  <NavLink
                    to="/"
                    activeClassName="non-active"
                    onClick={e => this.logout(e)}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/" onClick={e => this.logout(e)}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        {/* <StateDashboard /> */}
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    questionIds: Object.keys(questions),
    authedUser,
    users,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
