import React from 'react';
import { ProgressBarWrapper } from './progressBarStyle';

export const ProgressBar = ({ getValues, fields }) => {
  // console.log(getValues);
  const getFieldsLength = (getValues = {}) => {
    return Object.values(getValues()).reduce((acc, item) => {
      if (item?.length > 3) {
        return [...acc, item];
      }

      return acc;
    }, []).length;
  };

  return (
    // <ProgressBarWrapper fieldLength={getFieldsLength(getValues)} fields={fields}>
    <div className="progress">
      <div className="progress_1"></div>
      <div className="progress_2"></div>
    </div>
    //{' '}
    // </ProgressBarWrapper>
  );
};
