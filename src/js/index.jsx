// @flow

import '../css/style.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/home';

const appDiv = document.getElementById('app');
if (appDiv === null) {
  throw new Error('no app element');
}

render(
  <BrowserRouter><Home /></BrowserRouter>, appDiv,
);
