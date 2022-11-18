import React, { useEffect, useState } from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { ModalInputForm } from './formInput/modalInputForm';
import { ModalFormWrapper } from './modalFormStyled';
import { useDispatch } from 'react-redux';
import { FormButton } from '../buttons/formButton';
import { addCvData } from '../../../../store/localCvCards/cvDataActions/cvDataActions';
import { FormHeader } from './formHeaderMenu/formHeader';
import { SubmitButton } from '../buttons/submitButton';

export const ModalForm = (
  {
    path,
    id,
    fieldsList,
    onSubmit,
    handleAdditionalField,
    handleRemoveAdditionalField,
    labelText,
    theme,
  },
  props
) => {
  const addFieldDispatch = useDispatch();
  const formMethods = useForm({
    mode: 'onSubmit',
    defaultValues: { [path]: fieldsList },
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isDirty },
  } = formMethods;
  const { fields } = useFieldArray({
    control,
    name: path,
  });

  const getSubmitData = inputField => {
    onSubmit(inputField);
  };

  useEffect(() => {
    if (isDirty) {
      addFieldDispatch(
        addCvData({
          id,
          path,
          value: getValues(path),
        })
      );
    }
  }, [isDirty]);

  const renderInput = (fields = []) => {
    return fields.map((field, index) => {
      return <ModalInputForm path={path} key={field.id} id={id} fieldIndex={index} {...field} />;
    });
  };

  const [showForm, setShowForm] = useState(true);

  return (
    <FormProvider {...formMethods}>
      <ModalFormWrapper themes={theme}>
        <FormHeader
          id={id}
          themes={theme}
          showForm={showForm}
          label={labelText}
          setShowForm={setShowForm}
          handleAdditionalField={handleAdditionalField}
          handleRemoveAdditionalField={handleRemoveAdditionalField}
        />
        {showForm && (
          <form onSubmit={handleSubmit(getSubmitData)}>
            <ul>{renderInput(fields)}</ul>
            <div className="form_button__wrapper">
              <button type="submit">Confirm</button>
            </div>
          </form>
        )}
      </ModalFormWrapper>
    </FormProvider>
  );
};
