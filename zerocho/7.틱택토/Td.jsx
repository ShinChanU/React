import React, { useCallback } from 'react';
import { CLICK_CELL, CHANGE_TURN } from './TicTaeToe'

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => { // td 로부터 컴포넌트들을 생성, 모든 셀이 컴포넌트로 활용
  const onClickTd = useCallback(() => {
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex }); // 현재 셀 row, cell을 action으로 넘겨줌
    dispatch({ type: CHANGE_TURN });
  }, []);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  );
};

export default Td;