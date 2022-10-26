import React, { createRef, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { ModalInputFormWrapper } from './modalInputFormStyle';
import { idGenerator } from '../../helper/modalHelper';
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonForm } from '../buttonForm/button';
import TextareaAutosize from 'react-textarea-autosize';
import { ModalInputFields } from './modalInputFields/modalInputFields';

export const SocialContext = React.createContext({
  remove: () => {},
  append: () => {},
});
export const ModalInputForm = props => {
  const { control } = useFormContext();

  const socialName = useWatch({
    name: `${props.path}.${props.fieldIndex}.name`,
    control,
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${props.path}.${props.fieldIndex}.values`,
  });
  const addProfileHandler = () => {
    append({ value: '' });
  };

  return (
    <SocialContext.Provider value={{ remove }}>
      <ModalInputFormWrapper>
        <div className="modalFields_header">
          <h3>{socialName}</h3>
          <ButtonForm
            colorStart="green"
            colorEnd="forestgreen"
            type="button"
            onClick={addProfileHandler}
          >
            +
          </ButtonForm>
        </div>
        <ul>
          {fields.map((field, index) => {
            return (
              <ModalInputFields
                inputIndex={index}
                key={field.id}
                name={`${props.path}.${props.fieldIndex}.values.${index}.value`}
              />
            );
          })}
        </ul>
      </ModalInputFormWrapper>
    </SocialContext.Provider>
  );
};
