const INCREASE = 'counter/INCREASE'; // 중복 피하기위해 모듈/액션이름
const DECREASE = 'counter/DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// import { increase, decrease } from './counter'; 로 임포트

const initialState = {
  number: 0
};

function counter(state = initialState, action) { // counter 리듀서
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter; // import counter from './counter'; 로 임포트