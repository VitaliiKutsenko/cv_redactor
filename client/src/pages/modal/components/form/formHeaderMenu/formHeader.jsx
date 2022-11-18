import React from 'react';
import { FormButton } from '../../buttons/formButton';
import HideArrow from '../../../../../../public/svg_modal/HideArrow.svg';
import AddForm from '../../../../../../public/svg_modal/AddForm.svg';
import RemoveFormField from '../../../../../../public/svg_modal/RemoveFormField.svg';
import SettingsField from '../../../../../../public/svg_modal/SettingsField.svg';

import { FormHeaderWrapper } from './formHeaderStyled';

export const FormHeader = ({
  showForm,
  handleAdditionalField,
  handleRemoveAdditionalField,
  label,
  setShowForm,
  themes,
  id,
}) => {
  return (
    <FormHeaderWrapper showForm={showForm} themes={themes}>
      <div className="header_label">
        <span>{label}</span>
      </div>
      <div className="button_menu">
        {id === 1 && (
          <FormButton fillColor="green" onClick={handleAdditionalField} content={<AddForm />} />
        )}
        {id > 1 && (
          <FormButton
            fillColor="tomato"
            content={<RemoveFormField />}
            onClick={() => handleRemoveAdditionalField(id)}
          />
        )}
        <FormButton
          fillColor="orange"
          content={<HideArrow />}
          onClick={e => setShowForm(prev => !prev)}
        />
        <FormButton fillColor="blue" content={<SettingsField />} />
      </div>
    </FormHeaderWrapper>
  );
};
