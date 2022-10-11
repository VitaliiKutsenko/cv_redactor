import React, { useState } from 'react';
import { InputWrapper } from './inputStyle';
import Hide from './../../../public/svg/Hide.svg';
import Show from './../../../public/svg/Show.svg';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

export const Input = ({ inputType, labelText, register, errors }) => {
  const [iconState, setIconState] = useState(false);
  const registerId = labelText.toLowerCase();
  const inputId = uniqid();

  const iconTrigger = e => {
    e.preventDefault();
    setIconState(!iconState);
  };

  return (
    <InputWrapper>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        className={labelText === 'Email' || labelText === 'Password' ? 'authFields' : 'textFields'}
        id={inputId}
        autoComplete="off"
        type={(iconState && 'text') || inputType}
        {...register(registerId)}
      />
      {inputType === 'password' && <button onClick={e => iconTrigger(e)}>{iconState ? <Hide /> : <Show />} </button>}
      {errors[registerId] ? <p>{errors[registerId]?.message} </p> : <p></p>}
    </InputWrapper>
  );
};

Input.propType = {
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
};
