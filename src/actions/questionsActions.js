import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import {
  addResponseToUserAction,
  addQuestionToUserAction,
} from './usersActions'

/* 
  saveQuestionAnswer returns a Promise and uses setTimeout 500
    takes a question object
  saveQuestion returns a Promise and uses setTimeout 1000
    takes an object info = { authedUser, qid, answer }

  "ANSWER_QUESTION" shouldn't be an action type, since it requires two things?
  "ADD_RESPONSE_TO_QUESTION"
  "ADD_RESPONSE_TO_USER"
*/

export const ADD_RESPONSE_TO_QUESTION = 'ADD_RESPONSE_TO_QUESTION'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

// gets called by actions/shared.js handleInitialData
export function receiveQuestionsAction(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function createQuestionAction(question) {
  return {
    type: CREATE_QUESTION,
    question,
  }
}

export function addResponseToQuestionAction(authedUser, qid, answer) {
  return {
    type: ADD_RESPONSE_TO_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

export function handleSaveQuestion(question) {
  // 1. write question to questions
  // 2. push qid to users[uid].questions
  return dispatch => {
    return saveQuestion(question).then(fquestion => {
      dispatch(createQuestionAction(fquestion))
      dispatch(addQuestionToUserAction(fquestion))
    })
  }
}

export function handleSaveResponseToQuestionsAndUsers({
  authedUser,
  qid,
  answer,
}) {
  return dispatch => {
    dispatch(addResponseToQuestionAction(authedUser, qid, answer))
    dispatch(addResponseToUserAction(authedUser, qid, answer))
    return saveQuestionAnswer({ authedUser, qid, answer })
  }
}
