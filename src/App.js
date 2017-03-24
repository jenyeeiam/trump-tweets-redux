import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TweetContainer from './TweetContainer';
// All routing goes into your actual component not the index.js
const App = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => (
        <div>
          <Link to='/tweets'>Tweet page</Link>
          <h1>My First React App</h1>
        </div>
      )} />
      <Route path='/tweets' component={TweetContainer} />
    </div>
  </Router>
);

export default App;
