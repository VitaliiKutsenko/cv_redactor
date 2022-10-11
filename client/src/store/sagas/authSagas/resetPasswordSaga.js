import { put, takeEvery, call } from 'redux-saga/effects';
import { resetPassword } from '../../../api/resetPassword';
import {
  errorResetPasswordAction,
  resetPasswordAction,
} from '../../actions/authActions/resetPassword/resetPasswordActions';
import { RESET_PASSWORD } from '../../actions/authActions/resetPassword/resetPasswordActionTypes';

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
