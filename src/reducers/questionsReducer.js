import {
  ADD_RESPONSE_TO_QUESTION,
  CREATE_QUESTION,
  RECEIVE_QUESTIONS,
} from '../actions/questionsActions'

export default function questions(state = {}, action) {
  // action will have whatever properties we attach when we dispatch it

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }

    case CREATE_QUESTION:
      console.log(action.question)
      return {
        ...state,
        [action.question.id]: { ...action.question },
      }

    case ADD_RESPONSE_TO_QUESTION:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser),
          },
        },
      }
    default:
      return state
  }
}
