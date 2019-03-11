import update from 'immutability-helper';

const initialState = {
  list: [],
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPLETED":

      return update(state, {
        $merge: {
          list: action.payload,
        }
      });
    default:
      return state;
  }
}

export default booksReducer;