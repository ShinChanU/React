import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickBtn1 = () => {
    dispatch({
      type: '증가'
    })
  };

  const onClickBtn2 = () => {
    dispatch({
      type: '감소'
    })
  };

  return (
    <div className="App">
      <p>몸무게 : {weight}</p>
      <button onClick={onClickBtn1}>더하기</button>
      <button onClick={onClickBtn2}>빼기</button>
    </div>
  );
}

export default App;