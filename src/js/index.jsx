// @flow

import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/home';
import Tickets from './components/tickets';

const appDiv = document.getElementById('app');
if (appDiv === null) {
  throw new Error('no app element');
}

// render(
//   <BrowserRouter><Home /></BrowserRouter>, appDiv,
// );

const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/tickets" component={Tickets} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, appDiv);
