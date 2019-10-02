// @flow

import '../css/style.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

const appDiv = document.getElementById('app');
if (appDiv === null) {
  throw new Error('no app element');
}

render(<App />, appDiv);
