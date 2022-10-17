import React, { createRef, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { ModalInputFormWrapper } from './modalInputFormStyle';
import { idGenerator } from '../../../helper/modalHelper';
import { Controller } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonForm } from '../../buttonForm/button';
import TextareaAutosize from 'react-textarea-autosize';

export const ModalInputForm = ({
  id,
  path,
  labelText,
  element,
  inputType,
  multi,
  date,
  contentText,
  isNewField,

  setFieldsState,
  setValue,
  control,
  getValues,
  errors,
  resetField,
  register,
  ...props
}) => {
  // const [error, setError] = useState(false);
  const addFieldsHandler = e => {
    const buttonId = Number(e.target.closest('button').id);

    setFieldsState(prev => {
      let indexItem = null;
      const addItem = prev.find((item, index) => {
        if (item.id === buttonId) {
          indexItem = index;

          return item;
        }
      });

      return [
        ...prev.slice(0, indexItem + 1),
        {
          ...addItem,
          id: idGenerator(prev),
          path: `${addItem.path}_${idGenerator(prev)}`,
          multi: true,
          isNewField: true,
        },
        ...prev.slice(indexItem + 1),
      ];
    });
  };

  const removeFieldsHandler = e => {
    const buttonId = Number(e.target.closest('button').id);

    setFieldsState(prev => {
      return prev.filter(field => {
        if (field.id !== buttonId) {
          return field;
        } else {
          resetField(field.path);
        }
      });
    });
  };

  const handleChange = useCallback(e => {
    const inputValue = e.target.value;
  }, []);
  const renderDateElement = (paths, contentText) => {
    return paths.map((path, index) => {
      return (
        <div className="date" key={path}>
          <div>{contentText[index]}</div>
          <div className="input_wrapper">
            <Controller
              control={control}
              name={path}
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
          </div>
        </div>
      );
    });
  };
  return (
    <ModalInputFormWrapper>
      <label htmlFor={path} className={isNewField && 'active'}>
        <span>{isNewField ? '' : labelText}</span>
      </label>
      {!date && (
        <div className="input_wrapper">
          <TextareaAutosize
            id={id}
            key={id}
            minRows={element === 'textarea' ? 2 : 1}
            type={inputType || 'text'}
            autoComplete="off"
            name={path}
            {...register(`${multi ? path + '.0' : path}`, {
              required: 'Заполните поле',
              minLength: 3,
              onChange: e => handleChange(e),
            })}
          />

          {!isNewField && multi && (
            <ButtonForm
              content="+"
              circle="height"
              margin="0 0 0 10px"
              colorStart="rgb(1, 158, 1)"
              colorEnd="forestgreen"
              id={id}
              onClick={e => addFieldsHandler(e)}
            />
          )}

          {isNewField && (
            <ButtonForm
              circle="height"
              content="-"modalForm
              margin="0 0 0 10px"
              colorStart="rgb(255, 0, 0)"
              colorEnd="tomato"
              bgColor="linear-gradient(to right,white,transparent)"
              id={id}
              onClick={e => removeFieldsHandler(e)}
            />
          )}
        </div>
      )}
      {date && <div className="date_wrapper">{renderDateElement(path, contentText)}</div>}
    </ModalInputFormWrapper>
  );
};
