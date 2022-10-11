import React from 'react';
import { CvHeaderWrapper } from './cvHeaderStyle';
import { useState } from 'react';
import { ButtonForm } from '../../modal/components/buttonForm/button';

export const CvHeader = () => {
  const [form, setForm] = useState({});
  const handleImg = e => {
    const formData = new FormData();
    const files = e.target.files;

    formData.append('img', files);

    setForm({
      ...form,
      formData,
    });

    console.log(form);
  };

  return (
    <CvHeaderWrapper>
      {/*<modalInputForm type="file" accept="image/*, .png, .jpeg, .gif, .web " onChange={e => handleImg(e)} />*/}
    </CvHeaderWrapper>
  );
};
