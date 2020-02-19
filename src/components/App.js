import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/sharedActions'
import HomePage from './HomePage'
import LeaderBoardPage from './LeaderBoardPage'
import Login from './Login'
import Nav from './Nav'
import NewQuestionPage from './NewQuestionPage'
import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
            <Route render={() => <Login />} />
          ) : (
            <Fragment>
              <Nav />
              <Route path="/" exact component={HomePage} />
              <Route path="/homepage" exact component={HomePage} />
              <Route path="/leaderboard" exact component={LeaderBoardPage} />
              <Route path="/questions/:id" exact component={QuestionPage} />
              <Route path="/add" exact component={NewQuestionPage} />
            </Fragment>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
