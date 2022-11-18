import React, { useEffect, useState } from 'react';
import { CvMainWrapper } from './cvMainStyle';
import { AddBlock } from '../addBlock/addBlock';
import { useDispatch, useSelector } from 'react-redux';
import { CvCard } from '../cvCard/cvCard';
import { selectAllCards, selectCards } from '../../../../selectors/cvSelectors';
import { getAllUserFields } from '../../../../store/cv/cvAllUserFields/cvAllUserFieldsActions';

export const CvMain = () => {
  const addCardsTrigger = useSelector(selectCards);
  const cvData = useSelector(selectAllCards);

  const allUserDispatch = useDispatch();

  console.log(cvData);

  useEffect(() => {
    if (addCardsTrigger) {
      allUserDispatch(getAllUserFields());
    }
  }, [addCardsTrigger]);

  // console.log(cvCard);

  return (
    <CvMainWrapper>
      {
        <div>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid animi
          dolores eaque earum esse fuga incidunt ipsum iusto labore maxime modi officia omnis
          perferendis perspiciatis quas, quos sunt, unde ut vel veritatis voluptates. Adipisci alias
          at commodi expedita iste nostrum numquam officiis possimus quam rem sit voluptate,
          voluptatibus!{' '}
        </div>
      }
    </CvMainWrapper>
  );
};
