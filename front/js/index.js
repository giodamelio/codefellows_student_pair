import React from 'react';
import reactDom from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

reactDom.render(
  <HelloWorld></HelloWorld>,
  document.getElementById('app')
);
