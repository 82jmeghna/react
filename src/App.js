import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OrderList from './containers/Orders';
import PageNotFound from './components/PageNotFoundComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={OrderList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
