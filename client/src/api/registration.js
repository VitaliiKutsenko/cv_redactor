import { $api } from './api.config';

export const registration = async payload => {
  return await $api
    .post('/registration', payload)
    .then(({ data }) => ({
      hasError: false,
      data,
    }))
    .catch(({ response: { data } }) => ({
      hasError: true,
      data,
    }));
};
