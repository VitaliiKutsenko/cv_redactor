import {
  GET_USER_CARD_SUCCESS,
  GET_USER_CARD_ERROR,
  SET_USER_CARD,
} from './cvUserCardsActionTypes';

const initialState = {};

export const cvUserCards = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_CARD: {
      return { ...state };
    }

    case GET_USER_CARD_SUCCESS:
      // console.log(payload);

      return {
        ...state,
        success: true,
      };

    case GET_USER_CARD_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
