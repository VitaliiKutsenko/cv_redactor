import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { SelectMenuWrapper } from './selectMenuStyled';
import { selectMenuFields } from '../../schema/selectMenuFields';

export const SelectMenu = ({ handleAddList, setModalContent, setPath, path }) => {
  const listHandler = e => {
    const select = e.target.closest('li');

    if (select) {
      const createPaths = select.innerText
        .split(' ')
        .map(path => path.toLowerCase())
        .join('_');

      setPath(createPaths);
      setModalContent(false);

      if (path !== createPaths) {
      }
    }
  };

  useLayoutEffect(() => {
    return () => setModalContent(true);
  });

  const renderSelectList = listFields => {
    return listFields.map((field, index) => (
      <li key={index} className="select_lists" onClick={listHandler}>
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
