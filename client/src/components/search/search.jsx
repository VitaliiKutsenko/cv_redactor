import React, { useState } from 'react';
import { debounce } from './helper';
import { verifySearch } from '../formComponent/services/validation';
import { InputWrapper } from '../input/inputStyle';

export const Search = ({ postQuery = '', setSearchParams, props }) => {
  const [error, setError] = useState({});
  const [search, setSearch] = useState(postQuery);

  const handleSearch = e => {
    const value = e.target.value;
    const validateSearch = verifySearch(value);

    setSearch(value);

    if (!validateSearch?.error) {
      setError({});
    }

    if (validateSearch?.error) {
      return setError({ ...validateSearch });
    }

    setSearchParams({ search: validateSearch });
  };

  return (
    <>
      <InputWrapper>
        <input type="search" onChange={debounce(handleSearch, 500)} placeholder="Search for the course" {...props} />
        {error.message && <p>{error.message}</p>}
      </InputWrapper>
    </>
  );
};
