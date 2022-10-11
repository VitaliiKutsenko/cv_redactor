import { courses } from '../api/courses';
import { studyProcess } from '../api/studyProcess';

export const getMappedStudyProcess = payload => {
  return Promise.all([courses(), studyProcess(payload)])
    .then(([allCourses, userCourses]) => {
      return mappingCourses(userCourses, allCourses);
    })
    .catch(([allCourses, userCourses]) => {
      return {
        hasError: true,
        course: userCourses.data,
        user: allCourses.data,
      };
    });
};

const mappingCourses = (userCourses, allCourses) => {
  const mappedCourses = allCourses?.data.find(info => info.id === userCourses?.data.courseId);

  return {
    data: {
      courseName: mappedCourses.name,
      technologies: mappedCourses.technologies,
      ...userCourses.data,
    },
    hasError: false,
  };
};
