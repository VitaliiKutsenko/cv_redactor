import React, { useCallback, useEffect, useState, useRef } from 'react';
import Arrow from '../../../../../public/svg/Arrow.svg';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { ModalInputForm } from '../modalInput/modalInputForm';
import { ModalFormWrapper } from './modalFormStyled';
import { useSelector } from 'react-redux';
import { ButtonForm } from '../buttonForm/button';
import { useScrollBar } from '../../../../components/scrollBar/useScrollBar';
import { modalFieldsSchema } from '../../schema/modalFields';

export const ModalForm = ({ path, id, name, handleRemoveList, onSubmit, ...props }) => {
  console.log(path);
  const formMethods = useForm({
    mode: 'onChange',
    defaultValues: { [path]: modalFieldsSchema[path] },
  });

  const { control, handleSubmit } = formMethods;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: path, // unique name for your Field Array
  });
  const [fieldsState, setFieldsState] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const renderInput = (fields = []) => {
    return fields.map((field, index) => {
      return <ModalInputForm path={path} key={field.id} fieldIndex={index} {...field} />;
    });
  };

  const getSubmitData = useCallback(inputField => {
    onSubmit({
      id,
      path,
      inputField,
    });
  });

  const handleRemoveForm = e => {
    e.stopPropagation();
    const buttonId = e.target.closest('button').id;

    // handleRemoveList(buttonId);
  };

  const handleShowForm = e => {
    setShowForm(prev => !prev);
  };

  return (
    <FormProvider {...formMethods}>
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
              <ul>{renderInput(fields)}</ul>
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
    </FormProvider>
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
