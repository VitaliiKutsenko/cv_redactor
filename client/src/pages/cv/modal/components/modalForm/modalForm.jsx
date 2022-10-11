import React, { useCallback, useEffect, useState, useRef } from 'react';
import Arrow from '../../../../../../public/svg/Arrow.svg';
import { useForm } from 'react-hook-form';

import { ModalInputForm } from './modalInputForm/modalInputForm';
import { ModalFormWrapper } from './modalFormStyled';
import { useSelector } from 'react-redux';
import { ButtonForm } from '../buttonForm/button';
import { useScrollBar } from '../../../../../components/scrollBar/useScrollBar';

export const ModalForm = ({ path, id, name, handleRemoveList, onSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    resetField,
    control,
    reset,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const fields = useSelector(store => store?.fields[path]);
  const [fieldsState, setFieldsState] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const renderInput = (inputs = []) => {
    return inputs.map(input => {
      return (
        <ModalInputForm
          key={input.id}
          setFieldsState={setFieldsState}
          {...input}
          resetField={resetField}
          register={register}
          setValue={setValue}
          getValues={getValues}
          errors={errors}
          control={control}
        />
      );
    });
  };

  const getSubmitData = useCallback(inputField => {
    onSubmit({
      id,
      path,
      inputField,
    });
  });

  useEffect(() => {
    if (fields) {
      setFieldsState(prev => [...fields]);
    }
  }, [fields]);

  useEffect(() => {
    if (fieldsState) {
      setFieldsState(prev => prev);
    }
  }, [fieldsState, setFieldsState]);

  const handleRemoveForm = e => {
    e.stopPropagation();
    const buttonId = e.target.closest('button').id;

    handleRemoveList(buttonId);
  };

  const handleShowForm = e => {
    setShowForm(prev => !prev);
  };

  return (
    <ModalFormWrapper>
      <div className={`form_wrapper ${showForm ? 'show' : 'hidden'}`}>
        <div className={`form_label ${showForm ? 'show' : 'hidden'}`}>
          {name}
          <div className="buttonForm_wrapper">
            {showForm && (
              <ButtonForm
                colorStart="white"
                id={id}
                onClick={e => handleRemoveForm(e)}
                content="Remove"
              />
            )}
            <ButtonForm
              colorStart="white"
              colorEnd="orange"
              id={id}
              content="Edit"
              onClick={e => handleShowForm(e)}
            />
          </div>
        </div>
        {showForm && (
          <form onSubmit={handleSubmit(getSubmitData)}>
            <ul>{renderInput(fieldsState)}</ul>
            <div className="form_button__wrapper">
              <ButtonForm
                colorStart="white"
                colorEnd="cyan"
                className="form_button__presentation"
                content="Show"
              />
              <ButtonForm
                colorStart="white"
                colorEnd="rgba(100, 85, 194, 0.50)"
                className="form_button__submit"
                type="submit"
                content="Отправить"
                {...props}
              >
                <svg>{<Arrow />}</svg>
              </ButtonForm>
            </div>
          </form>
        )}
      </div>
    </ModalFormWrapper>
  );
};

// FormComponent.propTypes = {
//   titleText: PropTypes.string.isRequired,
//   buttonText: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   inputContent: PropTypes.arrayOf(
//     PropTypes.shape({
//       inputType: PropTypes.string.isRequired,
//       labelText: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
