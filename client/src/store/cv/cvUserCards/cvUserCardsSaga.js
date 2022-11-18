import { put, takeEvery, call } from 'redux-saga/effects';
import { cvUserCards } from '../../../api/cv/cvUserCards';

import { SET_USER_CARD } from './cvUserCardsActionTypes';
import { getUserCardError, getUserCardSuccess } from './cvUserCardsActions';

export function* userCvCardWatcher() {
  yield takeEvery(SET_USER_CARD, cvUserCardSaga);
}

export function* cvUserCardSaga({ payload }) {
  const { data } = yield call(cvUserCards, payload);

  try {
    yield put(getUserCardSuccess({ ...data }));
  } catch (hasError) {
    yield put(getUserCardError({ ...data }));
  }
}
