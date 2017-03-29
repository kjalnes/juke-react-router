import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AppContainer from './containers/AppContainer';

import Album from './components/Album';
import Albums from './components/Albums';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

const _Router = () => (
    <Router history={ hashHistory } >
      <Route path='/' component={ AppContainer }>
      </Route>
    </Router>
)


ReactDOM.render(
  < _Router />,
  document.getElementById('app')
);
