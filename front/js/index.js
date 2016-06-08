const React = require('react');
const reactDom = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

reactDom.render(
  <HelloWorld></HelloWorld>,
  document.getElementById('app')
);
