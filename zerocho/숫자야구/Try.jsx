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

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

module.exports = Try;