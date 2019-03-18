import React from 'react';
import commonReducer from './../../reducers/commonReducer';

describe('Reducers: commonReducer.js', () => {
  it('should handle CHANGE_VIEW properly', () => {
    let initialState = {view: 'list'};
    let newState = commonReducer(initialState, {type: "CHANGE_VIEW", payload: 'edit'});

    expect(newState).toEqual({view: 'edit'});
  });
});