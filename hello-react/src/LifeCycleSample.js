import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null;

  constructor(props) { // 제일 처음 생성자
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) { // 렌더링되기 전, state를 동기화 시키는 용도
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() { // 컴포넌트 처음에 생길 때
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) { // 리렌더링을 막아줌
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() { // 컴포넌트 제거할 때
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { // render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) { // 리렌더링 완료 후
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('---------render---------');
    const { number, color } = this.state;

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => this.myRef = ref}>{number}</h1>
        <p>color: {color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;