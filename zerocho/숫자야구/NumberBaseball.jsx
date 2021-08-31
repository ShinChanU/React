const React = require('react');
const Try = require('./Try');
const { Component } = React;
// const { useState, useRef } = React;

function getNumbers() {

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {

  };

  onChangeInput = (e) => {
    e.preventDefault();

  };

  // 분리 가능
  fruits = [
    { fruit: '🍎', taste: '달다' },
    { fruit: '🍋', taste: '시다' },
    { fruit: '🍌', taste: '맵다' },
    { fruit: '🍓', taste: '짜다' },
    { fruit: '🥝', taste: '쓰다' },
    { fruit: '🍑', taste: '떫다' }
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return (
              <Try value={v} index={i} />
            );
          })}
        </ul>
      </>
    );
  }
}

module.exports = NumberBaseball;

{/* 반복문 map 1. 이차원 배열 (v[0]) */ }
{/* {[             
            ['🍎', '달다'],
            ['🍋', '시다'],
            ['🍌', '맵다'],
            ['🍓', '짜다'],
            ['🥝', '쓰다'],
            ['🍑', '떫다']].map((v) => {
              return (
                <li key={v[0] + v[1]}><b>{v[0]}</b> {v[1]}</li>   // key는 고유한 값을 넣어줘야 함
              );
            })} */}

{/* 반복문 map 2. 객체 사용 (v.fruit) */ }
{/* {[
            { fruit: '🍎', taste: '달다' },
            { fruit: '🍋', taste: '시다' },
            { fruit: '🍌', taste: '맵다' },
            { fruit: '🍓', taste: '짜다' },
            { fruit: '🥝', taste: '쓰다' },
            { fruit: '🍑', taste: '떫다' }].map((v) => {
              return (
                <li key={v.fruit + v.taste}><b>{v.fruit}은/는</b> {v.taste}.</li>
              );
            })} */}

// {
//   this.fruits.map((v) => {
//     return (
//       <li key={v.fruit + v.taste}><b>{v.fruit}은/는</b> {v.taste}.
//         <div>컨텐츠1</div>
//         <div>컨텐츠2</div>
//         <div>컨텐츠3</div>
//       </li>
//     );
//   })
// }