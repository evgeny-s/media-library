import { expectSaga } from 'redux-saga-test-plan';

import {fetchListSaga} from './../../sagas/bookSaga';
import {submitFormSaga} from './../../sagas/bookSaga';
import rootReducers from './../../reducers';

jest.mock('./../../services/booksService');

describe('test bookSaga', () => {
  it('should put correct actions', () => {
    return expectSaga(fetchListSaga)
      .put({type: "FETCH_COMPLETED", payload: undefined})
      .dispatch({type: "FETCH_LIST"})
      .silentRun();
  });

  it('should put correct actions', () => {
    return expectSaga(submitFormSaga)
      .withReducer(rootReducers)
      .put({type: "ITEM_UPDATED", payload: undefined})
      .put({type: "CHANGE_VIEW", payload: 'list'})
      .dispatch({type: "SUBMIT_FORM"})
      .silentRun();
  });
});