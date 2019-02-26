const newsReducer = (state = [], action) => {
  console.log('newsReducer', action);
  let newState;
  switch(action.type) {
    case 'UPVOTE':
      newState = [];
      return newState;
    case 'DOWNVOTE':
      newState = [];
      return newState;
    default:
      return state;
  }
};

export default newsReducer;
