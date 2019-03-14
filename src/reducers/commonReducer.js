import update from 'immutability-helper';

import viewsConsts from './../consts/views';

const initialState = {
  view: viewsConsts.LIST,
  selectedId: null,
};

function commonReducers(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return update(state, {
        $merge: {
          view: action.payload,
        }
      });
    case 'SHOW_ITEM':
      return update(state, {
        $merge: {
          selectedId: action.payload,
          view: viewsConsts.SHOW,
        }
      });
    default:
      return state;
  }
}

export default commonReducers;