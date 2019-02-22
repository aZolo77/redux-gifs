// react libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// redux libraries
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// reducers
import reducer from './reducers/index.js';

// actions
import { searchSuccess } from './actions/search.js';

const store = createStore(reducer, applyMiddleware(createLogger()));

// custom components
import App from './components/app/App.jsx';

const results = [
  {
    full: 'https://media0.giphy.com/media/g5KhmX06Q0XBu/giphy.gif',
    thumbnail: 'https://media0.giphy.com/media/g5KhmX06Q0XBu/100_s.gif'
  },
  {
    full: 'https://media3.giphy.com/media/UMi9wrHfvFvTG/giphy.gif',
    thumbnail: 'https://media3.giphy.com/media/UMi9wrHfvFvTG/100_s.gif'
  }
];

window.setTimeout(() => {
  store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// test
// import './hello.js';
// import './hi.js';
