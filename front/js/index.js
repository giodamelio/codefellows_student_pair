import React from 'react';
import reactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './app';
import Home from './home';
import Courses from './courses';
import Counter from './counter';

import reducers from './reducers';

// Create routes
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="courses" component={Courses} />
    </Route>
  </Router>
);

// Create redux store
const store = createStore(reducers, {
  counter: 0,
}, window.devToolsExtension ? window.devToolsExtension() : f => f);

reactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
