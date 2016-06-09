import React from 'react';
import reactDom from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './home';
import Courses from './courses';
import Counter from './counter';

import reducers from './reducers';

// Create redux store
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Pairs</h1>

        {this.props.children}
      </div>
    );
  }
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="courses" component={Courses} />
    </Route>
  </Router>
);

reactDom.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);
