import { combineReducers } from 'redux'
import users from './usersReducer'
import questions from './questionsReducer'
import authedUser from './authedUserReducer'

export default combineReducers({
  authedUser,
  users,
  questions,
})
