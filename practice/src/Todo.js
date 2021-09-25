import React, { useState, useRef } from 'react';

const Todo = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setValue('');
    inputRef.current.focus();
  };

  return (
    <>
      <div>일정관리</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeValue}></input>
        <button>+</button>
      </form>
      <list />
    </>
  );
};

export default Todo;