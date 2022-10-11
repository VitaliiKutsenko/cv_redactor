import { courses, getUserCourses } from '../api/courses';

import { combineMentorInfo, roundRating } from './serviceHelpers';

export const getMappedCourses = () => {
  return Promise.all([courses(), getUserCourses()])
    .then(([allCourses, userCourses]) => mappingCourses(userCourses, allCourses))
    .catch(([allCourses, userCourses]) => {
      return {
        hasError: true,
        course: userCourses.data,
        user: allCourses.data,
      };
    });
};

const mappingCourses = (userCourses, allCourses) => {
  const mappedCourses = userCourses?.data.map(course => {
    const courseInfo = allCourses.data.find(info => info.id === course.courseId);

    return {
      mentor: combineMentorInfo(course.admins),
      activeChapter: course.activeChapter?.name,
      rating: roundRating(course.status.averageMark),
      name: courseInfo?.name,
      technologies: courseInfo.technologies.map(item => item?.name || ''),
      stateCourse: course.activeChapter.name || '',
      id: course.id,
      status: course.status.state,
      courseId: course.courseId,
    };
  });

  return {
    data: [...mappedCourses],
    hasError: false,
  };
};
