import { put, takeEvery, call } from 'redux-saga/effects';
import { resetPassword } from '../../../api/auth/resetPassword';
import {
  errorResetPasswordAction,
  resetPasswordAction,
} from './resetPasswordActions/resetPasswordActions';
import { RESET_PASSWORD } from './resetPasswordActions/resetPasswordActionTypes';

export function* resetPasswordSaga({ payload }) {
  try {
    const data = yield call(resetPassword, payload);

    yield put(
      resetPasswordAction({
        data,
        hasError: false,
      })
    );
  } catch (data) {
    yield put(
      errorResetPasswordAction({
        data,
        hasError: true,
      })
    );
  }
}

export function* resetPasswordWatcher() {
  yield takeEvery(RESET_PASSWORD, resetPasswordSaga);
}
