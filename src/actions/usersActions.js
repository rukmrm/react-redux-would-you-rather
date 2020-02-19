export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_RESPONSE_TO_USER = 'ADD_RESPONSE_TO_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsersAction(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addResponseToUserAction(authedUser, qid, answer) {
  return {
    type: ADD_RESPONSE_TO_USER,
    authedUser,
    qid,
    answer,
  }
}

export function addQuestionToUserAction(question) {
  return { type: ADD_QUESTION_TO_USER, question }
}
