import React, { useCallback, useReducer, useState } from 'react';
import Table from './Table';

// useReduce() 사용 예정
// TicTacToe > Table > Tr > Td 로 구조가 복잡함, 증조할아버지가 자식이랑 통신하는 꼴, 이런 구조에서는 useReducer을 사용해야 함.

const initialState = { // 만들어야할 state들을 묶어둠.
  winner: '',
  turn: 'O', // turn은 O -> X -> O -> X -> ...
  tableData: [['', '', ''], ['', '', ''], ['', '', '']], // 3X3 배열
};

export const SET_WINNER = 'SET_WINNER'; // 일반적으로 action.type은 대문자로, 변수로 빼두면 편리
export const CLICK_CELL = 'CLICK_CELL'; // 모듈로 뺌
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => { // state를 어떻게 바꿀지
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // td로 부터 받아옴(얕은 복사), 나중에 immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn; // 현재 턴인 것으로 변경(ex. 'O', 'X')
      return {
        ...state,
        tableData,
      }; // 얉은 복사
    case CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer(reuducer, initialState, [지연초기화])
  // 원래는 state를 훅으로 작성해야함, 근데 너무 많아지고 여러번 자식들에게 넘겨줘야함, 그래서 useReducer 사용

  const onClickTable = useCallback(() => { // 컴포넌트에 작성하는 이벤트 함수들은 useCallback() 사용
    dispatch({ type: SET_WINNER, winner: 'O' }) // dispatch(action): action을 실행한다 -> 동시에 reducer 실행
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;