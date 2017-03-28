import React from 'react';

class TweetList extends React.Component {
  render() {
    const { tweets, deleteTweet } = this.props;
    return (
      <ol>
        {tweets.map((tweet, index) => (
          <li key={index}>
            {tweet.text}
            <button onClick={() => {deleteTweet(tweet.id)}}>Delete</button>
          </li>
        ))}
      </ol>
    )
  }
}

export default TweetList;
