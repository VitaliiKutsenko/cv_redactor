import { $api } from '../api.config';

export const cvUserCards = async payload => {
  return await $api
    .post(`/add_cv_category:${Object.keys(payload)}`, payload)
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
