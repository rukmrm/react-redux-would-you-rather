import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionTeaser from './QuestionTeaser'
import Question from './Question'
import { Tab, Segment, Header, Grid, Image } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <div className="temp">
        <div className="btn-wrapper">
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <ul className="questions-list">
          {console.log('homepage ul', this.props)}
          {this.props.questionIds.map(id => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

/* 
class HomePage extends Component {
  render() {
    return (
      <div className="temp">
        <div className="btn-wrapper">
          <button>Unanswered Questions</button>
          <button>Answered Questions</button>
        </div>
        <ul className="questions-list">
          {console.log('homepage ul', this.props)}
          {this.props.questionIds.map(id => (
            <li key={id} className>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
} */

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions),
  }
}

export default connect(mapStateToProps)(HomePage)
