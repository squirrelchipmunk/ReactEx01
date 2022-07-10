// action
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});

export const decrease = () => ({
  type: 'DECREMENT',
});

// 초기 상태
const initState = {
  username: 'qqq',
  number: 1,
};

//
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload }; // return 될 때 state가 변경되면서 ui도 변경
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};
export default reducer;
