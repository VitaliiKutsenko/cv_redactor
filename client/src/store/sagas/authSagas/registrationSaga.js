import { put, takeEvery, call } from 'redux-saga/effects';
import { registration } from '../../../api/registration';
import { AUTH_SUBMIT_FIELDS } from '../../actions/authActions/auth/authActionTypes';
import { REGISTRATION_SUBMIT_FIELDS } from '../../actions/authActions/registration/registrationActionTypes';
import {
  getAuthErrorAction,
  getAuthSuccessAction,
} from '../../actions/authActions/auth/authActions';
import {
  getRegistrationSuccessActions,
  getRegistrationErrorActions,
} from '../../actions/authActions/registration/registrationActions';

export function* registrationSaga({ payload }) {
  const { data } = yield call(registration, payload);

  try {
    yield put(getRegistrationSuccessActions({ ...data }));
  } catch (e) {
    yield put(getRegistrationErrorActions({ ...data }));
  }
}

export function* registrationWatcher() {
  yield takeEvery(REGISTRATION_SUBMIT_FIELDS, registrationSaga);
}
