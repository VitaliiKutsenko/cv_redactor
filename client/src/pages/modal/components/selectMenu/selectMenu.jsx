import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';
import { SelectMenuWrapper, SelectTriggerWrapper } from './selectMenuStyled';
import { selectMenuFields } from '../../schema/selectMenuFields';
import { useNavigate } from 'react-router-dom';
import SelectArrow from '../../../../../public/svg_modal/SelectArrow.svg';

export const SelectMenu = ({ setModalContent }) => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  const listHandler = useCallback(e => {
    const select = e.target.closest('li');

    if (select) {
      const choseColor = selectMenuFields.find(({ field }) => field === select.innerText).theme;

      setActive(select.innerText);
      const createPaths = select.innerText
        .split(' ')
        .map(path => path.toLowerCase())
        .join('_');

      navigate(createPaths, {
        state: {
          labelText: select.innerText,
          theme: choseColor,
        },
      });

      setModalContent(false);
    }
  }, []);

  useLayoutEffect(() => {
    return () => setModalContent(true);
  });

  const renderSelectList = listFields => {
    return listFields.map(({ field, theme }, index) => (
      <SelectTriggerWrapper
        key={index}
        theme={theme}
        className={`select_lists ${field === active ? 'active' : 'hide'}`}
        onClick={listHandler}
      >
        {field}
        <SelectArrow />
      </SelectTriggerWrapper>
    ));
  };

  return (
    <SelectMenuWrapper>
      <ul className="select_list">{renderSelectList(selectMenuFields)}</ul>
    </SelectMenuWrapper>
  );
};
