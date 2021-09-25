import React, { Component } from 'react';

class Counter extends Component {

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick은 버튼이 클릭 되었을 때 호출할 함수를 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => { // 콜백함수
                console.log('방금 setState가 호출됨');
                console.log(this.state);
              }
            );
          }}>
          +1
        </button>
      </div >
    );
  }
}

export default Counter;