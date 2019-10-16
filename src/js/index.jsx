// @flow

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import '../css/style.scss';

import App from './App';
import Tickets from './components/tickets';
import { AppProvider } from './AppContext';

const appDiv = document.getElementById('app');

if (appDiv === null) {
  throw new Error('no app element');
} else {
  render(
    <Router>
      <AppProvider>
        <Switch>
          <Route path="/tickets" component={Tickets} />
          <Route exact path="/" component={App} />
        </Switch>
      </AppProvider>
    </Router>,
    appDiv,
  );
}
