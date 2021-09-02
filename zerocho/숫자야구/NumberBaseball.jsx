import React, { Component } from 'react';
import Try from './Try';
// const React = require('react');
// const Try = require('./Try');
// const { Component } = React;
// const { useState, useRef } = React;

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex. [1, 3, 5, 7]
    tries: [],  // push() 쓰면 안됨
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런',
        tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],   // 배열 두개를 비교해서 변화를 감지해야함
      })
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.include(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...this.state.tries, {
            try: this.state.value, result: `${strike} 스트라이크 ${ball} 볼입니다.`
          }],
        });
      }
    }
    if (tries.length >= 9) {
      const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
      $logs.appendChild(message);
      return;
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도: `} tryInfo={v} /> // key는 큰 컴포넌트에 작성
            );
          })}
        </ul>
      </>
    );
  }
}


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

// module.exports = NumberBaseball;

export default NumberBaseball;