import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ajax from 'superagent';
import Actions from './actions';
import TweetList from './TweetList';

function mapDispatchToProps(dispatch){
  return {
    getAllTweets() {
      ajax
        .get('http://localhost:4000')
        .end((err, res) => {
          if (err || !res.ok) {
            console.log('Error in fetching tweets', err);
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
    this.props.getAllTweets();
  }

  render() {
    const { tweets, deleteTweet } = this.props;
    return(
      <div>
        <Link to='/'>
          <img src={require('../public/favicon.ico')} alt="react-icon"/>
        </Link>
        <h1>Trump Tweets</h1>
        {tweets.length > 0 ? (
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
