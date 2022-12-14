import React from 'react';
import { Button } from '../button/button';
import Arrow from '../../../public/svg/Arrow.svg';
import { Input } from '../input/input';
import { PageWrapper } from './formComponentStyle';
import { useForm } from 'react-hook-form';
import {
  verifyPassword,
  verifyEmail,
  // UserVerification,
  verifyBaseData,
  verifyConfirmPassword,
} from './services/validation';
import PropTypes from 'prop-types';

export const FormComponent = ({
  titleText,
  buttonText,
  inputContent,
  children,
  onSubmit,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const renderInput = inputs => {
    return inputs.map(input => {
      return <Input key={input.labelText} {...input} register={register} errors={errors} />;
    });
  };

  const getSubmitData = inputField => {
    const findCondition = (value, validateFn, options = {}) => {
      if (value in inputField) {
        const validateData = validateFn(value, inputField?.[value], options);

        if (validateData?.error) {
          setError(validateData.name, { ...validateData });

          return false;
        }

        return true;
      }
    };

    switch (false) {
      case findCondition('name', verifyBaseData):
        return;

      case findCondition('lastname', verifyBaseData):
        return;

      case findCondition('email', verifyEmail):
        return;

      case findCondition('password', verifyPassword):
        return;

      case findCondition('confirm password', verifyConfirmPassword, {
        compare: inputField?.password,
      }):
        return;

      default:
        break;
    }

    onSubmit(inputField);
  };

  return (
    <PageWrapper>
      <h3>{titleText}</h3>
      <form onSubmit={handleSubmit(getSubmitData)}>
        {renderInput(inputContent)}
        <div className="form_footer">
          {children}
          <Button type="submit" {...props}>
            {buttonText}
          </Button>
        </div>
      </form>
    </PageWrapper>
  );
};

FormComponent.propTypes = {
  titleText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputContent: PropTypes.arrayOf(
    PropTypes.shape({
      inputType: PropTypes.string.isRequired,
      labelText: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
