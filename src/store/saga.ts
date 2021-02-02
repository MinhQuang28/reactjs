import { fork, all } from '@redux-saga/core/effects';

import UserSaga from './User/User.saga';

export default function* rootSaga() {
  try {
    yield all([
      fork(UserSaga),
      // fork(appointmentSaga),
      // fork(customerSaga),
      // fork(doctorSaga),
      // fork(holidaySaga),
      // fork(versionSaga),
    ]);
  } catch (e) {
    // eslint-disable-next-line no-console
  }
}
