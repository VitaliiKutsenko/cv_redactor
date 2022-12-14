import { ADD_FIELDS, ADD_NEW_FIELD, REMOVE_NEW_FIELD } from './cvDataActions/cvDataActionTypes';
import { modalFieldsSchema } from '../../pages/modal/schema/modalFields';

const initialState = { ...modalFieldsSchema };

export const cvData = (state = initialState, { type, payload }) => {
  // console.log(JSON.stringify(modalFieldsSchema));
  switch (type) {
    case ADD_FIELDS:
      return {
        ...state,
        [payload.path]: state[payload.path].map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              fields: payload.value,
            };
          }

          return item;
        }),
      };

    case ADD_NEW_FIELD:
      return {
        ...state,
        [payload]: [
          ...state[payload],
          ...modalFieldsSchema[payload].map(item => {
            return {
              ...item,
              id: Math.max(...state[payload].map(item => item.id)) + 1,
            };
          }),
        ],
      };

    case REMOVE_NEW_FIELD:
      const { id, path } = payload;

      return {
        ...state,
        [path]: [...state[path].filter(field => field.id !== id)],
      };

    default:
      return state;
  }
};
