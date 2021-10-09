import React, { useMemo, useCallback, useReducer, useEffect } from 'react';

function reducer(state, action) {
  // action은 e.target이 바뀔 때 !
  return {
    ...state,
    [action.name]: action.value
    // [e.target.name]: e.target.value -> 
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });

  useCallback(() => {
    console.log('hello world!');
  }, [])

  useMemo(() => {
    const fn = () => {
      console.log('hello world!');
    };
    return fn;
  }, [])

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;