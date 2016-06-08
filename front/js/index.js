import React from 'react';
import reactDom from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Home from './home';
import Courses from './courses';

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

reactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="courses" component={Courses} />
    </Route>
  </Router>,
  document.getElementById('app')
);
