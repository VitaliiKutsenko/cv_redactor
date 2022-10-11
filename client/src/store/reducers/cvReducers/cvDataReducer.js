import { SET_FIELDS } from '../../actions/cvActions/cvDataActions/cvDataActionTypes';
import { fieldSelector } from '../../selectors/fieldSelector';
import { ADD_FIELDS } from '../../actions/cvActions/fields/fieldsActionTypes';
import { groupFields } from './cvServices';

const initialState = {};

export const cvData = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FIELDS:
      // const previousState = state[payload.path]?.data ? state[payload.path].data : [];

      // console.log(previousState);
      groupFields(payload);

      return {
        ...state,
        // [payload.path]: {
        //   id: payload.id,
        //   data: [...previousState, ...groupFields(payload)],
        // },
      };

    default:
      return state;
  }
};
