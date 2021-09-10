import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

// useMemo(() => 함수리턴값, [변하는 부분]) : [변하는 부분] 이 바뀌지 전까지 함수리턴값을 기억(재렌더링 X)
// useCallback(() => 함수, [변하는 부분]) : [변하는 부분] 이 바뀌기 전까지 함수를 기억 
// useEffect(() => 함수, [변하는 부분]) : [변하는 부분] 이 바뀔 때, 한수를 실행, 그리고 componentDidMount처럼 실행, componentDidUpdate는 []가 바뀔때

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const LottoHooks = () => { // hooks는 순서가 매우 중요
  const lottoNumbers = useMemo(() => getWinNumbers(), []); // useMemo()에 실행되는 함수를 변화화는 부분 [] 과 같이 삽입
  const [winNumbers, setWinNumbers] = useState(lottoNumbers); // 이 부분에서 useMemo() 함수를 받아서 렌더링 제한
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]); // uesRef()는 일반 값, useMemo()는 특수한 함수 결과값
  // 위의 훅스 선언부사이에 if문 같은 조건문은 넣으면 안됨.

  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevState) => [...prevState, winNumbers[i]]);
      }, (i + 1) * 100);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 700);
    return () => {
      timeouts.current.forEach(() => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]); //input 이 빈 배열이면 componentDidMount와 같음
  // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행

  const onClickRedo = useCallback(() => { // useCallback은 자식 컴포넌트에 함수를 넘길때 꼭 해줘야함, 매번 같은 함수가 생성되는 것을 막기 위해
    console.log('onClickRedo');
    console.log(winNumbers); // useCallback이 기억하고 있어서 계속 같은 값 출력
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]); // winNumbers를 배열에 추가해줘야지 useCallback이 기억하는 값을 바꿔줌, 어떨 때 다시 실행이 되는지

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더 !</button>}
    </>
  );
};

export default LottoHooks;