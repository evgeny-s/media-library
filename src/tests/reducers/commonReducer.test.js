import commonReducer from './../../reducers/commonReducer';

describe('reducers/commonReducer.js', () => {
  it('chaned view correctly', () => {
    let state = {
      view: 'list',
    };
    state = commonReducer(state, {type: "CHANGE_VIEW", payload: 'edit'});
    expect(state).toEqual({view: 'edit'})
  });
});