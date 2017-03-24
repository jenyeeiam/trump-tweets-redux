import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';


import App from './App';
import reducers from './reducers';
import './index.css';

const logger = createLogger();
let store = createStore(reducers, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
