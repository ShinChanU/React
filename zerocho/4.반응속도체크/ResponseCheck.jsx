import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',   // 현재 상태, waiting, ready, now
    message: '클릭해서 시작하세요',
    result: [],         // 반응속도가 얼마인지
  }

  timeout; // this.timeout 을 선언해줌
  startTime; // state에 넣지 않고 this.로 선언함, 렌더링이 다시 일어나는 것을 막기 위해
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        })
        this.startTime = new Date();
        console.log(this.startTime);
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요. 초록색이 된 이후에 클릭하세요.',
      })
      clearTimeout(this.timeout);
    } else if (state === 'now') {
      this.endTime = new Date();
      console.dir(this.endTime);
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요',
          result: [...prevState.result, this.endTime - this.startTime],
        };
      })
      console.log(`${(this.endTime - this.startTime) / 1000} 초`);
    }
  };

  renderAverage = () => { // 반복문은 삼항연산자 사용(react에서는 for, if 사용 x, 따라서 map, 삼항연산자 사용)
    const { result } = this.state;
    return (
      result.length === 0 // 아직 시작이 안해서 result가 비어있을 때는 평균속도를 감춤
        ? null
        : <div>평균 속도: {(result.reduce((a, c) => a + c) / result.length) / 1000} 초</div> // result의 값들을 합해서 평균
    );
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