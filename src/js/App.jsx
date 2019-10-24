// @flow

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import useGlobalStatus from './hooks/useGlobaStatus';

import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Login from './components/Login';
import Profile from './components/Profile';
import Tickets from './components/Tickets';
import BuyTicket from './components/BuyTicket';

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
          <Route path="/tickets">
            <Tickets />
            <Footer />
          </Route>
          <Route path="/buy">
            <BuyTicket />
            <Footer />
          </Route>
          <Route exact path="/">
            <BuyTicket />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Profile />
            <Footer />
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
