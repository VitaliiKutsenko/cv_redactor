import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { SelectMenuWrapper } from './selectMenuStyled';
import { selectMenuFields } from '../../schema/selectMenuFields';
import { useNavigate } from 'react-router-dom';

export const SelectMenu = ({ handleAddList, setModalContent, setPath, path }) => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const listHandler = e => {
    const select = e.target.closest('li');

    setActive(select.innerText);

    if (select) {
      const createPaths = select.innerText
        .split(' ')
        .map(path => path.toLowerCase())
        .join('_');

      navigate(createPaths, { state: select.innerText });

      setModalContent(false);
    }
  };

  useLayoutEffect(() => {
    return () => setModalContent(true);
  });

  const renderSelectList = listFields => {
    return listFields.map((field, index) => (
      <li
        key={index}
        className={`select_lists ${field === active ? 'active' : 'hide'}`}
        onClick={listHandler}
      >
        {field}
      </li>
    ));
  };

  return (
    <SelectMenuWrapper>
      <ul className="select_list">{renderSelectList(selectMenuFields)}</ul>
    </SelectMenuWrapper>
  );
};
