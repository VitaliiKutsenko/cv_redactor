export const schema = {
  employment: [
    {
      id: 1,
      labelText: 'Компании',
      inputType: 'text',
    },
    {
      id: 2,
      labelText: 'Должность',
      inputType: 'text',
      multi: true,
    },
    {
      id: 3,
      labelText: 'Обязанности',
      inputType: 'text',
      area: 'textarea',
      multi: true,
    },
    {
      id: 4,
      labelText: 'Город',
      inputType: 'text',
    },
    {
      id: 5,
      labelText: 'Работал с',
      inputType: 'date',
    },
    {
      id: 6,
      labelText: 'Работал по',
      inputType: 'date',
    },
  ],
  skills: [
    {
      id: 1,
      labelText: 'skill',
      inputType: 'text',
      multi: true,
    },
  ],
  hobbies: [
    {
      id: 1,
      labelText: 'hobby',
      inputType: 'text',
      multi: true,
    },
  ],
  languages: [
    {
      id: 1,
      labelText: 'language',
      addField: 'text',
      inputType: 'range',
      multi: true,
    },
  ],
};
