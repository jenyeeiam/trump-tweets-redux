function getTweets(tweets) {
  return {
    type: 'GET_ALL_TWEETS',
    tweets: tweets
  }
}

function deleteTweet(tweetId) {
  return {
    type: 'DELETE_TWEET',
    tweet_id: tweetId
  }
}

export default {
  getTweets,
  deleteTweet
}
