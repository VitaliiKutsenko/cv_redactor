import React from 'react';
import { ButtonForm } from '../buttonForm/button';
import HideArrow from '../../../../../public/svg_modal/HideArrow.svg';
import AddForm from '../../../../../public/svg_modal/AddForm.svg';
import RemoveFormField from '../../../../../public/svg_modal/RemoveFormField.svg';
import SettingsField from '../../../../../public/svg_modal/SettingsField.svg';

import { FormHeaderWrapper } from './formHeaderStyled';

export const FormHeader = ({ handleShowForm, handleAdditionalField, label }) => {
  return (
    <FormHeaderWrapper>
      <div className="header_label">
        <h2>{label}</h2>
      </div>
      <div className="button_menu">
        <ButtonForm fillColor="green" onClick={handleAdditionalField} content={<AddForm />} />
        <ButtonForm fillColor="tomato" content={<RemoveFormField />} />
        <ButtonForm fillColor="orange" content={<HideArrow />} onClick={e => handleShowForm(e)} />
        <ButtonForm fillColor="blue" content={<SettingsField />} />
      </div>
    </FormHeaderWrapper>
  );
};
