import { getInitialData } from '../utils/api'
import { receiveUsersAction } from './usersActions'
import { receiveQuestionsAction } from './questionsActions'
import { setAuthedUser } from '../actions/authedUserActions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { PROD_OR_DEV } from '../utils/constants.js'

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsersAction(users))
      dispatch(receiveQuestionsAction(questions))
      if (PROD_OR_DEV === 'DEV') {
        dispatch(setAuthedUser('johndoe'))
      }
      dispatch(hideLoading())
    })
  }
}
