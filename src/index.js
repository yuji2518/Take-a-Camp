import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { tableReducer } from './Reducer/tableReducer';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

export const history=createBrowserHistory();

const store=createStore(
  combineReducers({
    table:tableReducer,
  }),
  applyMiddleware(thunk),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
