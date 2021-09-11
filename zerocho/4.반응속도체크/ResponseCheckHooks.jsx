import React, { useState, useRef } from 'react';

const ResponseCheckHooks = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [result, setResult] = useState([]);
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
      timeout.current = setTimeout(() => { // useRef와 .current는 세트
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
        console.log(startTime.current);
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
    } else if (state === 'ready') {
      setState('waiting');
      setMessage('너무 성급하시군요. 초록색이 된 이후에 클릭하세요.');
      clearTimeout(timeout.current);
    } else if (state === 'now') {
      endTime.current = new Date();
      console.dir(endTime.current);
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current]
      });
      console.log(`${(endTime.current - startTime.current) / 1000} 초`);
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return (
      result.length === 0 // 아직 시작이 안해서 result가 비어있을 때는 평균속도를 감춤
        ? null
        : <>
          <div>평균 속도: {(result.reduce((a, c) => a + c) / result.length) / 1000} 초</div>
          < button onClick={onReset} > 리셋</ button >
        </>
    );
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheckHooks;