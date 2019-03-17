import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import booksService from './../services/booksService';
import views from "../consts/views";
import formFields from "../consts/formFields";

function* fetchList() {
  const list = yield call(booksService.getList);
  yield put({type: "FETCH_COMPLETED", payload: list});
}

function* submitForm() {
  const booksStore = yield select((state) => state.books);
  const newItemParams = {};
  formFields.forEach((field) => {
    newItemParams[field.toLowerCase()] = booksStore[`new${field}`];
  });

  if (booksStore.editItemId) {
    newItemParams.id = booksStore.editItemId;
    const item = yield call(booksService.update, newItemParams);

    yield put({type: "ITEM_UPDATED", payload: item});
    yield put({type: "CHANGE_VIEW", payload: views.LIST});
  } else {
    const item = yield call(booksService.add, newItemParams);

    yield put({type: "ITEM_ADDED", payload: item});
    yield put({type: "CHANGE_VIEW", payload: views.LIST});
  }
}

function* deleteItem(action) {
  yield call(booksService.remove, action.payload);
  yield put({type: "ITEM_DELETED", payload: action.payload});
}

function* fetchListSaga() {
  yield takeLatest("FETCH_LIST", fetchList)
}

function* submitFormSaga() {
  yield takeLatest("SUBMIT_FORM", submitForm)
}

function* deleteItemSaga() {
  yield takeLatest("DELETE_ITEM", deleteItem)
}

export default function* rootSaga() {
  yield all([
    fetchListSaga(),
    submitFormSaga(),
    deleteItemSaga(),
  ])
}