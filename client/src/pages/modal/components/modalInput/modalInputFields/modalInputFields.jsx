import React, { useContext } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from 'react-hook-form';
import { ModalInputFieldsWrapper } from './modalInputFieldsStyled';
import { SocialContext } from '../modalInputForm';
import { ButtonForm } from '../../buttonForm/button';

export const ModalInputFields = ({ inputIndex, name }) => {
  const { register } = useFormContext();
  const { remove } = useContext(SocialContext);

  // const renderDateElement = (paths, contentText) => {
  //   return paths.map((path, index) => {
  //     return (
  //       <div className="date" key={path}>
  //         <div>{contentText[index]}</div>
  //         <div className="input_wrapper">
  //           <Controller
  //             control={control}
  //             name={path}
  //             render={({ field }) => {
  //               return (
  //                 <ReactDatePicker
  //                   className="input"
  //                   placeholderText="Select date"
  //                   onChange={e => field.onChange(e)}
  //                   selected={field.value}
  //                 />
  //               );
  //             }}
  //           />
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  const removeFieldHandler = () => {
    remove(inputIndex);
  };

  return (
    <ModalInputFieldsWrapper>
      <TextareaAutosize
        minRows="2"
        autoComplete="off"
        {...register(name, {
          required: 'Заполните поле',
          minLength: 3,
        })}
      />
      <button onClick={removeFieldHandler}>
        <div>Remove</div>
      </button>
    </ModalInputFieldsWrapper>
  );
};
