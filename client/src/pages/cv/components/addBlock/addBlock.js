import React, { useEffect, useState } from 'react';
import { AddBlockWrapper } from './addBlockStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../modal/components/buttonForm/button';

export const AddBlock = () => {
  const [block, setBlock] = useState(false);
  const navigate = useNavigate();
  const addBlockHandler = () => {
    setBlock(prev => !prev);
    navigate('/modal');
  };

  return (
    <AddBlockWrapper>
      <ButtonForm onClick={addBlockHandler}>add block</ButtonForm>
    </AddBlockWrapper>
  );
};
