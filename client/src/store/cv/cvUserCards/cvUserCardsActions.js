import {
  GET_USER_CARD_SUCCESS,
  GET_USER_CARD_ERROR,
  SET_USER_CARD,
} from './cvUserCardsActionTypes';

export const setUserCard = payload => {
  return {
    type: SET_USER_CARD,
    payload,
  };
};

export const getUserCardSuccess = payload => ({
  type: GET_USER_CARD_SUCCESS,
  payload,
});
export const getUserCardError = payload => ({
  type: GET_USER_CARD_ERROR,
  payload,
});
