import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';
import store, { history } from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store = {store}>
    <ConnectedRouter history = {history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

