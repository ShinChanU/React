// class, import, export default
import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseballClass extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex. [1, 3, 5, 7]
    tries: [],  // push() 쓰면 안됨
  };

  onSubmitForm = (e) => {
    const { value, answer, result, tries } = this.state;
    // console.log(tries);
    e.preventDefault();
    if (value === answer.join('')) {
      this.setState({
        result: '홈런',
        tries: [...tries, { try: value, result: '홈런!' }],   // 배열 두개를 비교해서 변화를 감지해야함
      });
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join('')} 였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i++) {
          // const index = value.indexOf(answer[i]);
          // if (index > -1) {
          //   if (answerArray[i] === answer[i]) {
          //     strike += 1;
          //   } else if (answer.includes(answerArray[i])) {
          //     ball += 1;
          //   }
          // }
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [...tries, {
            try: value,
            result: `${strike} 스트라이크 ${ball} 볼입니다.`
          }],
          value: '',
        });
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value, result, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
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

export default NumberBaseballClass;