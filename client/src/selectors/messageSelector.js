import { createSelector } from 'reselect';

const message = store => store;

export const messageSelector = createSelector(message, items => {
  for (let key in items) {
    if (items[key]) {
      return items[key];
    }
  }
});
