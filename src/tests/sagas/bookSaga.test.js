import React from 'react';
import {expectSaga} from 'redux-saga-test-plan';

import {fetchListSaga} from "../../sagas/bookSaga";

jest.mock('./../../services/booksService');

describe('Saga: bookSaga', () => {
  it('Test: fetchListSaga', () => {
    expectSaga(fetchListSaga)
      .put({type: "FETCH_COMPLETED", payload: undefined})
      .dispatch({type: "FETCH_LIST"})
  })

});