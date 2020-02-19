import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questionsActions'
import { Redirect } from 'react-router-dom'

/* 
  The form is available at /add.
  The application shows the text “Would You Rather” and has a form for creating two options.
  Upon submitting the form, a new poll is created and the user is taken to the home page.
  The new polling question appears in the correct category on the home page.
*/

class NewQuestionPage extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    formSubmitted: false,
  }

  handleChangeOne = e => {
    this.setState({ optionOneText: e.target.value })
  }

  handleChangeTwo = e => {
    this.setState({ optionTwoText: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { dispatch } = this.props

    const question = {
      author: this.props.authedUser,
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText,
    }
    dispatch(handleSaveQuestion(question))

    this.setState({ formSubmitted: true })
  }

  /* 
    1. Redirect must be done inside the render()
    2. render needs to know when to Redirect (based on state)
    3. on form submit, change a state param (formSubmitted, true)
  */

  render() {
    if (this.state.formSubmitted === true) {
      return <Redirect to="/homepage" />
    }

    return (
      <div className="center">
        Would You Rather...
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="optionOne"
              placeholder="option one"
              value={this.state.optionOneText}
              onChange={this.handleChangeOne}
            />
          </div>

          <div>or</div>

          <div>
            <input
              type="text"
              name="optionTwo"
              placeholder="option two"
              value={this.state.optionTwoText}
              onChange={this.handleChangeTwo}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser }
}

export default connect(mapStateToProps)(NewQuestionPage)
