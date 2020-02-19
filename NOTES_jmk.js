// Nothing imports from the reducers except:
//     ./index.js:             import reducer from './reducers'
//     ./reducers/index.js:    import { combineReducers } from 'redux'

// // Nothing imports from the actions except constants and:
//     ./components/Tweet.js:          import { handleToggleTweet } from '../actions/tweets'
//     ./components/NewTweet.js:       import { handleAddTweet } from '../actions/tweets'
//     ./components/App.js:            import { handleInitialData } from '../actions/shared'

//     ./actions/shared.js:            import { receiveUsers } from '../actions/users'
//     ./actions/shared.js:            import { receiveTweets } from '../actions/tweets'
//     ./actions/shared.js:            import { setAuthedUser } from '../actions/authedUser'

// actions/tweets.js:

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  }
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    }).then(tweet => dispatch(addTweet(tweet)))
  }
}
