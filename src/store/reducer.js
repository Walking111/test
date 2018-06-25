const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {
  if (action.type === 'LOAD_BOOKS') {
    return {
      books: action.val
    }
  }
  return state;
};

export default reducer;