import { combineReducers } from 'redux'
import { findIndex } from 'lodash'

function tweets(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_TWEETS':
      return state.concat(action.tweets);
    case 'DELETE_TWEET':
      var index = findIndex(state, (tweet) => {
        return tweet.id === action.tweet_id
      });
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}


const reducers = combineReducers({
  tweets
});

export default reducers;
