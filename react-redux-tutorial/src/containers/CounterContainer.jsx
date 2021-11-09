import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  state => ({
    number: state.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);

// const mapStateToProps = (state) => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });

// export default connect( // CounterContainer컴포넌트에 mapStateToProps랑 mapDispatchToProps를 연동
//   mapStateToProps,
//   mapDispatchToProps
// )(CounterContainer);