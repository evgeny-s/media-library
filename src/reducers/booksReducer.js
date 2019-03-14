import update from 'immutability-helper';

const initialState = {
  list: [],
  newTitle: '',
  newDescription: '',
  newAuthor: '',
  newImage: '',
  newPages: '',
  newPrice: '',
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPLETED":
      return update(state, {
        $merge: {
          list: action.payload,
        }
      });
    case "ITEM_ADDED":
      return update(state, {
        list: {
          $push: [action.payload],
        }
      });
    case "ON_INPUT_CHANGED":
      return update(state, {
        $merge: {
          [`new${action.payload.inputName}`]: action.payload.inputValue,
        }
      });
    default:
      return state;
  }
}

export default booksReducer;