import update from 'immutability-helper';

import formFields from './../consts/formFields';

const initialState = {
  list: [],
  newTitle: '',
  newDescription: '',
  newAuthor: '',
  newImage: '',
  newPages: '',
  newPrice: '',
  editItemId: null,
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
    case "ITEM_UPDATED":
      let itemIndexToUpdate;
      state.list.forEach((item, index) => {
        if (item.id === action.payload.id) {
          itemIndexToUpdate = index;
        }
      });

      return update(state, {
        list: {
          [itemIndexToUpdate]: {
            $set: action.payload,
          }
        }
      });
    case "ON_INPUT_CHANGED":
      return update(state, {
        $merge: {
          [`new${action.payload.inputName}`]: action.payload.inputValue,
        }
      });
    case "EDIT_ITEM":
      let editItem;
      let editItemId = action.payload;
      state.list.forEach((item) => {
        if (item.id === editItemId) {
          editItem = Object.assign({}, item);
        }
      });

      let stateToChange = {};

      if (editItemId) {
        stateToChange = {
          editItemId,
        };

        formFields.forEach((field) => {
          stateToChange[`new${field}`] = editItem[field.toLowerCase()];
        });
      } else {
        formFields.forEach((field) => {
          stateToChange[`new${field}`] = initialState[`new${field}`];
        });
      }

      return update(
        state, {
          $merge: stateToChange,
        }
      );
    case 'SHOW_ITEM':
      return update(state, {
        $merge: {
          selectedId: action.payload,
        }
      });
    case "ITEM_DELETED":
      let itemIndexToDelete;
      state.list.forEach((item, index) => {
        if (item.id === action.payload) {
          itemIndexToDelete = index;
        }
      });

      return update(state,
        {
          list:
            {
              $splice:
                [
                  [itemIndexToDelete, 1]]
            }
        }
      );
    default:
      return state;
  }
}

export default booksReducer;