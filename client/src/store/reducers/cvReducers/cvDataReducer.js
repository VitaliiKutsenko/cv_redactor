import { SET_FIELDS } from '../../actions/cvActions/cvDataActions/cvDataActionTypes';
import { fieldSelector } from '../../selectors/fieldSelector';
import {ADD_FIELDS, REMOVE_FIELDS} from '../../actions/cvActions/fields/fieldsActionTypes';
import { groupFields } from './cvServices';

const initialState = {};

export const cvData = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FIELDS:
      return {
        ...state,
        [payload.path] : groupFields(payload)
      };
    case REMOVE_FIELDS:
      return {
        ...state,
        ...state[payload.path].filter(field => field.id !== payload.id)
      };

    default:
      return state;
  }
};
