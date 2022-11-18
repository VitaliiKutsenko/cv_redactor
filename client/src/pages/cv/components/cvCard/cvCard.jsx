import React from 'react';
import { CvCardWrapper } from './cvCardStyled';

export const CvCard = ({ item, id }) => {
  const renderCard = () => {
    return item.fields.map((field, index) => {
      return (
        <div key={index}>
          <h3>{field.name}</h3>
          {/*change key in next iteration field*/}
          <div>{field.values.map(value => value.value)}</div>
        </div>
      );
    });
  };

  return <CvCardWrapper>{renderCard()}</CvCardWrapper>;
};
