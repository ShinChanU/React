// 렌더링은 props, state가 변화할 때 발생
// 그러나 setState()시에 아무 값을 주지 않아도 렌더링 되는 현상이 발생할 수 있음
// shouldComponentUpdate() 메소드를 사용해서 불필요한 렌더링을 방지하고 최적화를 할 수 있음
// devtools > 설정 > highlight update 체크 > 렌더링시 컴포넌트 색깔 나옴

// shouldComponentUpdate() 말고 PureComponent를 사용할 수 도 있음


import React, { PureComponent } from 'react';

class Test extends PureComponent {
  state = {
    counter: 0,
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) { // 이 메소드를 삽입해서 불필요한 렌더링 방지, 최적화
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  onClickBtn = () => { // state 값이 변하지 않음
    this.setState({

    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickBtn}>클릭!</button>
      </div>
    );
  }
}

export default Test;