// @flow

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import useGlobalStatus from './hooks/useGlobaStatus';

import Spinner from './components/presentational/Spinner';
import Login from './components/containers/Login';
import Ticket from './components/containers/Ticket';
import TicketsList from './components/containers/TicketsList';
import BuyTicket from './components/containers/BuyTicket';
import Profile from './components/containers/Profile';

function App() {
  const { getUser, showLoading } = useGlobalStatus();
  function init() {
    showLoading(true);
  }

  useEffect(init, []);

  function renderView() {
    let view = <Login />;

    if (getUser()) {
      view = (
        <Switch>
          <Route path="/ticket">
            <Ticket />
          </Route>
          <Route path="/tickets">
            <TicketsList />
          </Route>
          <Route path="/buy">
            <BuyTicket />
          </Route>
          <Route exact path="/">
            <BuyTicket />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      );
    }

    return (
      <div>
        { view }
        <Spinner />
      </div>
    );
  }

  return (
    renderView()
  );
}

export default App;
