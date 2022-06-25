import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/Counter';

class Counter extends Component {
  
  onDecrementHandler = () => {
    console.log('onDecrementHandler');
    this.props.onDecrementCounter();
  };

  render() {
    return (
      <div className="counter">
        <div>{this.props.loading ? 'true' : 'false'}</div>
        <div>{this.props.count}</div>
        <button onClick={this.onDecrementHandler}>-</button>
        <button onClick={this.props.onIncrementCounter}>+</button>
        <button onClick={this.props.onAddCounter}>+10</button>
        <button onClick={this.props.asyncAction}>async(+20)</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.counter,
    loading: state.counter.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDecrementCounter: () => dispatch(actions.decrement()),
    onIncrementCounter: () => dispatch(actions.increment()),
    onAddCounter: () => dispatch(actions.add({value: 10})),
    asyncAction: () => dispatch(actions.asyncAction(25)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
