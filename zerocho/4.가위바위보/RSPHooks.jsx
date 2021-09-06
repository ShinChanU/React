import React, { useState, useRef, useEffect } from 'react';

// hooks의 경우 useEffect 사용

// class와 hooks의 라이프 사이클 비교
//                        result, imgCoord, score
// componentDidMount
// componentDidUpdate
// componentWillUnmount
// 위 처럼 3 x 3 표라고 가정하면, class는 가로의 시점에 따라 내용을 각각 분리, hooks는 세로의 state에 따라 각각 분리

// 예)
// class
// componentDidMount() {
//   this.setState({
//     imgCoord: 3,
//     score: 2,
//     result: 1,
//   })
// }

// hooks
// useEffect(() => {
//   setImgCoord();
//   setScore();
// }, [imgCoord, score]);
// useEffect(() => {
//   setResult();
// }, [result]);


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

const RSPHooks = () => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoord.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {   // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님), 생성될때 실행
    console.log('다시 실행');
    interval.current = setInterval(changeHand, 100);
    return () => { // componentWillUnmount 역할 , 함수가 실행될때 한번 무조건 실행(RSPHooks 함수가 렌더링 될때 마다)
      console.log('종료');
      clearInterval(interval.current);
    };
  }, [imgCoord]); // 변화하는 state 작성

  const changeHand = () => {
    if (imgCoord === rspCoord.바위) {
      setImgCoord(rspCoord.가위);
    } else if (imgCoord === rspCoord.가위) {
      setImgCoord(rspCoord.보);
    } else if (imgCoord === rspCoord.보) {
      setImgCoord(rspCoord.바위);
    }
  };

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice]; // ex.  가위: 1
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      console.log(score);
      setResult('비겼습니다!');
    } else if ([-1, 2].includes(diff)) {
      console.log(score);
      setResult('이겼습니다!');
      setScore((prevState) => prevState + 1);
    } else {
      setResult('졌습니다!');
      console.log(score);
      setScore((prevState) => prevState - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg)  ${imgCoord} 0` }}></div>
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
}

export default RSPHooks;