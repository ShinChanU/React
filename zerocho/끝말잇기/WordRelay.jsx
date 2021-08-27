const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack',
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;

// 파일을 분리할때 시작 두줄과 끝 두줄 꼭 적어줘야함