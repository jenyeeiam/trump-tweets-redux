import React from 'react';
import { connect } from 'react-redux';
import ajax from 'superagent';
import Actions from './actions';
import TweetList from './TweetList';

function mapDispatchToProps(dispatch){
  return {
    sendTweetsToStore() {
      ajax
        .get('http://localhost:4000')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('error!!!!!!', err);
            return
          } else {
            dispatch(Actions.getTweets(res.body))
          }
        });
    },
    deleteTweet(tweetId) {
      dispatch(Actions.deleteTweet(tweetId));
    }
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
}


class TweetContainer extends React.Component {

  componentDidMount() {
    this.props.sendTweetsToStore();
  }

  render() {
    const { tweets, deleteTweet } = this.props;
    return(
      <div>
        <h1>Trump Tweets</h1>
        {tweets ? (
          <TweetList
            tweets={tweets}
            deleteTweet={deleteTweet}/>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetContainer);
