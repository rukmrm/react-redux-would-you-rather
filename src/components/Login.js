import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUserActions'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    signedInUser: { id: 'placeholder', name: '' },
    value: 'placeholder',
    loggedIn: false,
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.value))
    this.setState(() => ({ loggedIn: true }))
  }

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/homepage" />
    }

    return (
      <div
        id="login-container"
        className="full-page centering-parent-flex center"
      >
        <form onSubmit={this.handleSubmit}>
          <label className="margin-a">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="placeholder" disabled={true}>
                Select a user
              </option>

              {this.props.selectOptions.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
          <div className="margin-a">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const selectOptions = Object.values(users)
  return {
    selectOptions,
    authedUser,
    users,
    signedInUser: authedUser || { id: null, name: '' },
  }
}

export default connect(mapStateToProps)(Login)
