import React, { useEffect, useState } from 'react';
import { CvMainWrapper } from './cvMainStyle';
import { AddBlock } from '../addBlock/addBlock';
import { useDispatch, useSelector } from 'react-redux';
import { CvCard } from '../cvCard/cvCard';

export const CvMain = () => {
  const store = useSelector(store => store?.cvData || []);
  const [cardState, setCardState] = useState([]);

  useEffect(() => {
    if (store) {
      for (let field in store) {
        store[field].map(item => {
          const id = `${field}_${item.id}`;

          setCardState(prev => [...prev, <CvCard key={id} id={item.id} item={item} />]);
        });
      }
    }
  }, [store]);

  console.log(cardState);

  return <CvMainWrapper>{cardState.map(item => item)}</CvMainWrapper>;
};
