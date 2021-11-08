import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({ // 여러개 리듀서를 합쳐줌
  counter,
  todos,
});

export default rootReducer;