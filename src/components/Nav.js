import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/NewQuestion" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/LeaderBoard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          <li>Hello, user</li>
          <li>
            <NavLink to="/Logout" activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
