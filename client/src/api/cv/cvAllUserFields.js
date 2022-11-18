import { $api } from '../api.config';

export const cvAllUserFields = async payload => {
  return await $api
    .get(`/cv_data`)
    .then(data => {
      return {
        hasError: false,
        data,
      };
    })
    .catch(({ response: data }) => {
      return {
        hasError: true,
        data,
      };
    });
};
