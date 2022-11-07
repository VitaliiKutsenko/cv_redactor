import React from 'react';
import { CvCardWrapper } from './cvCardStyled';

export const CvCard = ({ item, id }) => {
  const renderCard = () => {
    return item.fields.map((items, index) => {
      console.log(item);

      return (
        <div key={index}>
          <h3>{items.name}</h3>
          {/*change key in next iteration field*/}
          <div>{items.values.map(itemss => itemss.value)}</div>
        </div>
      );
    });
  };

  return <CvCardWrapper>{renderCard()}</CvCardWrapper>;
};
