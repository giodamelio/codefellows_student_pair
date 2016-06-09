import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Pairs</h1>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>

        {this.props.children}
      </div>
    );
  }
}

export default App;
