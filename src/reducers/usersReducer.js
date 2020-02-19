import {
  ADD_QUESTION_TO_USER,
  ADD_RESPONSE_TO_USER,
  RECEIVE_USERS,
} from '../actions/usersActions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_RESPONSE_TO_USER:
      var { authedUser, qid, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      }
    case ADD_QUESTION_TO_USER:
      var { question } = action
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      }
    default:
      return state
  }
}
