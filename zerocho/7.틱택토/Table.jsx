import React from 'react';
import Tr from './Tr';

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => (<Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />))}
    </table>
  );
};
// tableData: [[], [], []], rowIndex={0, 1, 2}(행의 수 = 3)
// rowData[0] = ['', '', ''] ... 

export default Table;