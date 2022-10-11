import React from 'react';
import { EmploymentCardWrapper } from './employmentCardStyle';

export const EmploymentModels = ({
  path,
  position = [],
  responsibility = [],
  city,
  company,
  endWorkingPeriod,
  startWorkingPeriod,
}) => {
  const addResponsibility = () => {};

  const addPosition = positions => {
    return positions.map((position, index) => <span key={index}>{`${position} / `}</span>);
  };

  return (
    <EmploymentCardWrapper>
      <h2>{path}</h2>
      <article>
        <div className="position">{addPosition(position)}</div>
        <ul></ul>
      </article>
    </EmploymentCardWrapper>
  );
};
