// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import '../css/style.scss';

import App from './App';
import { AppProvider } from './contexts/AppContext';

const appDiv = document.getElementById('app');

if (appDiv === null) {
  throw new Error('no app element');
} else {
  render(
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>,
    appDiv,
  );
}
