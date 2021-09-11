const React = require('react');
// const { Component } = React; 
const { useState, useRef } = React;

// hooks
const WordRelay = () => {
  const [word, setWord] = useState('신찬우');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('딩동댕');
      inputRef.current.focus();
    } else {
      setValue('');
      setResult('땡');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>클릭!!</button>
      </form>
      <div>{result}</div>
    </>
  );
}


// class
// class WordRelay extends Component {
//   state = {
//     word: '신찬우',
//     value: '',
//     result: '',
//   };

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         word: this.state.value,
//         value: '',
//         result: '딩동댕',
//       });
//       this.input.focus();
//     } else {
//       this.setState({
//         value: '',
//         result: '땡',
//       });
//       this.input.focus();
//     }
//   };

//   onChangeInput = (e) => {
//     this.setState({
//       value: e.target.value,
//     })
//   };

//   input;

//   onRefInput = (c) => {
//     this.input = c;
//   };

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmitForm}>
//           <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
//           <button>입력!!</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

module.exports = WordRelay;

// 파일을 분리할때 시작 두줄과 끝 두줄 꼭 적어줘야함