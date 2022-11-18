import { $api } from '../api.config';

export const cvUserCollection = async payload => {
  return await $api
    .post(`/add_collection`, payload)
    .then(data => {
      console.log(data);

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
