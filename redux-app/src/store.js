const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => {
  return {
    type: DECREASE,
  };
};

const initstate = {
  number: 1,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;