import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1); // candidate배열에 1부터 45까지 넣음
  const shuffle = [];
  while (candidate.length > 0) { // candidate의 요소들을 랜덤으로 뽑아서 shuffle에 담음
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c); // shuffle의 0~5 요소들을 정렬
  return [...winNumbers, bonusNumber];
}

class LottoClass extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null,  // 보너스 공
    redo: false,
  };

  timeouts = [];

  runTimeout = () => {
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 100);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 700);
  }

  componentDidMount() { // 라이프 사이클을 console로 찍어가면서 체크하는 것이 좋음
    console.log("DidMount");
    this.runTimeout();
  }

  componentDidUpdate() { // 계속 실행이 되기 때문에 조건문으로 제한을 걸어둬야 함
    console.log("DidUpdate");
    if (this.state.winBalls.length === 0)
      this.runTimeout();
  }

  componentWillUnmount() {
    this.timeouts.forEach(() => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    });
    this.timeouts = [];
  }

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">

          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더 !</button>}
      </>
    );
  }
}

export default LottoClass;