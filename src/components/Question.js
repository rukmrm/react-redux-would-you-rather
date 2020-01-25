import React, { Component } from 'react'
import Avatar from './Avatar'
import { formatQuestion2 } from '../utils/helpers'
import { connect } from 'react-redux'
import { Item } from 'semantic-ui-react'

class Question extends Component {
  render() {
    const { question } = this.props
    console.log(question)

    return (
      <div className="list-item-content">
        <div>
          <div className="question-teaser-header">{question.author} asks:</div>
          <div className="question-teaser-body">
            <Avatar />
            <div className="circle-medium">
              <img className="cropped" src="https://placekitten.com/100/100" />
            </div>

            <div className="temp">
              <h5>Would you rather...</h5>
              <div className="teaser-text">{question.optionOne.text}</div>
              <div className="teaser-text">{question.optionTwo.text}</div>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]

  return {
    // question: question ? formatQuestion2(question) : null,
    question: question ? question : null,
  }
}

export default connect(mapStateToProps)(Question)
