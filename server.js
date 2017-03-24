var express = require('express')
var app = express()
var ajax = require('superagent')
var cors = require('cors')
require('dotenv').config()

app.use(cors());

app.get('/', function (req, res) {
  ajax
    .get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump')
    .set('Authorization', 'Bearer ' + process.env.TWITTER_TOKEN)
    .end((err, tweets) => {
      if (err || !tweets.ok) {
        console.log('There was an error fetching Trump tweets');
        return
      } else {
        res.send(tweets.body)
      }
    });
})

app.listen(4000, function () {
  console.log('Listening on port 4000!')
})
