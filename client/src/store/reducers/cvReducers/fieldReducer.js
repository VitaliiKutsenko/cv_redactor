import {
  ADD_FIELDS,
  GET_FIELDS,
  REMOVE_FIELDS,
} from '../../actions/cvActions/fields/fieldsActionTypes';

const initialState = {
  employment: [
    {
      id: 1,
      path: 'company',
      labelText: 'Компания',
      element: 'input',
      inputType: 'text',
      multi: false,
    },
    {
      id: 2,
      path: 'position',
      labelText: 'Должность',
      element: 'textarea',
      inputType: 'text',
      multi: true,
    },
    {
      id: 3,
      path: 'responsibility',
      labelText: 'Обязанности',
      inputType: 'text',
      element: 'textarea',
      multi: true,
    },
    {
      id: 4,
      path: 'city',
      labelText: 'Город',
      inputType: 'text',
      element: 'input',
      multi: false,
    },
    {
      id: 5,
      path: ['startWorkingPeriod', 'endWorkingPeriod'],
      labelText: 'Период работы',
      contentText: ['c', 'по'],
      date: true,
      inputType: 'text',
      element: 'input',
      multi: false,
    },
  ],
  skills: [
    {
      path: 'skills',
      id: 1,
      labelText: 'Добавьте свои навыки',
      inputType: 'text',
      element: 'input',
      multi: true,
    },
  ],
  hobbies: [
    {
      path: 'hobbies',
      id: 1,
      labelText: 'hobby',
      inputType: 'text',
      area: 'textarea',
      multi: true,
    },
  ],
  languages: [
    {
      path: 'language',
      id: 1,
      labelText: 'language',
      inputType: 'range',
      area: 'textarea',
      multi: true,
    },
  ],
};

export const fields = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FIELDS:
      return state;

    default:
      return state;
  }
};
