import booksReducer from './../../reducers/booksReducer';

describe('reducers/bookReducer.js', () => {
  it('FETCH_COMPLETED action', () => {
    let state = {
      list: [],
    };
    state = booksReducer(state, {type: "FETCH_COMPLETED", payload: [{id: 1}]});
    expect(state).toEqual({list: [{id: 1}]});
  });

  it('ITEM_ADDED action', () => {
    let state = {
      list: [{id: 1,}],
    };
    state = booksReducer(state, {type: "ITEM_ADDED", payload: {id: 2}});
    expect(state).toEqual({list: [{id: 1}, {id: 2}]});
  });
});