import { $api } from '../api.config';

export const resetPassword = async payload => {
  return await $api
    .post('/authorization/reset-password', payload)
    .then(({ data }) => data)
    .catch(({ response: { data } }) => data);
};
