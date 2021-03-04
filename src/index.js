import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { mapReducer } from './Reducer/mapReducer';
import { userReducer } from "./Reducer/userReducer"
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

export const history=createBrowserHistory();

const appReducer = combineReducers({
  map: mapReducer,
  user: userReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
