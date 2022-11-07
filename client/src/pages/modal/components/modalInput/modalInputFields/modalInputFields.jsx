import React, { useContext } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from 'react-hook-form';
import { ModalInputFieldsWrapper } from './modalInputFieldsStyled';
import { SocialContext } from '../modalInputForm';
import { ButtonForm } from '../../buttonForm/button';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import RemoveFields from '../../../../../../public/svg_modal/RemoveFields.svg';

export const ModalInputFields = ({ inputIndex, name, date, ...props }) => {
  const { register, control, handleSubmit } = useFormContext();
  const { remove } = useContext(SocialContext);

  const removeFieldHandler = () => {
    remove(inputIndex);
  };

  const handleBlur = e => {
    // console.log(e.target.value, props);
  };

  return (
    <ModalInputFieldsWrapper>
      {!date && (
        <TextareaAutosize
          minRows="1"
          autoComplete="off"
          {...register(name, {
            required: 'Заполните поле',
            minLength: 3,
            onBlur: e => handleBlur(e),
          })}
        />
      )}
      {date && (
        <Controller
          control={control}
          name={name}
          render={({ field }) => {
            return (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                onChange={e => field.onChange(e)}
                selected={field.value}
              />
            );
          }}
        />
      )}
      <ButtonForm
        onClick={removeFieldHandler}
        info="Remove"
        onBlur={e => console.log(e)}
        content={<RemoveFields />}
      />
    </ModalInputFieldsWrapper>
  );
};
