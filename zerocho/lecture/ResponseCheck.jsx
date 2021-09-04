import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',   // 현재 상태, waiting, ready, now
    message: '클릭해서 시작하세요',
    result: [],         // 반응속도가 얼마인지
  }

  onClickScreen = () => {

  };

  renderAverage = () => { // 반복문은 삼항연산자 사용(react에서는 for, if 사용 x, 따라서 map, 삼항연산자 사용)
    const { result } = this.state;
    result.length !== 0 // 아직 시작이 안해서 result가 비어있을 때는 평균속도를 감춤
      ? null
      : <div>평균 속도: {result.reduce((a, c) => a + c) / result.length}ms</div>
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;