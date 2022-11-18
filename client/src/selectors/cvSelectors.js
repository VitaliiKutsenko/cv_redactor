import { createSelector } from 'reselect';

export const selectAllCards = state => state?.cvAllUserFields || [];
export const dasd = state => state?.cvUserCards;
export const selectCards = createSelector([dasd], b => {
  if (b.success) {
    return true;
  }
});
