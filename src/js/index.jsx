// @flow

import React from 'react';
import { render } from 'react-dom';

import '../css/style.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './AppContext';

const appDiv = document.getElementById('app');

if (appDiv === null) {
  throw new Error('no app element');
} else {
  render(
    <div>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </div>,
    appDiv,
  );
}
