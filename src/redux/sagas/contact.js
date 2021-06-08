import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/contact";

function* addContact(action) {
  try {
    // 1. 서버의 REST API를 호출
    const result = yield call(api.add, action.payload);

    // 2. API 호출이 완료되면 state를 변경
    yield put({
      type: "ADD_CONTACT_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchContactList(action) {
  try {
    const result = yield call(api.fetch);
    console.log(result);
    yield put({ type: "FETCH_CONTACTLIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeContact(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);

    yield put({
      type: "REMOVE_CONTACT_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyContact(action) {
  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_CONTACT_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* contactSaga() {
  yield takeEvery("ADD_CONTACT", addContact);
  yield takeEvery("REMOVE_CONTACT", removeContact);
  yield takeEvery("MODIFY_CONTACT", modifyContact);
  yield takeLatest("FETCH_CONTACTLIST", fetchContactList);
}

export default contactSaga;
