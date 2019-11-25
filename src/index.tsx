/* eslint-env browser */
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import './styles/index.scss';

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.querySelector('#root') as HTMLElement
);
