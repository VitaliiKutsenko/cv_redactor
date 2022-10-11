import React from 'react';
import { LoaderWrapper } from './loaderStyle';

export const Loader = ({ responseStatus }) => {
  return (
    <LoaderWrapper className={responseStatus ? 'visible' : 'fade'}>
      <div>Hello</div>
    </LoaderWrapper>
  );
};

const courses = [
  {
    activeChapter: ' ',
    id: 3,
    mentor: [' '],
    name: '',
    rating: ' ',
    stateCourse: ' ',
    status: ' ',
    technologies: [],
  },
  {
    activeChapter: ' ',
    id: 2,
    mentor: [' '],
    name: '',
    rating: ' ',
    stateCourse: ' ',
    status: ' ',
    technologies: [],
  },
];
