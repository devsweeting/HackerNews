const newsReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case 'ADD_COMMENT':
      newState = Object.assign({}, state, {
        [action.id]: {
          text: action.text,
          timeOpen: action.timeOpen,
          id: action.id
        }
      });
      console.log('newsReducer', newState);
      return newState;
    default:
      return state;
  }
};

export default newsReducer;
