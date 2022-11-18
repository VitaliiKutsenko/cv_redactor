import React, { useEffect, useState } from 'react';
import { AddBlockWrapper } from './addBlockStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../../modal/components/buttons/formButton';

export const AddBlock = props => {
  return (
    <AddBlockWrapper>
      <button {...props}>add block</button>
    </AddBlockWrapper>
  );
};
