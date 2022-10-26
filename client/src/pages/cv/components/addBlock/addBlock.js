import React, { useEffect, useState } from 'react';
import { AddBlockWrapper } from './addBlockStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../../modal/components/buttonForm/button';

export const AddBlock = props => {
  return (
    <AddBlockWrapper>
      <ButtonForm {...props}>add block</ButtonForm>
    </AddBlockWrapper>
  );
};
