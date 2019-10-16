// @flow

import React from 'react';

import useGlobalStatus from './hooks/useGlobaStatus';
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  const { getUser } = useGlobalStatus();

  function renderView() {
    let view = <Login />;

    if (getUser()) {
      view = <Dashboard />;
    }

    return (
      <div>{ view }</div>
    );
  }

  return (
    renderView()
  );
}

export default App;
