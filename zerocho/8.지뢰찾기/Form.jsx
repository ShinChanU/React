import React, { useState, useCallback, useContext } from 'react';
import { START_GAME, TableContext } from './MineSearch';

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext)

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => { // dispatch에는 action을 적음
    dispatch({ type: START_GAME, row, cell, mine }); // action 지정
  }, [row, cell, mine]); // 입력한 값 전달

  return (
    <div>
      <input type="number" placeholder="가로" value={row} onChangeRow={onChangeRow} />
      <input type="number" placeholder="세로" value={cell} onChangeCell={onChangeCell} />
      <input type="number" placeholder="지뢰" value={mine} onChangeMine={onChangeMine} />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
};

export default Form;