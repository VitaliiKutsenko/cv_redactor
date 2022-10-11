import React, { useCallback, useMemo, useState } from 'react';
import { SelectMenuWrapper } from './selectMenuStyled';
import { selectMenuFields } from '../../schema/selectMenuFields';

export const SelectMenu = ({ handleAddList }) => {
  const [toggleList, setToggleList] = useState(false);
  const [buttonValue, setButtonValue] = useState('Choose value');
  const selectorHandler = e => {
    setToggleList(prev => !prev);
  };

  const listHandler = e => {
    const select = e.target.closest('li');

    if (select) {
      const createPaths = select.innerText
        .split(' ')
        .map(path => path.toLowerCase())
        .join('_');

      handleAddList({
        path: createPaths,
        name: select.innerText,
      });

      setToggleList(prev => !prev);
    }
  };

  const renderSelectList = listFields => {
    return listFields.map((field, index) => (
      <li key={index} className="select_lists" onClick={listHandler}>
        {field}
      </li>
    ));
  };

  return (
    <SelectMenuWrapper>
      <button className="select_button" onClick={e => selectorHandler(e)}>
        add list
      </button>
      <div className={`select_content ${toggleList ? 'show' : 'hidden'}`}>
        <ul className={`select_list ${toggleList ? 'show' : 'hidden'}`}>
          {renderSelectList(selectMenuFields)}
        </ul>
      </div>
    </SelectMenuWrapper>
  );
};
