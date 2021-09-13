import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';

// createContext, provider, value, tableData, dispatch, memo, clickBtn, dispatch, action, type, plantMine, tableData 이차원 배열 -7~-1 0(code)

export const CODE = { // 지뢰찾기 셀들의 각각 상태를 나타냄
  MINE: -7, // 지뢰
  NORMAL: -1, // 지뢰없는 정상
  QUESTION: -2, // 우클릭, 물음표
  FLAG: -3, // 깃발
  QUESTION_MINE: -4, // 물음표인데 지뢰
  FLAG_MINE: -5, // 깃발인데 지뢰
  CLICKED_MINE: -6, // 지뢰를 클릭(펑)
  OPENED: 0, // 열린 칸, 의도성있음
}

export const TableContext = createContext({
  tableData: [],
  dispatch: () => { },

}); // Context API 사용으로 쉬운 props 전달

const initialState = {
  tableData: [],
  timer: '0',
  result: '',
};

const plantMine = (row, cell, mine) => { // 지뢰찾기 구현
  console.log(row, cell, mine);
  const candidate = Array(row * cell).fill().map((arr, i) => {
    return i;
  });
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  console.log(data);
  return data;
};

export const START_GAME = 'START_GAME'; // action

const reducer = (state, action) => { // 어떻게 변할지
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, halted, timer, result } = state;

  // value의 무한렌더링을 막기위해 useMemo사용, tableData와 dispatch를 넘겨줌(tableData가 변화할 때 마다, (dispatch는 변화 X))
  const value = useMemo(() => ({ tableData, dispatch }), [tableData]);

  return ( // Provider 작성, 그 속에 value 를 넘겨서 아래 컴포넌트에게 전달, value는 위에서 지정
    <TableContext.Provider value={value}>
      <Form />
      <div>{timer}</div>
      <Table />
      <div>{result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;