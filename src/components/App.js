import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import HomePage from './HomePage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  /* 
  state = {
    questions: [
      {
        '8xf0y6ziyjabvozdd253nd': {
          id: '8xf0y6ziyjabvozdd253nd',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory',
          },
        },
      },
      {
        '6ni6ok3ym7mf1p33lnez': {
          id: '6ni6ok3ym7mf1p33lnez',
          author: 'johndoe',
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: 'become a superhero',
          },
          optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillain',
          },
        },
      },
      {
        am8ehyc8byjqgar0jgpub9: {
          id: 'am8ehyc8byjqgar0jgpub9',
          author: 'sarahedo',
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: 'be telekinetic',
          },
          optionTwo: {
            votes: ['sarahedo'],
            text: 'be telepathic',
          },
        },
      },
    ],
  }
 */

  render() {
    // const { questions } = this.state
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Nav />
            {console.log('app this', this)
            /* <HomePage questions={questions} /> */
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
