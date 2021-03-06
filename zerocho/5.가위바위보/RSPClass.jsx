import React, { Component } from 'react';

// 클래스의 경우 -> constructor(state 생성 부분) -> render -> ref -> componentDidMount
//  (setState, props 바뀔 때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoord = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
}

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoord).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: '',
    imgCoord: rspCoord.바위,
    score: 0,
  }

  interval;

  componentDidMount() { // 컴포넌트 첫 렌더링시에만 발생, 비동기 요청을 할 때
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount() { // 컴포넌트가 제거되기 직전에 발생, 비동기 요청을 정리할 때 
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoord.바위) {
      this.setState({
        imgCoord: rspCoord.가위,
      });
    } else if (imgCoord === rspCoord.가위) {
      this.setState({
        imgCoord: rspCoord.보,
      });
    } else if (imgCoord === rspCoord.보) {
      this.setState({
        imgCoord: rspCoord.바위,
      });
    }
  };

  onClickBtn = (choice) => () => { // 고차함수
    clearInterval(this.interval);
    const { imgCoord } = this.state;
    const myScore = scores[choice]; // ex.  가위: 1
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: '비겼습니다!',
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다!',
          score: prevState.score + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: '졌습니다!',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { result, score, imgCoord } = this.state; // imgCoord 좌표
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${imgCoord} 0` }}></div>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;