import React from 'react';
import { ModalInputFormWrapper } from './modalInputFormStyle';
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { ButtonForm } from '../buttonForm/button';
import AddFields from '../../../../../public/svg_modal/AddFields.svg';
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
          {props.multi && (
            <ButtonForm
              colorStart="green"
              colorEnd="forestgreen"
              type="button"
              onClick={addProfileHandler}
              content={<AddFields />}
              info="Add new field"
            />
          )}
        </div>
        <ul>
          {fields.map((field, index) => {
            return (
              <ModalInputFields
                inputIndex={index}
                key={field.id}
                {...props}
                {...field}
                name={`${props.path}.${props.fieldIndex}.values.${index}.value`}
              />
            );
          })}
        </ul>
      </ModalInputFormWrapper>
    </SocialContext.Provider>
  );
};
