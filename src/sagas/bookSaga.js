import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import booksService from './../services/booksService';
import views from "../consts/views";

function* fetchList() {
  const list = yield call(booksService.getList);
  yield put({type: "FETCH_COMPLETED", payload: list});
}

function* submitForm() {
  const booksStore = yield select((state) => state.books);
  const item = yield call(booksService.add, {
    title: booksStore.newTitle,
    description: booksStore.newDescription,
    author: booksStore.newAuthor,
    image: booksStore.newImage,
    pages: booksStore.newPages,
    price: booksStore.newPrice,
  });

  yield put({type: "ITEM_ADDED", payload: item});
  yield put({type: "CHANGE_VIEW", payload: views.LIST})
}

function* fetchListSaga() {
  yield takeLatest("FETCH_LIST", fetchList)
}

function* submitFormSaga() {
  yield takeLatest("SUBMIT_FORM", submitForm)
}

export default function* rootSaga() {
  yield all([
    fetchListSaga(),
    submitFormSaga(),
  ])
}