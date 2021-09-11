// class, import, export default
// 클래스의 경우 PureComponent 사용
// import React, { PureComponent } from 'react';

// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

// export default Try;

// hooks, require, module.exports
// 훅스의 경우는 컴포넌트를 memo()로 감싸면 최적화 가능 !
const React = require('react');
const { memo } = require('react');
const { useState } = require('react');

const Try = memo(({ tryInfo }) => { // (props) => ({ tryInfo }) 구조 분해법(원래, this.props.tryInfo)
  // props에서 받은 result의 값을 변경하고 싶으면, 직접바꾸지말고, useState를 사용해서 바꿈
  // const [result, setResult] = useState(tryInfo.result);
  // const onClick = () => {
  //   // 블라블라
  // };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

module.exports = Try;