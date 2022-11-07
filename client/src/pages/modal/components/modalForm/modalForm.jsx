import React, { useEffect, useLayoutEffect, useState } from 'react';
import Arrow from '../../../../../public/svg/Arrow.svg';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { ModalInputForm } from '../modalInput/modalInputForm';
import { ModalFormWrapper } from './modalFormStyled';
import { useDispatch } from 'react-redux';
import { ButtonForm } from '../buttonForm/button';
import { addCvData } from '../../../../store/actions/cvActions/cvDataActions/cvDataActions';
import { FormHeader } from '../formButtonMenu/formHeader';

export const ModalForm = ({
  path,
  id,
  fieldsList,
  onSubmit,
  handleAdditionalField,
  state,
  ...props
}) => {
  const addFieldDispatch = useDispatch();
  const formMethods = useForm({
    mode: 'onChange',
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
    onSubmit({
      id,
      path,
      inputField,
    });
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

  return (
    <FormProvider {...formMethods}>
      <ModalFormWrapper>
        <FormHeader label={state} handleAdditionalField={handleAdditionalField} />
        <form onSubmit={handleSubmit(getSubmitData)}>
          <ul>{renderInput(fields)}</ul>
          <div className="form_button__wrapper">
            <ButtonForm
              className="form_button__submit"
              type="submit"
              content="Confirm"
              {...props}
            />
          </div>
        </form>
      </ModalFormWrapper>
    </FormProvider>
  );
};
