import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as UserActions from './User.action';
// import authorizedRequest from '../../helpers/request/authorizedRequest';

// let paramsUser;


function* UserRequested(action: { payload: any }) {
  try {
    // const res = yield call(() =>
    //   authorizedRequest.post('/v1/holiday', action.payload),
    // );
    yield put(UserActions.getUserRequested({}));
  } catch (error) {
    yield put(UserActions.getUserSucceeded(error));
  }
}



export default function* UserSaga() {
  yield all([
    takeLatest(UserActions.getUserRequested, UserRequested),
  ]);
}
