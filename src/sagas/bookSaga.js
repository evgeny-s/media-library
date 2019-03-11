import {call, put, takeLatest, all} from 'redux-saga/effects';

import booksService from './../services/booksService';

function* fetchList() {
  const list = yield call(booksService.getList);
  yield put({type: "FETCH_COMPLETED", payload: list});
}

function* fetchListSaga() {
  yield takeLatest("FETCH_LIST", fetchList)
}

export default function* rootSaga() {
  yield all([
    fetchListSaga(),
  ])
}