import { combineReducers } from 'redux'
import { findIndex } from 'lodash'

function tweets(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_TWEETS':
      var allTweets = state.concat(action.tweets);
      // Return only 20 tweets to render
      return allTweets.slice(allTweets.length - 20, allTweets.length)
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
