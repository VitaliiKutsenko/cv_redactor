import { $api } from '../api.config';

export const auth = async payload => {
  return await $api
    .post('/login', payload)
    .then(({ data }) => {
      return {
        hasError: false,
        data,
      };
    })
    .catch(({ response: { data } }) => ({
      hasError: true,
      data,
    }));
};
