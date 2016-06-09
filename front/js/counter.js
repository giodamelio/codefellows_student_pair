import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.onIncrement}>+1</button>
        <button onClick={this.props.onDecrement}>-1</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement() {
      dispatch({
        type: 'INCREMENT',
      });
    },
    onDecrement() {
      dispatch({
        type: 'DECREMENT',
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
