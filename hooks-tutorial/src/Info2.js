import React, { useReducer } from 'react';

function reducer(state, action) {
  // action은 e.target이 바뀔 때 !
  return {
    ...state,
    [action.name]: action.value
    // [e.target.name]: e.target.value -> 
  };
}

const Info2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  // state.name, state.nickname -> 구조 분해
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
    // e.target이 action -> Line 3
    console.log([e.target.name]);
  };

  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;